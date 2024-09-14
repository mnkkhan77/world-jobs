import React from "react";
import { useLocation } from "react-router-dom";

function JobApplyPage() {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
          {job.title}
        </h2>
        <p className="text-xl text-gray-600 mb-2">{job.company}</p>
        <p className="text-lg text-gray-500 mb-4">{job.location}</p>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-6">
          ${job.salary.toLocaleString()}/year
        </p>
        <a
          href={job.applicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default JobApplyPage;
