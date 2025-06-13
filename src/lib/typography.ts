// Standardized typography classes for consistent text styling

export const typography = {
  // Headings
  h1: 'text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100',
  h2: 'text-2xl sm:text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100',
  h3: 'text-lg sm:text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100',
  h4: 'text-base sm:text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100',
  
  // Body text
  body: 'text-base text-zinc-600 dark:text-zinc-400',
  bodyLarge: 'text-lg text-zinc-600 dark:text-zinc-400',
  bodySmall: 'text-sm text-zinc-600 dark:text-zinc-400',
  
  // Meta text
  meta: 'text-sm text-zinc-500 dark:text-zinc-400',
  metaSmall: 'text-xs text-zinc-500 dark:text-zinc-400',
  
  // Links
  link: 'text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors',
  linkSubtle: 'text-zinc-800 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors',
  
  // Section titles (used in Section component)
  sectionTitle: 'text-sm font-semibold text-zinc-800 dark:text-zinc-100',
  
  // Card titles
  cardTitle: 'text-base font-semibold text-zinc-800 dark:text-zinc-100',
  
  // Line heights
  lineHeight: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },
  
  // Standardized spacing scale (Tailwind spacing values)
  spacing: {
    // Page-level spacing
    pageTop: 'mt-16 sm:mt-32',
    
    // Section spacing
    sectionGap: 'space-y-12',
    sectionGapLarge: 'space-y-16',
    
    // Content spacing
    contentGap: 'space-y-6',
    contentGapSmall: 'space-y-4',
    contentGapLarge: 'space-y-8',
    
    // Text spacing
    paragraphGap: 'space-y-4',
    listGap: 'space-y-2',
    
    // Component spacing
    cardGap: 'gap-y-16',
    gridGap: 'gap-6',
    
    // Margins
    marginSmall: 'mb-4',
    marginMedium: 'mb-6',
    marginLarge: 'mb-8',
    marginXLarge: 'mb-12',
  },
}

// Helper function to combine typography classes
export function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Utility functions for consistent typography application
export function getHeadingStyles(level: 'h1' | 'h2' | 'h3' | 'h4'): string {
  return typography[level]
}

export function getBodyStyles(variant: 'body' | 'bodyLarge' | 'bodySmall' = 'body'): string {
  return typography[variant]
}

export function getMetaStyles(variant: 'meta' | 'metaSmall' = 'meta'): string {
  return typography[variant]
}

export function getLinkStyles(variant: 'link' | 'linkSubtle' = 'link'): string {
  return typography[variant]
}

export function getSpacing(type: keyof typeof typography.spacing): string {
  return typography.spacing[type]
}