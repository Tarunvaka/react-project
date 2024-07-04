import React, { useState } from 'react';
import { User } from '../types';

interface UserItemProps {
  user: User;
  isOpen: boolean;
  onToggle: () => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, isOpen, onToggle }) => {
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="user-item">
      <div className="user-item-header" onClick={onToggle}>
        <div>{user.first} {user.last}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="user-item-content">
          <img src={user.picture} alt={`${user.first} ${user.last}`} />
          <div>Age: {calculateAge(user.dob)}</div>
          <div>Gender: {user.gender}</div>
          <div>Country: {user.country}</div>
          <div>Email: {user.email}</div>
          <div>Description: {user.description}</div>
        </div>
      )}
    </div>
  );
};

export default UserItem;
