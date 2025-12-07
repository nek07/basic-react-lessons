import React from 'react';

function FriendCard({ friend, deleteFriend, addToSelected }) {
  return (
    <div className="friend-card">
      <p>{friend.name}</p>
      <div className="buttons">
        <button onClick={() => deleteFriend(friend.id)}>Удалить</button>
        <button onClick={() => addToSelected(friend)}>Добавить</button>
      </div>
    </div>
  );
}

export default FriendCard;
