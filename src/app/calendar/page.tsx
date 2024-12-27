'use client';

import React from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { timelineEvents } from '@/types/timeline';

export default function CalendarPage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-8">Timeline of Events</h1>

                <div className="space-y-12">
                    {[1, 2, 3, 4].map(term => (
                        <div key={term} className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6">Term {term}</h2>
                            <div className="space-y-6">
                                {timelineEvents
                                    .filter(event => event.term === term)
                                    .map((event, index) => (
                                        <div key={index} className="group">
                                            {event.isHomecoming ? (
                                                <Link href="/homecoming">
                                                    <div className="p-4 rounded-lg hover:bg-gray-50 transition-all">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="font-medium text-lg">{event.date}</span>
                                                            <span className="text-lg">{event.event}</span>
                                                        </div>
                                                        <p className="text-gray-600">{event.description}</p>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <Popover className="relative">
                                                    <Popover.Button className="w-full">
                                                        <div className="p-4 rounded-lg hover:bg-gray-50 transition-all text-left">
                                                            <div className="flex justify-between items-center mb-2">
                                                                <span className="font-medium text-lg">{event.date}</span>
                                                                <span className="text-lg">{event.event}</span>
                                                            </div>
                                                            <p className="text-gray-600">{event.description}</p>
                                                        </div>
                                                    </Popover.Button>

                                                    <Popover.Panel className="absolute z-10 w-96 p-4 mt-2 bg-white rounded-lg shadow-xl">
                                                        <div className="space-y-3">
                                                            <h3 className="font-semibold text-lg">{event.event}</h3>
                                                            <p className="text-gray-600">{event.description}</p>
                                                            <div className="pt-2">
                                                                <span className="text-sm font-medium text-gray-500">Date: {event.date}</span>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Popover>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 