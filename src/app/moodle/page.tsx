



'use client';

import React from 'react';

const MoodlePage = () => {
  return (
    <section className="bg-[#FFF9EB] pt-24 py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-4">Moodle Access</h2>
        <p className="text-center mb-10 text-gray-600">
          All enrolled students can access learning resources, schedules, and assignments through our Moodle platform.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6 text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">What is Moodle?</h3>
            <p>
              Moodle is a learning management system (LMS) that helps us provide course materials, quizzes, announcements,
              and interactive forums to support your yoga journey.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">How to Access Moodle</h3>
            <p>
              Visit our Moodle platform at{' '}
              <a
                href="https://moodle.yog-kulam.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                moodle.yog-kulam.org
              </a>
              . Use your registered email and password to log in.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-2">Need Help Logging In?</h3>
            <p>
              If you're having trouble accessing your account, contact our support team at{' '}
              <a href="mailto:support@yog-kulam.org" className="text-orange-600 underline">
                support@yog-kulam.org
              </a>{' '}
              or speak with your course coordinator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodlePage;
