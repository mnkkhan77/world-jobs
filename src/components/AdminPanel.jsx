import React, { useState } from "react";

function AdminPanel({ onAddJob }) {
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    salary: "",
    applicationUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob({ ...newJob, id: Date.now() });
    setNewJob({
      title: "",
      company: "",
      location: "",
      description: "",
      salary: "",
      applicationUrl: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Add New Job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={newJob.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          name="company"
          value={newJob.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          name="location"
          value={newJob.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="description"
          value={newJob.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
        <input
          type="number"
          name="salary"
          value={newJob.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="url"
          name="applicationUrl"
          value={newJob.applicationUrl}
          onChange={handleChange}
          placeholder="Application URL"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          Add Job
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;
