import { useState } from 'react'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'

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
  const [isTagsExpanded, setIsTagsExpanded] = useState(false)

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchTerm: value })
  }

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
    <div className="space-y-6 mb-8">
      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={filters.searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-4 py-2 text-sm placeholder-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Project Type Filter */}
        <div className="flex items-center gap-2">
          <FunnelIcon className="h-4 w-4 text-zinc-400" />
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Type:</span>
          <select
            value={filters.selectedType}
            onChange={(e) => handleTypeChange(e.target.value)}
            className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-teal-400 dark:focus:ring-teal-400"
          >
            <option value="all">All Projects</option>
            <option value="production">Production Apps</option>
            <option value="other">Other Projects</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Sort by:</span>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-teal-400 dark:focus:ring-teal-400"
          >
            <option value="name">Name</option>
            <option value="recent">Most Recent</option>
            <option value="type">Type</option>
          </select>
        </div>

        {/* Clear Filters */}
        {(filters.searchTerm || filters.selectedTags.length > 0 || filters.selectedType !== 'all' || filters.sortBy !== 'name') && (
          <button
            onClick={clearFilters}
            className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Technology Tags */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Technologies:</span>
          <button
            onClick={() => setIsTagsExpanded(!isTagsExpanded)}
            className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
          >
            {isTagsExpanded ? 'Show less' : 'Show all'}
          </button>
        </div>
        
        <div className={`flex flex-wrap gap-2 transition-all duration-300 ${isTagsExpanded ? 'max-h-none' : 'max-h-12 overflow-hidden'}`}>
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
                filters.selectedTags.includes(tag)
                  ? 'bg-teal-100 border-teal-300 text-teal-800 dark:bg-teal-900/30 dark:border-teal-700 dark:text-teal-300'
                  : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {filters.selectedTags.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {filters.selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-800 rounded-md dark:bg-teal-900/30 dark:text-teal-300"
              >
                {tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="hover:text-teal-600 dark:hover:text-teal-200"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}