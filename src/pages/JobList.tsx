import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobCard from '../components/JobCard';
import JobFilters from '../components/JobFilters';
import RecommendedJobs from '../components/RecommendedJobs';
import { RootState } from '../store';
import { toggleSaveJob } from '../store/slices/jobsSlice';
import { JobFilterOptions } from '../types';

export default function JobList() {
  const dispatch = useDispatch();
  const { jobs, savedJobs } = useSelector((state: RootState) => state.jobs);
  const [filters, setFilters] = useState<JobFilterOptions>({
    search: '',
    location: '',
    type: '',
    minSalary: 0,
    maxSalary: 1000000,
    sortBy: 'date',
    sortOrder: 'desc',
  });
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
      setFilters({ ...filters, search: '' });
    } else {
      setSelectedSkill(skill);
      setFilters({ ...filters, search: skill });
    }
  };

  const filteredJobs = jobs.filter(job => {
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.requirements.some(req => req.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }

    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      if (!job.location.toLowerCase().includes(locationLower)) return false;
    }

    if (filters.type && job.type !== filters.type) return false;

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'date') {
      return filters.sortOrder === 'desc'
        ? new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        : new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
    } else {
      return filters.sortOrder === 'desc'
        ? b.salaryMax - a.salaryMax
        : a.salaryMax - b.salaryMax;
    }
  });

  const handleSaveJob = (jobId: string) => {
    dispatch(toggleSaveJob(jobId));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <JobFilters filters={filters} onFilterChange={setFilters} />
          <div className="space-y-6">
            {selectedSkill && (
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex items-center justify-between">
                <span className="text-blue-600 dark:text-blue-400">
                  Filtering by skill: {selectedSkill}
                </span>
                <button
                  onClick={() => handleSkillClick(selectedSkill)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Clear filter
                </button>
              </div>
            )}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">No jobs found matching your criteria</p>
              </div>
            ) : (
              filteredJobs.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  onSave={handleSaveJob}
                  isSaved={savedJobs.includes(job.id)}
                  onSkillClick={handleSkillClick}
                />
              ))
            )}
          </div>
        </div>
        <div className="lg:col-span-1">
          <RecommendedJobs />
        </div>
      </div>
    </main>
  );
}