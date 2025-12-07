import React, { useState } from "react";
import GameList from "./components/GameList";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart((prev) => {
      // проверяем дубли
      if (prev.find((g) => g.id === game.id)) return prev;
      return [...prev, game];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <div className="app">
      <h1>Магазин игр</h1>

      <GameList addToCart={addToCart} />

      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
