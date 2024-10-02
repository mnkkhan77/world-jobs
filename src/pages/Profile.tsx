import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { User, BriefcaseIcon, BookmarkIcon, Settings, Mail, Phone, Award, MapPin, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatters';
import ProfileForm from '../components/ProfileForm';
import ChangePasswordModal from '../components/ChangePasswordModal';
import ResumeUpload from '../components/ResumeUpload';

export default function Profile() {
  const { user } = useAuth();
  const { jobs, savedJobs } = useSelector((state: RootState) => state.jobs);
  const [activeTab, setActiveTab] = useState('overview');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'applications', label: 'Applications', icon: BriefcaseIcon },
    { id: 'saved', label: 'Saved Jobs', icon: BookmarkIcon },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {user?.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === id
                        ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {activeTab === 'overview' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Overview</h3>
                  <ProfileForm />
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Job Applications</h3>
                  <div className="space-y-4">
                    {/* Mock data - In real app, fetch from backend */}
                    {[1, 2].map((_, index) => (
                      <div
                        key={index}
                        className="border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Senior Frontend Developer</h4>
                            <p className="text-gray-600 dark:text-gray-400">TechCorp Solutions</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                Applied {formatDate('2024-03-10')}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={14} />
                                San Francisco, CA
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                            In Review
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'saved' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Saved Jobs</h3>
                  <div className="space-y-4">
                    {savedJobs.length === 0 ? (
                      <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                        You haven't saved any jobs yet
                      </p>
                    ) : (
                      jobs
                        .filter(job => savedJobs.includes(job.id))
                        .map((job) => (
                          <Link
                            key={job.id}
                            to={`/jobs/${job.id}`}
                            className="block border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-start gap-4">
                              <img
                                src={job.companyLogo}
                                alt={`${job.company} logo`}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">{job.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                                  <MapPin size={14} />
                                  <span>{job.location}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-4">Security</h4>
                      <button
                        onClick={() => setIsPasswordModalOpen(true)}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Change Password
                      </button>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-4">Resume</h4>
                      <ResumeUpload />
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-4">Danger Zone</h4>
                      <button className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/70 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
}