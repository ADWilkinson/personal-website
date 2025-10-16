
export interface ProjectFilterOptions {
  searchTerm: string
  selectedTags: string[]
  selectedType: string
  sortBy: string
}

interface ProjectFilterProps {
  filters: ProjectFilterOptions
  onFiltersChange: (filters: ProjectFilterOptions) => void
  availableTags: string[]
}

export function ProjectFilter({ filters, onFiltersChange, availableTags }: ProjectFilterProps) {
  const handleTagToggle = (tag: string) => {
    const newTags = filters.selectedTags.includes(tag)
      ? filters.selectedTags.filter(t => t !== tag)
      : [...filters.selectedTags, tag]
    onFiltersChange({ ...filters, selectedTags: newTags })
  }

  const handleTypeChange = (type: string) => {
    onFiltersChange({ ...filters, selectedType: type })
  }

  const handleSortChange = (sortBy: string) => {
    onFiltersChange({ ...filters, sortBy })
  }

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: '',
      selectedTags: [],
      selectedType: 'all',
      sortBy: 'name'
    })
  }

  return (
    <div className="space-y-5 rounded-lg border border-[var(--border-muted)] bg-[var(--surface-muted)] p-5">
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--text-primary)]">
        {/* Project Type Filter */}
        <select
          value={filters.selectedType}
          onChange={(e) => handleTypeChange(e.target.value)}
          className="rounded-lg border border-[var(--border-muted)] bg-[var(--surface-muted)] px-3 py-2 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors focus:border-[var(--accent-primary)] focus:outline-none focus:ring-0"
        >
          <option value="all">All Projects</option>
          <option value="production">Production Apps</option>
          <option value="other">Other Projects</option>
        </select>

        {/* Sort By */}
        <select
          value={filters.sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="rounded-lg border border-[var(--border-muted)] bg-[var(--surface-muted)] px-3 py-2 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-primary)] transition-colors focus:border-[var(--accent-primary)] focus:outline-none focus:ring-0"
        >
          <option value="name">Sort: Name</option>
          <option value="recent">Sort: Recent</option>
          <option value="type">Sort: Type</option>
        </select>

        {/* Clear Filters */}
        {(filters.selectedTags.length > 0 || filters.selectedType !== 'all' || filters.sortBy !== 'name') && (
          <button
            onClick={clearFilters}
            className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--accent-primary)] transition-colors duration-90 hover:text-[var(--text-primary)]"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`rounded-lg border border-[var(--border-muted)] px-3 py-1 text-[0.6rem] uppercase tracking-[0.1em] transition-colors duration-90 ${
              filters.selectedTags.includes(tag)
                ? 'bg-[var(--border-default)] text-[var(--surface-muted)]'
                : 'bg-[var(--surface-muted)] text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

    </div>
  )
}
