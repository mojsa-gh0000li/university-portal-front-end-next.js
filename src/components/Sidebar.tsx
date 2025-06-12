"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' },
    { href: '/courses', label: 'Courses', icon: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7z' },
    { href: '/food-reservation', label: 'Food Reservation', icon: 'M10 12a2 2 0 100-4 2 2 0 000 4z' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-auto transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
        <span className="text-xl font-bold">University Portal</span>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 ${
              pathname === item.href ? 'bg-gray-200' : ''
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d={item.icon} />
            </svg>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;