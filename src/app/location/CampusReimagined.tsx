'use client';

import React, { useState, useEffect } from "react";

interface CampusArea {
    name: string;
    previewImage: string;
    fullImage: string;
}

interface CampusReimaginedProps {
    areas: CampusArea[];
}

const CampusReimagined: React.FC<CampusReimaginedProps> = ({ areas }) => {
    const [currentArea, setCurrentArea] = useState<string>(areas[0].fullImage);
    const [isFading, setIsFading] = useState(false);

    // Optional: track what image we *intend* to show, so we can fade out first.
    const handleButtonClick = (newFullImage: string) => {
        // Trigger the fade out
        setIsFading(true);
        // After fade-out is done, switch the image
        setTimeout(() => {
            setCurrentArea(newFullImage);
        }, 300); // match the duration-300 in your class
    };

    // Once we actually change `currentArea`, we can wait for it to load 
    // and then remove fade-out so that it fades in.
    useEffect(() => {
        if (currentArea) {
            const img = new Image();
            img.src = currentArea;
            img.onload = () => setIsFading(false);
        }
    }, [currentArea]);

    return (
        <div className="relative min-h-screen w-11/12 left-32 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                {areas.map((area, index) => {
                    const buttonStyles = {
                        backgroundImage: `url(${area.previewImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        clipPath:
                            index === 0
                                ? 'polygon(20% 100%, 80% 100%, 100% 0, 0 0)' // top arrow
                                : index === 1
                                    ? 'polygon(0 100%, 100% 100%, 80% 0, 20% 0)' // bottom arrow
                                    : index === 2
                                        ? 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' // left arrow
                                        : 'polygon(100% 0, 100% 100%, 0 80%, 0 20%)' // right arrow
                    };

                    return (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(area.fullImage)}
                            className={`
                                absolute bg-transparent border-none cursor-pointer p-0 
                                transition-transform duration-300 hover:scale-105 group
                                ${index === 0 ? 'top-4 left-1/2 -translate-x-1/2 w-[400px] h-[200px]' : ''}
                                ${index === 1 ? 'bottom-4 left-1/2 -translate-x-1/2 w-[400px] h-[200px]' : ''}
                                ${index === 2 ? 'top-1/2 left-4 -translate-y-1/2 w-[200px] h-[300px]' : ''}
                                ${index === 3 ? 'top-1/2 right-4 -translate-y-1/2 w-[200px] h-[300px]' : ''}
                            `}
                            style={buttonStyles}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl bg-black/50 px-4 py-2 rounded
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                    {area.name}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Center image with fade-out/fade-in */}
            <div className="mt-5 w-full max-w-3xl px-4">
                <img
                    src={currentArea}
                    alt="Campus Area"
                    className={`
                        w-full h-auto rounded-lg
                        transition-opacity duration-300
                        ${isFading ? 'opacity-0' : 'opacity-100'}
                    `}
                />
            </div>
        </div>
    );
};

export default CampusReimagined;