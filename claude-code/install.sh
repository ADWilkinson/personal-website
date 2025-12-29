#!/bin/bash

# Claude Code Tools Installation Script
# Author: Andrew Wilkinson (github.com/ADWilkinson)
# Installs custom agents, commands, and statusline configuration

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

CLAUDE_DIR="$HOME/.claude"
BACKUP_DIR=""
BACKUP_CREATED=false
INSTALL_SUCCESS=false

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

cleanup() {
    local exit_code=$?

    if [ "$exit_code" -ne 0 ] && [ "$BACKUP_CREATED" = true ]; then
        print_error "Installation failed! Rolling back..."
        rollback_installation
    elif [ "$exit_code" -eq 0 ] && [ "$INSTALL_SUCCESS" = true ] && [ "$BACKUP_CREATED" = true ]; then
        print_status "Cleaning up backup..."
        rm -rf "$BACKUP_DIR"
    fi
}

trap cleanup EXIT

rollback_installation() {
    if [ "$BACKUP_CREATED" = false ] || [ ! -d "$BACKUP_DIR" ]; then
        return 1
    fi

    if [ -f "$BACKUP_DIR/metadata/manifest.txt" ]; then
        while IFS= read -r line; do
            if [[ $line =~ ^[[:space:]]*Agent:[[:space:]]*(.+\.md)$ ]]; then
                filename="${BASH_REMATCH[1]}"
                rm -f "$CLAUDE_DIR/agents/$filename"
                [ -f "$BACKUP_DIR/agents/$filename" ] && cp "$BACKUP_DIR/agents/$filename" "$CLAUDE_DIR/agents/"
            elif [[ $line =~ ^[[:space:]]*Command:[[:space:]]*(.+\.md)$ ]]; then
                filename="${BASH_REMATCH[1]}"
                rm -f "$CLAUDE_DIR/commands/$filename"
                [ -f "$BACKUP_DIR/commands/$filename" ] && cp "$BACKUP_DIR/commands/$filename" "$CLAUDE_DIR/commands/"
            fi
        done < "$BACKUP_DIR/metadata/manifest.txt"
    fi

    print_success "Rollback completed"
}

check_claude_installation() {
    if [ ! -d "$CLAUDE_DIR" ]; then
        print_error "Claude Code directory not found at $CLAUDE_DIR"
        print_error "Install Claude Code first: https://github.com/anthropics/claude-code"
        exit 1
    fi
    print_success "Found Claude Code at $CLAUDE_DIR"
}

create_directories() {
    mkdir -p "$CLAUDE_DIR/agents"
    mkdir -p "$CLAUDE_DIR/commands"
    print_success "Directories ready"
}

