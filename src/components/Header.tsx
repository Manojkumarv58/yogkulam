
import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <section className="relative h-screen overflow-hidden">
        
        {/* Background Image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/homepageimage/home.png" // ✅ Make sure the image name has no spaces and is in /public/homepageimage/
            alt="Yoga meditation on mountain"
            className="w-full h-full object-cover object-top"
          />
          {/* Soft dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white drop-shadow-xl">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Discover the Yogic Path Within
            </h1>
            <p className="text-xl mb-8">
              A Mind-Body-Soul Wisdom Practice to Transform Your Life
            </p>
            <Link href="/training">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl text-lg font-medium cursor-pointer whitespace-nowrap shadow-lg transition">
              Explore  Program
            </button>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
