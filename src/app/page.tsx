'use client';

import Link from 'next/link';
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

                </div>
            </main>
        </div>
    );
}
