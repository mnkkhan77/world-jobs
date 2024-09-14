import React, { useState } from "react";

export default function JobForm({ job, setJob, onSubmit, submitText }) {
  const [newTag, setNewTag] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleAddTag = () => {
    if (newTag && !job.tags.includes(newTag)) {
      setJob({ ...job, tags: [...job.tags, newTag] });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    setJob({ ...job, tags: job.tags.filter((t) => t !== tag) });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Job Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={job.title}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={job.description}
          onChange={handleInputChange}
          required
          rows="4"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="salaryRange"
          className="block text-sm font-medium text-gray-700"
        >
          Salary Range
        </label>
        <input
          type="text"
          id="salaryRange"
          name="salaryRange"
          value={job.salaryRange}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Job Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={job.location}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label
          htmlFor="workArrangement"
          className="block text-sm font-medium text-gray-700"
        >
          Work Arrangement
        </label>
        <select
          id="workArrangement"
          name="workArrangement"
          value={job.workArrangement}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select work arrangement</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="flex-grow rounded-l-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Add a tag"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Tag
          </button>
        </div>
        <div>
          <label
            htmlFor="jobUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Job URL
          </label>
          <input
            type="url"
            id="jobUrl"
            name="jobUrl"
            value={job.jobUrl}
            onChange={handleInputChange}
            required
            placeholder="https://example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-black focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {submitText}
      </button>
    </form>
  );
}
