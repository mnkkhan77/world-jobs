import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Use flex for smaller screens */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 items-center md:items-start justify-center">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase className="text-blue-600" size={28} />
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                Job Portal
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              Find your dream job with our comprehensive job search platform.
              Empowering job seekers and employers alike.
            </p>
            <div className="flex gap-6 mt-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Job Seekers Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              For Job Seekers
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="/browse-jobs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-jobs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              For Employers
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="/post-job"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
