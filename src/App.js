import React from 'react';
import './App.css';

// components
import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>RUMMY CANASTA</h1>
      </div>
      <div className="row-container">
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
      </div>

    </div>
  );
}

export default App;
