


'use client';

import React from 'react';
import { Eye, ExternalLink } from 'lucide-react';

const UpcomingEvent = () => {
  return (
    <section className="bg-[#f8f8f8] min-h-screen flex justify-center items-center pt-32 pb-20 px-4">
      <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Image container with hover icons */}
        <div className="relative group">
          <img
            src="/homepageimage/home.png" // Replace with your actual path
            alt="Upcoming Event"
            className="w-full h-auto object-cover"
          />
          {/* Overlay icons */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
            <button
              aria-label="View"
              className="p-3 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              <Eye className="text-gray-800" />
            </button>
            <a
              href="https://example.com" // Replace with your event link
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow hover:bg-gray-200 transition"
            >
              <ExternalLink className="text-gray-800" />
            </a>
          </div>
        </div>

        {/* Title */}
        <div className="py-4 text-center">
          <h2 className="text-lg font-bold text-gray-900">Upcoming Event</h2>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
