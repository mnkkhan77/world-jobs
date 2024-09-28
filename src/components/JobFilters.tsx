import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { JobFilterOptions, JobType } from '../types';

interface JobFiltersProps {
  filters: JobFilterOptions;
  onFilterChange: (filters: JobFilterOptions) => void;
}

export default function JobFilters({
  filters,
  onFilterChange,
}: JobFiltersProps) {
  const jobTypes: JobType[] = ['Full-time', 'Part-time', 'Contract', 'Remote'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 z-10 relative">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Filter */}
        <div className="flex-1">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search jobs, skills, or companies"
              value={filters.search}
              onChange={(e) =>
                onFilterChange({ ...filters, search: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Location Filter */}
        <div className="flex-1">
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) =>
                onFilterChange({ ...filters, location: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Job Type Filter */}
        <div className="flex-none">
          <select
            value={filters.type}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                type: e.target.value as JobType | '',
              })
            }
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">All Types</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Filter */}
        <div className="flex-none">
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as 'date' | 'salary',
              })
            }
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="date">Sort by Date</option>
            <option value="salary">Sort by Salary</option>
          </select>
        </div>
      </div>
    </div>
  );
}
