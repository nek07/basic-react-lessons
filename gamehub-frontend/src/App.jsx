import React from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <GameList />
      <Footer />
    </div>
  );
}

export default App;
