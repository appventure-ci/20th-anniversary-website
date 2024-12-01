'use client';

import React, { useState } from "react";

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

  const handleButtonClick = (fullImage: string) => {
    setCurrentArea(fullImage);
  };

  return (
    <div className="campus-reimagined">
      <div className="button-container">
        {areas.map((area, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(area.fullImage)}
            className={`button button-${index}`}
          >
            <img 
              src={area.previewImage} 
              alt={area.name} 
              className="button-image" 
            />
          </button>
        ))}
      </div>

      <div className="image-display">
        <img src={currentArea} alt="Campus Area" className="campus-image" />
      </div>

      <style jsx>{`
        .campus-reimagined {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .button-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .button {
          position: absolute;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .button:hover .button-image {
          transform: scale(1.05);
          transition: transform 0.1s ease-in-out;
        }

        .button-image {
          display: block;
          width: 100%;
          height: auto;
        }

        /* Button Dimensions and Positions */
        .button-0 { /* Top */
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 743px;
          height: 346px;
        }

        .button-1 { /* Bottom */
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 743px;
          height: 346px;
        }

        .button-2 { /* Left */
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 378px;
          height: 468px;
        }

        .button-3 { /* Right */
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 378px;
          height: 468px;
        }

        .image-display {
          margin-top: 20px;
          width: 100%;
          max-width: 800px;
        }

        .campus-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CampusReimagined;
