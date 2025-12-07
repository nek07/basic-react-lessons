import React from 'react';

function GameCard({ title, image, price, onBuy }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} className="game-image" />
      <h3>{title}</h3>
      <p>Цена: ${price}</p>
      <button onClick={onBuy}>Купить</button>
    </div>
  );
}

export default GameCard;
