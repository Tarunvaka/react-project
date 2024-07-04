import React from 'react';
import UserList from './components/UserList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Search here</h1>
      <UserList />
    </div>
  );
};

export default App;
