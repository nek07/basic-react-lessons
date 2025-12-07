import React from 'react';
import GameCard from './GameCard';
import gameImage from '../assets/game.avif'; // пример картинки

function GameList() {
  const games = [
    { title: 'Игра 1', image: gameImage, price: 29.99 },
    { title: 'Игра 2', image: gameImage, price: 49.99 },
    { title: 'Игра 3', image: gameImage, price: 19.99 },
  ];

  const handleBuy = (title) => {
    alert(`Вы купили ${title}!`);
  };

  return (
    <section className="game-list" id="games">
      {games.map((g) => (
        <GameCard
          key={g.title}
          title={g.title}
          image={g.image}
          price={g.price}
          onBuy={() => handleBuy(g.title)}
        />
      ))}
    </section>
  );
}

export default GameList;
