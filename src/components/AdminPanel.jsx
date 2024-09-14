import React, { useState } from "react";
import JobForm from "./admin/JobForm";
import JobPostsTable from "./admin/JobPostsTable";
import JobStatisticsChart from "./admin/JobStatisticsChart";
import SummaryCards from "./admin/SummaryCards";

const initialJobPostsData = [
  {
    id: 1,
    title: "Senior React Developer",
    description:
      "We are looking for an experienced React developer to join our team.",
    salaryRange: "$80,000 - $120,000",
    tags: ["react", "javascript", "redux"],
    location: "New York, NY",
    workArrangement: "hybrid",
    applications: 25,
    searches: 150,
    views: 300,
  },
  {
    id: 2,
    title: "UX Designer",
    description:
      "Join our design team to create beautiful and intuitive user experiences.",
    salaryRange: "$70,000 - $100,000",
    tags: ["ux", "figma", "user-research"],
    location: "San Francisco, CA",
    workArrangement: "remote",
    applications: 18,
    searches: 100,
    views: 250,
  },
];

export default function AdminPanel() {
  const [jobPosts, setJobPosts] = useState(initialJobPostsData);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    salaryRange: "",
    tags: [],
    location: "",
    workArrangement: "",
  });
  const [editingJob, setEditingJob] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleAddJob = (e) => {
    e.preventDefault();
    if (!newJob.title.trim()) {
      alert("Title is required!");
      return;
    }

    const addedJob = {
      ...newJob,
      id: jobPosts.length + 1,
      applications: 0,
      searches: 0,
      views: 0,
    };
    setJobPosts([...jobPosts, addedJob]);
    setNewJob({
      title: "",
      description: "",
      salaryRange: "",
      tags: [],
      location: "",
      workArrangement: "",
    });
    alert("Job added successfully!");
  };

  const handleEditJob = (job) => {
    setEditingJob({ ...job });
  };

  const handleUpdateJob = () => {
    setJobPosts(
      jobPosts.map((job) => (job.id === editingJob.id ? editingJob : job))
    );
    setEditingJob(null);
  };

  const handleDeleteJob = (id) => {
    setJobPosts(jobPosts.filter((job) => job.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            World Job Admin Dashboard
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <nav className="flex space-x-4 mb-6">
            {["dashboard", "add-job", "manage-jobs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
              </button>
            ))}
          </nav>

          {activeTab === "dashboard" && (
            <div>
              <SummaryCards jobPosts={jobPosts} />
              <JobStatisticsChart jobPosts={jobPosts} />
              <JobPostsTable jobPosts={jobPosts} />
            </div>
          )}

          {activeTab === "add-job" && (
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Add New Job Post
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Use this form to create a new job posting.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <JobForm
                    job={newJob}
                    setJob={setNewJob}
                    onSubmit={handleAddJob}
                    submitText="Add Job Post"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "manage-jobs" && (
            <div>
              <JobPostsTable
                jobPosts={jobPosts}
                onEdit={handleEditJob}
                onDelete={handleDeleteJob}
                isManage={true}
              />
              {editingJob && (
                <div className="mt-8 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Edit Job Post
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Make changes to the existing job post.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <JobForm
                        job={editingJob}
                        setJob={setEditingJob}
                        onSubmit={handleUpdateJob}
                        submitText="Update Job Post"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
