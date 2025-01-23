"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { timelineEvents } from "@/types/timeline";

export default function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <div className="relative min-h-screen">
            {/* Video container */}
            <div className={`fixed inset-0 z-0 transition-opacity duration-1000 ${videoEnded ? 'opacity-0' : 'opacity-100'}`}>
                <video
                    autoPlay
                    muted
                    onEnded={() => setVideoEnded(true)}
                    className="object-cover w-full h-full"
                >
                    <source src="/imgs/draft1.webm" type="video/webm" />
                    <source src="/imgs/draft1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Timeline container */}
            <div
                className={`relative z-10 min-h-screen py-20 transition-opacity duration-1000 ${
                    videoEnded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-24"
                    >
                        <h1 className="text-5xl font-bold text-center text-white">
                            20 Year Timeline
                        </h1>
                        <Separator className="my-8 w-1/3 mx-auto h-[2px]" />
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-primary  h-full -translate-x-1/2 shadow-xl" />

                        <div className="space-y-32">
                            {timelineEvents.map((event, index) => (
                                <motion.div
                                    key={event.date}
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        delay: index * 0.1
                                    }}
                                    className="relative group"
                                >
                                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} gap-12`}>
                                        <Card className="w-full lg:w-1/2 p-6 bg-background/90 backdrop-blur-sm rounded-xl hover:shadow-xl transition-shadow duration-300 border-primary/20 hover:border-primary/30">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-semibold text-foreground">
                                                            {event.event}
                                                        </h3>
                                                        <p className="text-muted-foreground">{event.date}</p>
                                                    </div>
                                                </div>
                                                <Separator className="bg-primary/10" />
                                                <p className="text-lg text-foreground/80 leading-relaxed">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </Card>

                                        <div className="hidden lg:flex w-1/2 justify-center relative">
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                                {index + 1}
                                            </div>
                                            <div
                                                className="absolute top-1/2 w-8 h-8 bg-background/50 backdrop-blur-sm border-2 border-primary rounded-full -translate-y-1/2 transform group-hover:scale-125 transition-transform"/>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}