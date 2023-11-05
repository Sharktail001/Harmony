import React, { useState } from 'react';
import './Summary.css';

const Summary = () => {
  const [rating, setRating] = useState(22);

  const calculateGradient = () => {
    const percentRating = (rating / 110) * 100;
    const offset = 100 - percentRating;
    return {
      offset: offset + '%',
      color: `conic-gradient(from 180deg, red ${offset}%, yellow ${offset} 66%, green 0 100%)`,
    };
  };

  const { offset, color } = calculateGradient();

  return (
    <div className="summary-container">
      <div className="rating-semicircle">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={offset} style={{ stopColor: 'red' }} />
              <stop offset={offset} style={{ stopColor: 'yellow' }} />
              <stop offset="100%" style={{ stopColor: 'green' }} />
            </linearGradient>
          </defs>
          <path
            d="M0,50 A50,50 0 0,1 100,50"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="40"
          />
        </svg>
        <div className="rating-label">{rating}/110</div>
      </div>
      <div className="scrollable-box">
        <p>Here is some scrollable content.</p>
        <p>You can add more text here.</p>
        <p>And it will scroll when it exceeds the box height.</p>
      </div>
      <img src="/images/wave2.png" alt="Wave" className="waveImage" />
    </div>
  );
};

export default Summary;
