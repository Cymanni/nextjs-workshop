'use client';
import { useState } from 'react';
import Link from 'next/link';
import '@/app/globals.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const links = [
    { href: '/about', label: 'about' },
    { href: '/dashboard', label: 'dashboard' },
    { href: '/contact', label: 'contact' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-2xl font-bold">
              <img src="./favicon.ico" alt="" className="w-10 " />
            </p>
          </Link>
          <ul className="flex items-center space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='capitalize'>
                <Link href={href}>
                  <p>{label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <style jsx global>{`
        .dark {
          background-color: #333;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Navbar;

