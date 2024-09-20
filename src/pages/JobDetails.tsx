import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  ExternalLink,
  Bookmark,
  Users,
  Gift,
  Coffee,
} from 'lucide-react';
import { jobs } from '../data/mockJobs';
import { formatSalaryRange, formatDate } from '../utils/formatters';
import AdBanner from '../components/AdBanner';

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Job not found
          </h2>
          <Link
            to="/"
            className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 gap-2"
        >
          <ArrowLeft size={20} />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {job.company}
                  </h1>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <MapPin size={18} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Users size={18} />
                      <span>500+ employees</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none dark:prose-invert">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2
                    size={20}
                    className="text-gray-400 dark:text-gray-500"
                  />
                  About the Company
                </h2>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {job.companyDescription}
                </p>
              </div>
            </div>

            {/* Company Culture */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Coffee
                  size={20}
                  className="text-gray-400 dark:text-gray-500"
                />
                Company Culture
              </h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {job.culture}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Gift size={20} className="text-gray-400 dark:text-gray-500" />
                Benefits & Perks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Ad Banner */}
            <AdBanner type="google" className="py-4" />

            {/* Job Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Position: {job.title}
              </h2>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={18} />
                  <span>Posted {formatDate(job.postedDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <DollarSign size={18} />
                  <span>{formatSalaryRange(job.salaryMin, job.salaryMax)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Briefcase size={18} />
                  <span>{job.type}</span>
                </div>
              </div>

              <div className="prose max-w-none dark:prose-invert">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Job Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {job.description}
                </p>

                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meta Ad Banner */}
            <AdBanner type="meta" className="py-4" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <a
                  href={job.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                  Apply Now
                  <ExternalLink size={18} />
                </a>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors">
                  <Bookmark size={18} />
                  Save Job
                </button>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Similar Jobs
              </h2>
              <div className="space-y-4">
                {jobs
                  .filter((j) => j.id !== job.id)
                  .slice(0, 3)
                  .map((similarJob) => (
                    <Link
                      key={similarJob.id}
                      to={`/jobs/${similarJob.id}`}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {similarJob.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {similarJob.company}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
