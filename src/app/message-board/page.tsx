'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Message } from '@/types';

const MessageBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState({
    title: '',
    subtitle: '',
    content: ''
  });
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setMessages(data.messages);
      } else {
        setError('Failed to load messages');
      }
    } catch (err) {
      setError('Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      const data = await response.json();

      if (response.ok && data.status === 'Approved') {
        setMessages([...messages, data.data]);
        setNewMessage({ title: '', subtitle: '', content: '' });
        setIsModalOpen(false);
      } else {
        if (data.message === 'Message contains inappropriate content') {
          alert(data.details);
        } else {
          setError(data.message || 'Failed to add message');
        }
      }
    } catch (err) {
      setError('Failed to submit message');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        {isLoading ? (
            <div className="flex justify-center items-center min-h-screen">
              <div className="text-xl">Loading messages...</div>
            </div>
        ) : (
            <div className="relative ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((message) => (
                  <article
                      key={message.id}
                      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all"
                  >
                    <h2 className="text-2xl font-bold mb-2">{message.title}</h2>
                    <h3 className="text-lg text-gray-700 mb-4">{message.subtitle}</h3>
                    <p className="text-lg leading-relaxed text-gray-700 max-h-48 overflow-y-auto pr-2">{message.content}</p>
                  </article>
              ))}
            </div>
        )}

        {/* Add Message Button */}
        <button
            onClick={() => setIsModalOpen(true)}
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

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">Add Your Message</h2>

                {error && error !== 'Message contains inappropriate content' && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={newMessage.title}
                        onChange={(e) => setNewMessage({ ...newMessage, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Subtitle (e.g., ALUMNI, CLASS OF 2021)
                    </label>
                    <input
                        type="text"
                        id="subtitle"
                        value={newMessage.subtitle}
                        onChange={(e) => setNewMessage({ ...newMessage, subtitle: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                        disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                        id="content"
                        value={newMessage.content}
                        onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-32"
                        required
                        disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Adding...' : 'Add Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )}
      </div>
  );
};

export default MessageBoard;