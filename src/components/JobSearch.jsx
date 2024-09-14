import React, { useState } from "react";

function JobSearch({ onSearch, onSort }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search jobs..."
          aria-label="Search jobs"
          className="flex-grow p-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-r-full hover:bg-indigo-600 transition-colors duration-300"
          aria-label="Search"
        >
          Search
        </button>
      </form>
      <select
        onChange={(e) => onSort(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Sort by"
      >
        <option value="newest">Newest First</option>
        <option value="salary">Highest Salary</option>
      </select>
    </div>
  );
}

export default JobSearch;