backup_existing() {
    local timestamp=$(date +"%Y%m%d_%H%M%S")
    BACKUP_DIR="$CLAUDE_DIR/backup_$timestamp"

    mkdir -p "$BACKUP_DIR/agents"
    mkdir -p "$BACKUP_DIR/commands"
    mkdir -p "$BACKUP_DIR/metadata"

    echo "# Installation Manifest" > "$BACKUP_DIR/metadata/manifest.txt"
    echo "Timestamp: $(date)" >> "$BACKUP_DIR/metadata/manifest.txt"
    echo "" >> "$BACKUP_DIR/metadata/manifest.txt"

    local files_backed_up=0

    for agent_file in agents/*.md; do
        if [ -f "$agent_file" ]; then
            agent_name=$(basename "$agent_file")
            echo "Agent: $agent_name" >> "$BACKUP_DIR/metadata/manifest.txt"
            if [ -f "$CLAUDE_DIR/agents/$agent_name" ]; then
                cp "$CLAUDE_DIR/agents/$agent_name" "$BACKUP_DIR/agents/"
                ((files_backed_up++)) || true
            fi
        fi
    done

    for command_file in commands/*.md; do
        if [ -f "$command_file" ]; then
            command_name=$(basename "$command_file")
            echo "Command: $command_name" >> "$BACKUP_DIR/metadata/manifest.txt"
            if [ -f "$CLAUDE_DIR/commands/$command_name" ]; then
                cp "$CLAUDE_DIR/commands/$command_name" "$BACKUP_DIR/commands/"
                ((files_backed_up++)) || true
            fi
        fi
    done

    BACKUP_CREATED=true

    if [ $files_backed_up -gt 0 ]; then
        print_warning "Backed up $files_backed_up existing files"
    fi
}

install_agents() {
    print_status "Installing agents..."

    if [ ! -d "agents" ]; then
        print_warning "No agents directory found, skipping"
        return
    fi

    local count=0
    for agent_file in agents/*.md; do
        if [ -f "$agent_file" ]; then
            cp "$agent_file" "$CLAUDE_DIR/agents/"
            ((count++)) || true
        fi
    done

    print_success "Installed $count agents"
}

install_commands() {
    print_status "Installing commands..."

    if [ ! -d "commands" ]; then
        print_warning "No commands directory found, skipping"
        return
    fi

    local count=0
    for command_file in commands/*.md; do
        if [ -f "$command_file" ]; then
            cp "$command_file" "$CLAUDE_DIR/commands/"
            ((count++)) || true
        fi
    done

    print_success "Installed $count commands"
}

install_statusline() {
    print_status "Installing statusline..."

    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    STATUSLINE_SCRIPT="$SCRIPT_DIR/statusline/flying-dutchman-statusline.sh"

    if [ ! -f "$STATUSLINE_SCRIPT" ]; then
        print_warning "Statusline script not found, skipping"
        return
    fi

    chmod +x "$STATUSLINE_SCRIPT"

    SETTINGS_FILE="$CLAUDE_DIR/settings.json"

    if [ -f "$SETTINGS_FILE" ] && command -v jq >/dev/null 2>&1; then
        cp "$SETTINGS_FILE" "${SETTINGS_FILE}.backup"
        jq --arg statusline "$STATUSLINE_SCRIPT" \
           '.statusline = $statusline' "$SETTINGS_FILE" > "${SETTINGS_FILE}.tmp" && \
           mv "${SETTINGS_FILE}.tmp" "$SETTINGS_FILE"
        print_success "Configured statusline in settings.json"
    else
        print_warning "Add to settings.json: \"statusline\": \"$STATUSLINE_SCRIPT\""
    fi
}

show_summary() {
    echo
    print_success "Installation complete!"
    echo
    echo "Installed agents:"
    ls -1 "$CLAUDE_DIR/agents" 2>/dev/null | sed 's/.md$//' | sed 's/^/  - /' || echo "  (none)"
    echo
    echo "Installed commands:"
    ls -1 "$CLAUDE_DIR/commands" 2>/dev/null | sed 's/.md$//' | sed 's/^/  - \//' || echo "  (none)"
    echo
    echo "Usage:"
    echo "  Agents: Available via Task tool subagent_type parameter"
    echo "  Commands: Use slash commands (e.g., /repo-polish)"
    echo
}

main() {
    echo
    echo "Claude Code Tools Installer"
    echo "==========================="
    echo "Author: Andrew Wilkinson"
    echo

    while [[ $# -gt 0 ]]; do
        case $1 in
            --claude-dir)
                CLAUDE_DIR="$2"
                shift 2
                ;;
            --help|-h)
                echo "Usage: $0 [OPTIONS]"
                echo
                echo "Options:"
                echo "  --claude-dir DIR    Custom Claude directory (default: ~/.claude)"
                echo "  --help, -h          Show help"
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                exit 1
                ;;
        esac
    done

    CLAUDE_DIR="${CLAUDE_DIR/#\~/$HOME}"

    # Check if we're in the right directory
    if [ ! -d "agents" ] && [ ! -d "commands" ]; then
        print_error "Run this script from the claude-code directory"
        exit 1
    fi

    check_claude_installation
    backup_existing
    create_directories
    install_agents
    install_commands
    install_statusline

    INSTALL_SUCCESS=true

    show_summary
}

main "$@"
