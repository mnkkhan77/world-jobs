import React from 'react';
import { Users, Target, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Job Portal
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're on a mission to connect talented professionals with their dream jobs
            and help companies find the perfect candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              A diverse group of professionals passionate about connecting talent with opportunity.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              To revolutionize the way people find and secure their ideal career opportunities.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Our Reach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Connecting talent with opportunities across the globe in multiple industries.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Founded in 2024, Job Portal has grown from a small startup to a leading platform in the job search industry. 
            We understand the challenges both job seekers and employers face in today's rapidly evolving job market.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our platform leverages cutting-edge technology and human expertise to create meaningful connections between 
            talented professionals and forward-thinking companies. We're proud to have helped thousands of people find 
            their dream jobs and assisted countless companies in building strong teams.
          </p>
        </div>

        <div className="bg-blue-600 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-white/90 mb-6">
            We're always looking for talented individuals to join our mission.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}