import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';
import { Calendar, MapPin, DollarSign, Bookmark, ExternalLink } from 'lucide-react';
import { formatSalaryRange, formatDate } from '../utils/formatters';

interface JobCardProps {
  job: Job;
  onSave: (jobId: string) => void;
  isSaved: boolean;
  onSkillClick?: (skill: string) => void;
}

export default function JobCard({ job, onSave, isSaved, onSkillClick }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={job.companyLogo}
          alt={`${job.company} logo`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h2>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{job.company}</p>
          
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign size={16} />
              <span>{formatSalaryRange(job.salaryMin, job.salaryMax)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{formatDate(job.postedDate)}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.requirements.slice(0, 3).map((req) => (
              <button
                key={req}
                onClick={() => onSkillClick?.(req)}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
              >
                {req}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4 pt-4 border-t dark:border-gray-700">
        <button
          onClick={() => onSave(job.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isSaved
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
              : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          <Bookmark size={18} className={isSaved ? 'fill-current' : ''} />
          {isSaved ? 'Saved' : 'Save'}
        </button>
        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
          <ExternalLink size={18} />
        </Link>
      </div>
    </div>
  );
}