import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: ['Post up to 3 jobs', 'Basic analytics', 'Email support'],
      recommended: false
    },
    {
      name: 'Pro',
      price: 99,
      features: ['Unlimited job posts', 'Advanced analytics', 'Priority support', 'Featured listings'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 299,
      features: ['Custom solutions', 'API access', 'Dedicated account manager', 'Custom branding'],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${
                plan.recommended ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}