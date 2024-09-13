import React from "react";

function JobCard({ job, onClick }) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => onClick(job)}
    >
      <h3 className="text-xl font-semibold text-indigo-600">{job.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="text-sm text-gray-700 mt-3">
        {job.description.substring(0, 100)}...
      </p>
      <p className="text-lg font-bold text-green-600 mt-4">
        ${job.salary.toLocaleString()}/year
      </p>
    </div>
  );
}

export default JobCard;
