import React from "react";

function GameCard({ game, onDelete, onAddToCart }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />

      <h3>{game.title}</h3>
      <p>{game.price} ₸</p>

      <div className="buttons">
        <button className="delete-btn" onClick={onDelete}>
          Удалить
        </button>

        <button className="cart-btn" onClick={onAddToCart}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default GameCard;
