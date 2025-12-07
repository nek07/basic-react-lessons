import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Корзина ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((g) => (
            <li key={g.id}>
              {g.title}
              <button onClick={() => removeFromCart(g.id)}>×</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
