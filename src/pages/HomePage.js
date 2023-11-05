import React from 'react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>harmony</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li>Profile</li>
        </ul>
      </nav>
    </div>
  );
}
