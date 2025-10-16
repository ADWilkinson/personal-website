// Accessibility utilities and standards

export const a11y = {
  // Skip links for keyboard navigation
  skipLink:
    'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded-sm border border-[var(--border-default)]/40 bg-[var(--surface-elevated)] px-4 py-2 text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-transform duration-150 focus:-translate-y-1',

  // Screen reader only text
  srOnly: 'sr-only',

  // Focus indicators
  focusRing:
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-hover)]',

  // Interactive element states
  interactive:
    'transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-hover)]',

  // Color contrast helpers
  contrast: {
    high: 'text-[var(--text-primary)]',
    medium: 'text-[var(--text-secondary)]',
    low: 'text-[var(--text-muted)]',
  },

  // Semantic HTML helpers
  landmarks: {
    main: 'role="main"',
    navigation: 'role="navigation"',
    banner: 'role="banner"',
    contentinfo: 'role="contentinfo"',
    complementary: 'role="complementary"',
  },

  // ARIA attributes
  aria: {
    hidden: 'aria-hidden="true"',
    expanded: (expanded: boolean) => `aria-expanded="${expanded}"`,
    current: (current: boolean) => (current ? 'aria-current="page"' : ''),
    label: (label: string) => `aria-label="${label}"`,
    describedby: (id: string) => `aria-describedby="${id}"`,
    labelledby: (id: string) => `aria-labelledby="${id}"`,
  },
}

// Helper function to generate accessible button props
export function getButtonA11yProps(label: string, expanded?: boolean) {
  return {
    'aria-label': label,
    ...(expanded !== undefined && { 'aria-expanded': expanded }),
    className: a11y.interactive,
  }
}

// Helper function to generate accessible link props
export function getLinkA11yProps(label: string, external?: boolean) {
  return {
    'aria-label': label,
    ...(external && { 
      target: '_blank', 
      rel: 'noopener noreferrer',
      'aria-describedby': 'external-link-description' 
    }),
    className: a11y.interactive,
  }
}

// Helper function for creating accessible form labels
export function getFormLabelProps(htmlFor: string, required?: boolean) {
  return {
    htmlFor,
    className: `block text-sm font-medium ${a11y.contrast.high}`,
    ...(required && { 'aria-required': 'true' }),
  }
}

// Helper function for creating accessible headings with proper hierarchy
export function getHeadingProps(level: 1 | 2 | 3 | 4 | 5 | 6, id?: string) {
  return {
    ...(id && { id }),
    role: 'heading',
    'aria-level': level,
  }
}
