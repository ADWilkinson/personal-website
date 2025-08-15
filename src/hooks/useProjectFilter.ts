import { useState, useMemo } from 'react'
import { ProjectFilterOptions } from '@/components/ProjectFilter'

export interface Project {
  name: string
  description: string
  link: { href: string; label: string; type: string }
  icon: any
  image?: any
  tags?: string[]
  category?: 'production' | 'other'
}

export function useProjectFilter(projects: Project[]) {
  const [filters, setFilters] = useState<ProjectFilterOptions>({
    searchTerm: '',
    selectedTags: [],
    selectedType: 'all',
    sortBy: 'name'
  })

  // Extract all unique tags from projects
  const availableTags = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags || [])
    return Array.from(new Set(allTags)).sort()
  }, [projects])

  // Filter and sort projects based on current filters
  const filteredProjects = useMemo(() => {
    let filtered = [...projects]

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower)
      )
    }

    // Filter by selected tags
    if (filters.selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        filters.selectedTags.some(tag => project.tags?.includes(tag))
      )
    }

    // Filter by project type
    if (filters.selectedType !== 'all') {
      filtered = filtered.filter(project => project.category === filters.selectedType)
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'recent':
          // For this example, we'll use a simple priority based on category
          // In a real app, you'd have creation/update dates
          if (a.category === 'production' && b.category !== 'production') return -1
          if (b.category === 'production' && a.category !== 'production') return 1
          return a.name.localeCompare(b.name)
        case 'type':
          if (a.category !== b.category) {
            return (a.category || '').localeCompare(b.category || '')
          }
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [projects, filters])

  return {
    filters,
    setFilters,
    availableTags,
    filteredProjects,
    totalCount: projects.length,
    filteredCount: filteredProjects.length
  }
}