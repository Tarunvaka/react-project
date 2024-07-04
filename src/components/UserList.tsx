import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import { User } from '../types';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openUserId, setOpenUserId] = useState<number | null>(null);

  useEffect(() => {
    fetch('/celebrities.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUsers = users.filter(user =>
    `${user.first} ${user.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (userId: number) => {
    if (openUserId === userId) {
      setOpenUserId(null);
    } else {
      setOpenUserId(userId);
    }
  };

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search user"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {filteredUsers.map(user => (
        <UserItem
          key={user.id}
          user={user}
          isOpen={user.id === openUserId}
          onToggle={() => handleToggle(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
