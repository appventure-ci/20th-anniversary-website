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
    <div className="min-h-screen p-4">
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

      </main>
    </div>
  );
};

export default HomePage;
