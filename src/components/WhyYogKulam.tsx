import React from "react";
import Image from "next/image"; // Use if using Next.js

const WhyYogKulam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Why <span className="text-orange-500">Yog-Kulam</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Currently, Yog-Kulam is working on integrating ancient Yoga with our
            education system, with an aim of comprehensive development of our
            children. Over the course of time, different styles of Yoga have
            developed, we aim to bring it all under one roof.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative">
          {/* Large central yoga pose */}
          <Image
            src="/homepageimage/why yog kulam.png" // Ensure this image exists in the public folder
            alt="Main Yoga Pose"
            width={350}
            height={450}
            className="z-10 relative"
          />

         
        </div>
      </div>
    </section>
  );
};

export default WhyYogKulam;
