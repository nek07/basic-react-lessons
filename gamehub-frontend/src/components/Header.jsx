import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>GameHub</h1>
      <nav>
        <a href="#games">Игры</a> | <a href="#about">О нас</a>
      </nav>
    </header>
  );
}

export default Header;
