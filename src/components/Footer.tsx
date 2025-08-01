'use client';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Replace this with actual form logic
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yog-Kulam</h3>
            <p className="text-gray-400 mb-4">
              Transforming lives through the ancient wisdom and practice of yoga.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'instagram', 'youtube'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label={icon}
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
             {['Home', 'About Us', 'Why Yog-Kulam', 'Workshop', 'Contact Us'].map((link, index) => (
  <li key={index}>
    <a href="#" className="text-gray-400 hover:text-white transition-colors">
      {link}
    </a>
  </li>
))}

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-orange-400"></i>
                <span className="text-gray-400">UK 110 High St, Edware, HA8 7HF.</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-orange-400"></i>
                <span className="text-gray-400"> +44(0) 7564 674 669</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-orange-400"></i>
                <span className="text-gray-400">info@yog-kulam.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates and special offers.</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg mb-2 bg-gray-800 placeholder-gray-400 text-white"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yog-Kulam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
