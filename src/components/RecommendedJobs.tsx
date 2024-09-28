import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { Briefcase, MapPin } from 'lucide-react';
import { formatSalaryRange } from '../utils/formatters';

export default function RecommendedJobs() {
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { skills, preferredLocations, preferredJobTypes, salaryCap } = useSelector(
    (state: RootState) => state.userPreferences
  );

  const recommendedJobs = jobs
    .filter(job => {
      const hasMatchingSkills = job.requirements.some(req =>
        skills.some(skill => req.toLowerCase().includes(skill.toLowerCase()))
      );
      const hasMatchingLocation = preferredLocations.some(loc =>
        job.location.toLowerCase().includes(loc.toLowerCase())
      );
      const hasMatchingType = preferredJobTypes.includes(job.type);
      const isWithinSalaryCap = job.salaryMax <= salaryCap;

      return hasMatchingSkills && (hasMatchingLocation || hasMatchingType) && isWithinSalaryCap;
    })
    .slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommended for You</h2>
      <div className="space-y-4">
        {recommendedJobs.map(job => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-start gap-3">
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="w-10 h-10 rounded object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{job.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span>{formatSalaryRange(job.salaryMin, job.salaryMax)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="w-full mt-4 text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium">
        View All Recommendations
      </button>
    </div>
  );
}