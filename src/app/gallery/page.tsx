'use client';

import React, { useState } from 'react';

const images = [
  '/gallary/yoga1.jpeg',
  '/gallary/yoga2.jpeg',
  '/gallary/yoga3.jpeg',
  '/gallary/yoga4.jpeg',
  '/gallary/yoga5.jpeg',
  '/gallary/yoga6.jpeg',
  
];

const YogaGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-10">Yoga Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Yoga pose ${index + 1}`}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged yoga pose"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default YogaGalleryPage;
