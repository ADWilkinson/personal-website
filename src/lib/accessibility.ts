// Accessibility utilities and standards

export const a11y = {
  // Skip links for keyboard navigation
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zinc-900 text-white px-4 py-2 rounded-md z-50',
  
  // Screen reader only text
  srOnly: 'sr-only',
  
  // Focus indicators
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-teal-400 dark:focus:ring-offset-zinc-900',
  
  // Interactive element states
  interactive: 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-teal-400 dark:focus:ring-offset-zinc-900',
  
  // Color contrast helpers
  contrast: {
    high: 'text-zinc-900 dark:text-zinc-100', // 7:1 contrast ratio
    medium: 'text-zinc-700 dark:text-zinc-300', // 4.5:1 contrast ratio
    low: 'text-zinc-600 dark:text-zinc-400', // 3:1 contrast ratio for large text
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
    current: (current: boolean) => current ? 'aria-current="page"' : '',
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