import React from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import Footer from './components/Footer';
import FriendsManager from './components/FriendsManager';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <GameList />
      <FriendsManager />  {/* Список друзей теперь отдельным компонентом */}
      <Footer />
    </div>
  );
}

export default App;
