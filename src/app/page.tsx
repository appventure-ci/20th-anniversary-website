'use client';

import Link from 'next/link';
import Image from 'next/image';
import CalendarPreview from '@/components/CalendarPreview/CalendarPreview';
import CountdownTimer from '@/components/CountdownTimer';

export default function HomePage() {
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
                <CountdownTimer />

                {/* Event Information */}
                <div className="flex justify-between items-end">
                    <CalendarPreview />

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
}
