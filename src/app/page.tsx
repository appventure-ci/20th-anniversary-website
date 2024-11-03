'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Calculate countdown to target date
  useEffect(() => {
    const targetDate = new Date('2024-12-31T00:00:00'); // Set your target date here

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Navigation */}
      <div className="flex justify-end mb-4">
        <Link
          href="/message-board"
          className="flex items-center px-4 py-2 bg-white rounded-full shadow"
        >
          Next: Our Message Board
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-4 top-1/4 bg-white rounded-full p-4 shadow-lg">
        <div className="flex flex-col gap-6">
          <button className="text-teal-500" aria-label="Home">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
          <Link href="/message-board" className="text-red-500" aria-label="Messages">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </Link>
          <button className="text-gray-400" aria-label="History">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </button>
          <button className="text-gray-400" aria-label="Location">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20">
        {/* Countdown Section */}
        <section className="bg-white rounded-3xl p-8 mb-6 max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Countdown to<br />20th Anniversary</h1>
          <div className="flex gap-4 text-4xl font-mono">
            <div className="text-center">
              <div className="font-bold">{timeLeft.days}</div>
              <div className="text-sm text-gray-500">DAYS</div>
            </div>
            <div className="text-4xl">:</div>
            <div className="text-center">
              <div className="font-bold">{timeLeft.hours}</div>
              <div className="text-sm text-gray-500">HOURS</div>
            </div>
            <div className="text-4xl">:</div>
            <div className="text-center">
              <div className="font-bold">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-500">MINUTES</div>
            </div>
            <div className="text-4xl">:</div>
            <div className="text-center">
              <div className="font-bold">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-500">SECONDS</div>
            </div>
          </div>
        </section>

        {/* Event Information */}
        <div className="flex justify-between items-end">
          <div className="bg-white rounded-3xl p-6">
            <div className="mb-2">
              <span className="bg-gray-100 text-sm rounded-full px-3 py-1">SIMC 2.0</span>
              <span className="bg-gray-100 text-sm rounded-full px-3 py-1 ml-2">National Day</span>
              <span className="text-gray-400 ml-2">9 Aug</span>
            </div>
            <div className="text-gray-400">Next Event</div>
            <div className="text-xl font-bold">Fleming Week</div>
          </div>

          {/* Book Promotion */}
          <div className="bg-white rounded-3xl p-6 flex items-center gap-4">
            <Image
              src="/api/placeholder/150/200"
              alt="Physics Book Cover"
              width={150}
              height={200}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">GET<br />YOURS<br />NOW</h3>
              <p className="text-xl">for only<br />$29.99</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="fixed bottom-8 right-8 bg-white rounded-full px-6 py-3 shadow-lg flex gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>32,190</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>9,571</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>21,688</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
