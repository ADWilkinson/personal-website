
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
    <div className="space-y-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Project Type Filter */}
        <select
          value={filters.selectedType}
          onChange={(e) => handleTypeChange(e.target.value)}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:border-zinc-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-zinc-600 dark:focus:border-teal-400 dark:focus:ring-teal-400/20"
        >
          <option value="all">All Projects</option>
          <option value="production">Production Apps</option>
          <option value="other">Other Projects</option>
        </select>

        {/* Sort By */}
        <select
          value={filters.sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:border-zinc-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-zinc-600 dark:focus:border-teal-400 dark:focus:ring-teal-400/20"
        >
          <option value="name">Sort: Name</option>
          <option value="recent">Sort: Recent</option>
          <option value="type">Sort: Type</option>
        </select>

        {/* Clear Filters */}
        {(filters.selectedTags.length > 0 || filters.selectedType !== 'all' || filters.sortBy !== 'name') && (
          <button
            onClick={clearFilters}
            className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
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
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
              filters.selectedTags.includes(tag)
                ? 'bg-teal-500 text-white dark:bg-teal-500'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

    </div>
  )
}