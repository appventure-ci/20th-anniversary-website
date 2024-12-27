'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { timelineEvents } from '@/types/timeline';

export default function CalendarPreview() {
    // Find the next event based on current date
    const currentDate = new Date();
    const nextEvent = timelineEvents.find(event => {
        const eventDate = new Date(`2024-${event.date}`);
        return eventDate > currentDate;
    }) || timelineEvents[0];

    return (
        <Link href="/calendar">
            <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="mb-2 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-gray-600" />
                    <div className="flex gap-2">
                        <span className="bg-gray-100 text-sm rounded-full px-3 py-1">SIMC 2.0</span>
                        <span className="bg-gray-100 text-sm rounded-full px-3 py-1">National Day</span>
                        <span className="text-gray-400">9 Aug</span>
                    </div>
                </div>
                <div className="text-gray-400">Next Event</div>
                <div className="text-xl font-bold">{nextEvent.event}</div>
            </div>
        </Link>
    );
} 