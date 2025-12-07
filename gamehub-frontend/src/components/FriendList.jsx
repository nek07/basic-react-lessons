import React from 'react';

export default function FriendList({ friends, deleteFriend, addToSelected }) {
  return (
    <div className="friend-list">
      {friends.map(friend => (
        <div key={friend.id} className="friend-card">
          <span className="friend-name">{friend.name}</span>

          <div>
            <button
              className="btn btn-add"
              onClick={() => addToSelected(friend)}
            >
              Добавить
            </button>

            <button
              className="btn btn-delete"
              onClick={() => deleteFriend(friend.id)}
              style={{ marginLeft: 10 }}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
