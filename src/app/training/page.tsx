'use client';
import React, { useState } from 'react';

interface YogaClass {
  id: number;
  name: string;
  level: string;
  duration: string;
  instructor: string;
  description: string;
  imageUrl: string;
  schedule: string[];
}

const App: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const yogaClasses: YogaClass[] = [
    {
      id: 1,
      name: "Hatha Yoga Fundamentals",
      level: "Beginner",
      duration: "60 mins",
      instructor: "Sarah Mitchell",
      description: "Perfect for beginners, this class focuses on basic yoga postures and breathing techniques. Learn proper alignment and build a strong foundation for your practice.",
      imageUrl: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
      schedule: ["Monday 9:00 AM", "Wednesday 9:00 AM", "Friday 9:00 AM"]
    },
    {
      id: 2,
      name: "Vinyasa Flow",
      level: "Intermediate",
      duration: "75 mins",
      instructor: "Michael Chen",
      description: "Dynamic flowing sequences that synchronize breath with movement. Build strength, flexibility, and mindfulness through continuous movement.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      schedule: ["Tuesday 10:30 AM", "Thursday 10:30 AM", "Saturday 10:30 AM"]
    },
    {
      id: 3,
      name: "Ashtanga Yoga",
      level: "Advanced",
      duration: "90 mins",
      instructor: "David Kumar",
      description: "Traditional Ashtanga sequence following the primary series. This vigorous practice builds strength, flexibility, and mental focus through challenging postures.",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      schedule: ["Monday 6:00 PM", "Wednesday 6:00 PM", "Friday 6:00 PM"]
    },
    {
      id: 4,
      name: "Gentle Yoga & Meditation",
      level: "Beginner",
      duration: "60 mins",
      instructor: "Emma Wilson",
      description: "A calming practice combining gentle movements with meditation. Perfect for stress relief and improving flexibility.",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      schedule: ["Tuesday 8:00 AM", "Thursday 8:00 AM", "Sunday 8:00 AM"]
    }
  ];

  const filteredClasses = yogaClasses.filter(yogaClass => {
    const matchesLevel = selectedLevel === 'all' || yogaClass.level.toLowerCase() === selectedLevel.toLowerCase();
    const matchesSearch =
      yogaClass.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      yogaClass.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      yogaClass.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 mb-4">
            Yoga Training Programs
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Transform your mind and body with our comprehensive yoga training
            programs. Whether you're a beginner or an advanced practitioner,
            we have classes to support your journey.
          </p>
        </header>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search classes, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-black"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0a7 7 0 1110-10 7 7 0 01-10 10z"
                />
              </svg>
            </div>
            <div className="flex gap-4">
              {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                    selectedLevel === level
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredClasses.map((yogaClass) => (
            <div
              key={yogaClass.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 relative">
                <img
                  src={yogaClass.imageUrl}
                  alt={yogaClass.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                  {yogaClass.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-800 mb-2">
                  {yogaClass.name}
                </h3>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-amber-600 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.803.716 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">{yogaClass.instructor}</span>
                  <svg
                    className="w-5 h-5 text-amber-600 ml-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3"
                    />
                  </svg>
                  <span className="text-gray-600">{yogaClass.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{yogaClass.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Schedule:</h4>
                  <div className="flex flex-wrap gap-2">
                    {yogaClass.schedule.map((time, index) => (
                      <span
                        key={index}
                        className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors whitespace-nowrap">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join our community and transform your life through the practice of
            yoga.
          </p>
          <button className="bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition-colors whitespace-nowrap">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
