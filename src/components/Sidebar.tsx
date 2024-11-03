'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  path: string;
  icon: React.ReactNode;
  activeColor: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    path: '/',
    label: 'Home',
    activeColor: 'text-teal-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    path: '/message-board',
    label: 'Messages',
    activeColor: 'text-red-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    path: '/timeline',
    label: 'Timeline',
    activeColor: 'text-gray-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    path: '/location',
    label: 'Location',
    activeColor: 'text-gray-500',
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-4 top-1/4 bg-white rounded-full p-4 shadow-lg">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-all duration-200 hover:opacity-70 ${isActive ? item.activeColor : 'text-gray-400'
                }`}
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
