
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X, Search, User } from 'lucide-react';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     'Home',
//     'Training',
//     'Registration Form',
//     'Moodle',
//     'Upcoming Event',
//     'Contact',
//     'Donate',
//     'Gallery',
//   ];

//   const generateHref = (label: string) => {
//     if (label.toLowerCase() === 'home') return '/';
//     return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
//   };

//   // Map each path to a specific background
//   const bgColorMap: { [key: string]: string } = {
//     '/': 'bg-transparent text-white',
//     '/training': 'bg-orange-900 text-white',
//     '/registration-form': 'bg-yellow-800 text-white',
//     '/moodle': 'bg-blue-900 text-white',
//     '/upcoming-event': 'bg-green-900 text-white',
//     '/contact': 'bg-amber-900 text-white',
//     '/donate': 'bg-red-900 text-white',
//     '/gallery': 'bg-purple-900 text-white',
//   };

//   // Determine background style from path
//   const navBg = bgColorMap[pathname] || 'bg-orange-900 text-white';

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <nav className={`flex items-center justify-between px-6 md:px-10 py-4 ${navBg} shadow-md transition-all duration-300`}>
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <img
//               src="/homepageimage/logo 1.png"
//               alt="Logo"
//               className="h-12 w-auto cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex space-x-6 font-medium">
//           {navLinks.map((link) => (
//             <li key={link}>
//               <Link
//                 href={generateHref(link)}
//                 className="hover:text-orange-400 transition"
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Icons & Mobile Toggle */}
//         <div className="flex items-center space-x-4">
//           <button className="hover:text-orange-400">
//             <Search className="h-5 w-5" />
//           </button>
//           <button className="hover:text-orange-400">
//             <User className="h-5 w-5" />
//           </button>
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-white font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link}
//               href={generateHref(link)}
//               className="block py-2 border-b border-white/20 hover:text-orange-400 transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               {link}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    'Home',
    'Training',
    'Registration Form',
    'Moodle',
    'Upcoming Event',
    'Contact',
    'Donate',
    'Gallery',
  ];

  const generateHref = (label: string) => {
    if (label.toLowerCase() === 'home') return '/';
    return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Transparent Navbar for all pages
  const navBg = 'bg-black/30 backdrop-blur-md text-white';

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`flex items-center justify-between px-6 md:px-10 py-4 ${navBg} shadow-sm transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/homepageimage/logo 1.png"
              alt="Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                href={generateHref(link)}
                className="hover:text-orange-400 transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-orange-400">
            <Search className="h-5 w-5" />
          </button>
          <button className="hover:text-orange-400">
            <User className="h-5 w-5" />
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={generateHref(link)}
              className="block py-2 border-b border-white/20 hover:text-orange-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
