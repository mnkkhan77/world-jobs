import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { jobs as initialJobs } from '../data/mockJobs';
import { Pencil, Trash2, Plus } from 'lucide-react';
import JobModal from '../components/JobModal';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import { Job } from '../types';
import { formatDate } from '../utils/formatters';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  const handleCreateJob = () => {
    setModalMode('create');
    setSelectedJob(null);
    setIsJobModalOpen(true);
  };

  const handleEditJob = (job: Job) => {
    setModalMode('edit');
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleDeleteClick = (job: Job) => {
    setSelectedJob(job);
    setIsDeleteModalOpen(true);
  };

  const handleJobSubmit = (jobData: Omit<Job, 'id'>) => {
    if (modalMode === 'create') {
      const newJob: Job = {
        ...jobData,
        id: Math.random().toString(36).substr(2, 9),
      };
      setJobs([newJob, ...jobs]);
    } else if (modalMode === 'edit' && selectedJob) {
      setJobs(jobs.map(job => 
        job.id === selectedJob.id ? { ...jobData, id: job.id } : job
      ));
    }
    setIsJobModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedJob) {
      setJobs(jobs.filter(job => job.id !== selectedJob.id));
      setIsDeleteModalOpen(false);
      setSelectedJob(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <button
            onClick={handleCreateJob}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add New Job
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Posted Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={job.companyLogo}
                          alt={`${job.company} logo`}
                          className="h-8 w-8 rounded-full mr-3"
                        />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{job.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{job.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(job.postedDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEditJob(job)}
                        className="text-blue-600 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-400 mr-3"
                        title="Edit job"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(job)}
                        className="text-red-600 dark:text-red-500 hover:text-red-900 dark:hover:text-red-400"
                        title="Delete job"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <JobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        onSubmit={handleJobSubmit}
        job={selectedJob || undefined}
        mode={modalMode}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        jobTitle={selectedJob?.title || ''}
      />
    </div>
  );
}