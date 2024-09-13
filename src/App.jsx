import React, { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import JobDescription from "./components/JobDescription";
import JobList from "./components/JobList";
import JobListControls from "./components/JobListControls";
import JobSearch from "./components/JobSearch";
import LoginForm from "./components/LoginForm";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import { initialJobs } from "./data"; // Import job data

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [viewMode, setViewMode] = useState("grid");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchResults, setSearchResults] = useState(jobs);

  const handleSearch = (keyword) => {
    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase()) ||
        job.keywords.some((keywordItem) =>
          keywordItem.toLowerCase().includes(keyword.toLowerCase())
        )
    );
    setSearchResults(filteredJobs);
  };

  const handleSort = (sortType) => {
    let sortedJobs;
    if (sortType === "newest") {
      sortedJobs = [...searchResults].sort((a, b) => b.id - a.id);
    } else if (sortType === "salary") {
      sortedJobs = [...searchResults].sort((a, b) => b.salary - a.salary);
    }
    setSearchResults(sortedJobs);
  };

  const handleLogin = (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      setIsAdmin(true);
      setShowLogin(false);
    } else {
      alert("Invalid login credentials");
    }
  };

  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setSearchResults((prevResults) => [...prevResults, newJob]);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetail = () => {
    setSelectedJob(null);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleViewModeToggle = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header isAdmin={isAdmin} onLoginClick={handleLoginClick} />

      <JobSearch onSearch={handleSearch} onSort={handleSort} />

      {isAdmin && (
        <div className="mb-6">
          <AdminPanel onAddJob={handleAddJob} />
        </div>
      )}

      <JobListControls
        viewMode={viewMode}
        onViewModeToggle={handleViewModeToggle}
      />

      <JobList
        jobs={searchResults}
        viewMode={viewMode}
        onJobClick={handleJobClick}
      />

      {selectedJob && (
        <JobDescription job={selectedJob} onClose={handleCloseJobDetail} />
      )}

      {showLogin && (
        <LoginForm onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      )}
      <Footer />
    </div>
  );
}

export default App;
