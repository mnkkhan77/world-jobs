import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Information We Collect
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Resume and professional experience</li>
                <li>Job preferences and search history</li>
                <li>Account credentials</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How We Protect Your Data
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against accidental or unlawful destruction, loss, 
                alteration, unauthorized disclosure, or access.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                How We Use Your Information
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Match you with relevant job opportunities</li>
                <li>Communicate with you about our services</li>
                <li>Ensure the security of your account</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Your Rights
              </h2>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </div>
          </section>

          <div className="border-t dark:border-gray-700 pt-6 mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@jobportal.com" className="text-blue-600 hover:text-blue-700">
                privacy@jobportal.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}