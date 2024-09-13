import React from "react";

export default function SummaryCards({ jobPosts }) {
  const totalApplications = jobPosts.reduce(
    (sum, job) => sum + job.applications,
    0
  );
  const totalSearches = jobPosts.reduce((sum, job) => sum + job.searches, 0);
  const totalViews = jobPosts.reduce((sum, job) => sum + job.views, 0);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Applications
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {totalApplications}
          </dd>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Searches
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {totalSearches}
          </dd>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Views
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            {totalViews}
          </dd>
        </div>
      </div>
    </div>
  );
}
