import React from "react";

function JobListControls({ viewMode, onViewModeToggle }) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={onViewModeToggle}
        className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300"
        aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
      >
        {viewMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
      </button>
    </div>
  );
}

export default JobListControls;
