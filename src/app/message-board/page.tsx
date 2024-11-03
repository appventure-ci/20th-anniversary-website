'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Message } from '@/types';

const MessageBoard = () => {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      title: 'LOREM IPSUM',
      subtitle: 'ALUMNI, CLASS OF 2021',
      content: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Urna molestie vivamus auctor velit hac parturient. Cubilia dictumst dis integer pharetra senectus.'
    },
    {
      id: 2,
      title: 'LOREM IPSUM',
      subtitle: 'ALUMNI, CLASS OF 2018',
      content: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Quis vestibulum metus consectetuer at tristique.'
    },
    {
      id: 3,
      title: 'LOREM IPSUM',
      subtitle: 'TEACHER',
      content: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Euismod imperdiet tincidunt condimentum mollis.'
    },
    {
      id: 4,
      title: 'LOREM IPSUM',
      subtitle: 'YEAR 6 STUDENT',
      content: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Feugiat vulputate ullamcorper sollicitudin a id pulvinar blandit augue.'
    },
    {
      id: 5,
      title: 'LOREM IPSUM',
      subtitle: 'YEAR 1 STUDENT',
      content: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. Nisi curabitur inceptos dui commodo curabitur id.'
    }
  ]);

  return (
    <div className="min-h-screen p-6">
      {/* Header - Increased padding and text size */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center px-6 py-3 bg-white rounded-full shadow hover:bg-gray-50 transition-colors text-lg"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Home
        </Link>
        <Link
          href="/book"
          className="flex items-center px-6 py-3 bg-white rounded-full shadow hover:bg-gray-50 transition-colors text-lg"
        >
          Next: Our Book
          <svg
            className="w-5 h-5 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      {/* Message Board - Increased text sizes and padding */}
      <div className="relative ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((message) => (
          <article
            key={message.id}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-2">{message.title}</h2>
            <h3 className="text-lg text-gray-600 mb-4">{message.subtitle}</h3>
            <p className="text-lg leading-relaxed text-gray-700">{message.content}</p>
          </article>
        ))}
      </div>

      {/* Add Message Button - Increased size */}
      <button
        className="fixed bottom-8 right-8 bg-red-500 text-white rounded-full p-5 shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Add message"
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
};

export default MessageBoard;
