import React, { useState } from "react";
import GameCard from "./GameCard";

function GameList({ addToCart }) {
  const [games, setGames] = useState([
    { id: 1, title: "Cyberpunk 2077", price: 19990, image: "/img/cp.jpg" },
    { id: 2, title: "Elden Ring", price: 25990, image: "/img/er.jpg" },
    { id: 3, title: "The Witcher 3", price: 9990, image: "/img/w3.jpg" },
        { id: 2, title: "Elden Ring", price: 25990, image: "/img/er.jpg" },
    { id: 3, title: "The Witcher 3", price: 9990, image: "/img/w3.jpg" },
        { id: 2, title: "Elden Ring", price: 25990, image: "/img/er.jpg" },
    { id: 3, title: "The Witcher 3", price: 9990, image: "/img/w3.jpg" },
  ]);

  const deleteGame = (id) => {
    setGames((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onDelete={() => deleteGame(game.id)}
          onAddToCart={() => addToCart(game)}
        />
      ))}
    </div>
  );
}

export default GameList;
