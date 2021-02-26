import React, { useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';

// components
import TeamCard from './components/TeamCard';

function App() {
  const [teamOne, setTeamOne] = useState('');
  const [teamTwo, setTeamTwo] = useState('');

  return (

    <div className="App">

      <StartGame
        setTeamOne={setTeamOne}
        setTeamTwo={setTeamTwo}
      ></StartGame>

      <div className="header">
        <h1>RUMMY CANASTA</h1>
      </div>

      <div className="row-container">
        <TeamCard
          team={teamOne}
        ></TeamCard>
        <TeamCard
          team={teamTwo}
        ></TeamCard>
      </div>

      <button className="submit-round">SUBMIT</button>

    </div>


  );
}

export default App;
