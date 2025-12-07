// src/components/FriendsManager.jsx
import React, { useState } from 'react';
import FriendList from './FriendList';

function FriendsManager() {
  const initialFriends = [
    { id: 1, name: 'Алия' },
    { id: 2, name: 'Нурлан' },
    { id: 3, name: 'Данияр' },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const deleteFriend = (id) => {
    setFriends(prev => prev.filter(f => f.id !== id));
    setSelectedFriends(prev => prev.filter(f => f.id !== id));
  };

  const addToSelected = (friend) => {
    setSelectedFriends(prev => {
      if (prev.find(f => f.id === friend.id)) return prev;
      return [...prev, friend];
    });
  };

  return (
    <div className="friends-manager">
      <FriendList
        friends={friends}
        deleteFriend={deleteFriend}
        addToSelected={addToSelected}
      />
      <h2>Выбранные друзья</h2>
      <div className="selected-list">
        {selectedFriends.length > 0 ? (
          selectedFriends.map(f => <p key={f.id}>{f.name}</p>)
        ) : (
          <p>Нет выбранных друзей</p>
        )}
      </div>
    </div>
  );
}

export default FriendsManager;
