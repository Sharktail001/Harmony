import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState([
    {
      title: 'Bakery Biscuits',
      description: 'A small, local bakery that specializes in artisanal bread, pastries, and cakes. They are known for their freshly baked goods, which include a wide variety of bread, delicious pastries, and beautifully crafted cakes.',
      description2: 'Risk Level: Low',
    },
    {
      title: 'Green Thumb Landscaping',
      description: 'A local landscaping and gardening service that specializes in providing a wide range of landscaping solutions and gardening services. They offer services such as lawn care, garden design, tree and shrub maintenance, irrigation system installation, and more.',
      description2: 'Risk Level: Medium',
    },
  ]);

  const handleAddCard = () => {
    const newCardData = [...cardData];
    newCardData.push({
      title: `Card ${newCardData.length + 1}`,
      description: `This is card number ${newCardData.length + 1}.`,
      description2: 'Additional information about this card.',
    });
    setCardData(newCardData);
    navigate('/login');
  };

  return (
    <div className="home-page">
      <div className="header-section">
        <div className="header-content">
          <label htmlFor="signinField" className="header-label">
            Harmony
          </label>
          <img src="/images/flower.png" alt="Flower" className="header-image" />
        </div>
      </div>
      <h1>Explore Your Businesses</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>{card.description2}</p>
          </div>
        ))}
        <div className="add-card" onClick={handleAddCard}>
          <div className="add-card-content">
            <span className="plus-icon">+</span>
            <p>Add New Card</p>
          </div>
        </div>
      </div>
      <img src="/images/wave.png" alt="Wave" className="waveImage-homepage" />
      <img src="/images/profCircle.png" alt="Profile Icon" className="profile-icon" />
    </div>
  );
};

export default HomePage;
