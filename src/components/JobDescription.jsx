import React, { useEffect, useRef } from "react";

const JobDescription = ({ job, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleApply = () => {
    window.open(job.applicationUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold mb-4 text-indigo-600">
          {job.title}
        </h2>
        <p className="text-xl text-gray-600 mb-2">{job.company}</p>
        <p className="text-lg text-gray-500 mb-4">{job.location}</p>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-6">
          ${job.salary.toLocaleString()}/year
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleApply}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300"
          >
            Apply Now
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
