// Responsive design utilities and breakpoint helpers

export const breakpoints = {
  sm: '640px',   // Small devices (phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (desktops)
  xl: '1280px',  // Extra large devices
  '2xl': '1536px', // 2X large devices
}

export const responsive = {
  // Container patterns
  container: {
    centered: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    narrow: 'mx-auto max-w-2xl px-4 sm:px-6 lg:px-8',
    wide: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8',
  },
  
  // Grid patterns
  grid: {
    responsive: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
    articles: 'grid grid-cols-1 gap-y-20 lg:grid-cols-2',
    projects: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
    twoColumn: 'grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12',
  },
  
  // Typography scaling
  text: {
    hero: 'text-4xl sm:text-5xl lg:text-6xl',
    heading: 'text-2xl sm:text-3xl lg:text-4xl',
    subheading: 'text-lg sm:text-xl lg:text-2xl',
    body: 'text-base sm:text-lg',
    small: 'text-sm sm:text-base',
  },
  
  // Spacing scaling
  spacing: {
    section: 'py-16 sm:py-20 lg:py-24',
    component: 'py-8 sm:py-12 lg:py-16',
    element: 'py-4 sm:py-6 lg:py-8',
  },
  
  // Image sizing
  images: {
    avatar: 'h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16',
    photo: 'w-32 sm:w-52 lg:w-56',
    logo: 'h-6 w-6 sm:h-8 sm:w-8',
  },
  
  // Layout helpers
  layout: {
    flexCol: 'flex flex-col space-y-4 sm:space-y-6 lg:space-y-8',
    flexRow: 'flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0',
    stack: 'space-y-4 sm:space-y-6 lg:space-y-8',
  },
}

// Helper function to generate responsive classes
export function getResponsiveClass(
  baseClass: string,
  smClass?: string,
  mdClass?: string,
  lgClass?: string,
  xlClass?: string
): string {
  const classes = [baseClass]
  if (smClass) classes.push(`sm:${smClass}`)
  if (mdClass) classes.push(`md:${mdClass}`)
  if (lgClass) classes.push(`lg:${lgClass}`)
  if (xlClass) classes.push(`xl:${xlClass}`)
  return classes.join(' ')
}

// Helper function for responsive text sizing
export function getResponsiveText(size: keyof typeof responsive.text): string {
  return responsive.text[size]
}

// Helper function for responsive spacing
export function getResponsiveSpacing(type: keyof typeof responsive.spacing): string {
  return responsive.spacing[type]
}

// Helper function for responsive containers
export function getResponsiveContainer(variant: keyof typeof responsive.container = 'centered'): string {
  return responsive.container[variant]
}