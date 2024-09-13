import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs, viewMode, onJobClick }) {
  return (
    <div
      className={`grid ${
        viewMode === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "grid-cols-1 gap-4"
      }`}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={onJobClick} />
      ))}
    </div>
  );
}

export default JobList;
