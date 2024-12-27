'use client';

import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        // Set target date to December 31, 2024
        const targetDate = new Date('2024-12-31T00:00:00');

        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                return;
            }

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
        updateTimer(); // Initial update

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white rounded-3xl p-8 mb-6 max-w-2xl">
            <h1 className="text-2xl font-bold mb-4">
                Countdown to<br />
                <b className="text-4xl">20th Anniversary</b>
            </h1>
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
    );
} 