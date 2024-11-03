'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Message } from '@/types';

const MessageBoard = () => {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      title: 'Unforgettable Memories',
      subtitle: 'ALUMNI, CLASS OF 2021',
      content: 'From late nights in the research lab to winning the International Science Olympiad, NUSH shaped who I am today. The rigorous academic environment and supportive teachers prepared me well for university. Proud to see how far we\'ve come in 20 years!'
    },
    {
      id: 2,
      title: 'Foundation of Innovation',
      subtitle: 'ALUMNI, CLASS OF 2018',
      content: 'Starting my own tech company was inspired by the entrepreneurial spirit I developed during our school\'s innovation program. The hands-on projects and mentorship from industry professionals were invaluable. Happy 20th anniversary to my alma mater!'
    },
    {
      id: 3,
      title: 'Growing Together',
      subtitle: 'TEACHER SINCE 2004',
      content: 'Over the past 19 years, I\'ve had the privilege of watching countless students grow into remarkable individuals. Each batch brings new energy and ideas. The school\'s evolution from its founding to becoming a leading institution has been incredible to witness.'
    },
    {
      id: 4,
      title: 'Current Perspective',
      subtitle: 'YEAR 6 STUDENT',
      content: 'Being part of NUSH during its 20th year is special. The new Da Vinci Program has opened up amazing opportunities in AI and robotics. Looking forward to contributing to the school\'s legacy and seeing what the next 20 years will bring!'
    },
    {
      id: 5,
      title: 'Fresh Beginnings',
      subtitle: 'YEAR 1 STUDENT',
      content: 'Just started my journey here but already feeling the strong sense of community. The seniors are so helpful, and I\'m excited about all the programs available. Can\'t wait to participate in the anniversary celebrations!'
    },
    {
      id: 6,
      title: 'Leadership Journey',
      subtitle: 'ALUMNI, CLASS OF 2010',
      content: 'The leadership skills I developed as Student Council President still guide me in my career as a hospital administrator. NUSH taught me that true leadership is about service and innovation. Congratulations on 20 years of nurturing leaders!'
    },
    {
      id: 7,
      title: 'Scientific Excellence',
      subtitle: 'HEAD OF SCIENCE DEPARTMENT',
      content: 'Our students\' research projects have won international recognition consistently. The new quantum computing lab will further enhance our STEM program. Proud to be part of an institution that stays at the forefront of science education.'
    },
    {
      id: 8,
      title: 'Building Bridges',
      subtitle: 'INTERNATIONAL STUDENT, CLASS OF 2019',
      content: 'Coming from Korea, NUSH became my second home. The cultural diversity and inclusive environment helped me adapt quickly. The friendships formed here transcend borders. Thank you for 20 years of fostering global connections!'
    },
    {
      id: 9,
      title: 'Arts & Innovation',
      subtitle: 'DRAMA CLUB TEACHER',
      content: 'From traditional performances to digital art exhibitions, watching our students push creative boundaries has been amazing. The new media studio has transformed how we approach arts education. Here\'s to more groundbreaking productions!'
    },
    {
      id: 10,
      title: 'Parent\'s Gratitude',
      subtitle: 'PARENT & ALUMNI, CLASS OF 2008',
      content: 'As both an alumnus and now a parent of a Year 2 student, it\'s heartwarming to see how the school has maintained its excellence while evolving with the times. The strong foundation NUSH provides is truly generational.'
    },
    {
      id: 11,
      title: 'Research Milestones',
      subtitle: 'RESEARCH MENTOR',
      content: 'Our students\' publications in peer-reviewed journals showcase their exceptional research capabilities. The school\'s partnership with A*STAR has opened doors to cutting-edge research opportunities. Excited to see our young scientists shape the future!'
    },
    {
      id: 12,
      title: 'Sports Legacy',
      subtitle: 'PHYSICAL EDUCATION DEPARTMENT',
      content: 'From national championships to nurturing Olympic hopefuls, our sports program emphasizes both excellence and character. The new sports complex will further enhance our athletes\' training. Here\'s to more victories in the next 20 years!'
    }
  ]);

  return (
    <div className="bg-transparent min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow hover:bg-white/80 transition-colors text-lg"
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
          className="flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow hover:bg-white/80 transition-colors text-lg"
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

      {/* Message Board */}
      <div className="relative ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((message) => (
          <article
            key={message.id}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all"
          >
            <h2 className="text-2xl font-bold mb-2">{message.title}</h2>
            <h3 className="text-lg text-gray-700 mb-4">{message.subtitle}</h3>
            <p className="text-lg leading-relaxed text-gray-700">{message.content}</p>
          </article>
        ))}
      </div>

      {/* Add Message Button */}
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
