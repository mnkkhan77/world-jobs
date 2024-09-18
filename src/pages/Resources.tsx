import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: 'Guides',
      icon: BookOpen,
      items: [
        {
          title: 'Resume Writing Guide',
          description: 'Learn how to create a compelling resume that gets noticed.',
          link: '#'
        },
        {
          title: 'Interview Preparation',
          description: 'Tips and strategies for acing your job interviews.',
          link: '#'
        }
      ]
    },
    {
      category: 'Templates',
      icon: FileText,
      items: [
        {
          title: 'Resume Templates',
          description: 'Professional resume templates for various industries.',
          link: '#'
        },
        {
          title: 'Cover Letter Templates',
          description: 'Customizable cover letter templates to help you stand out.',
          link: '#'
        }
      ]
    },
    {
      category: 'Video Tutorials',
      icon: Video,
      items: [
        {
          title: 'Job Search Strategies',
          description: 'Video series on effective job search techniques.',
          link: '#'
        },
        {
          title: 'LinkedIn Optimization',
          description: 'Learn how to make your LinkedIn profile work for you.',
          link: '#'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Career Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to succeed in your job search
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map(({ category, icon: Icon, items }) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Icon className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h2>
              </div>
              
              {items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                    Learn More
                    <Download size={16} />
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Personalized Career Advice?
          </h2>
          <p className="text-white/90 mb-6">
            Schedule a consultation with one of our career experts
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
}