import React from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import Footer from './components/Footer';
import LikeButton from './components/LikeButton';
import ViewCounter from './components/ViewCounter';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <GameList />
      
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <LikeButton />
        <ViewCounter />
      </section>
      <Footer />
    </div>
  );
}

export default App;
