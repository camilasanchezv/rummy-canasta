import React, { useEffect, useState } from 'react';

function StartGame({ setTeamOne, setTeamTwo }) {
    const [start, setStart] = useState(true);

    const readyHandler = () => {
        setStart(false);
    }

    return (
        <div className={start ? "pre-game" : "in-game"}>
            <div className="card">
                <header><h1>START GAME</h1></header>
                <div>
                    <h2>Set Team 1 and Team 2 names</h2>
                    <input
                        type="text"
                        placeholder="Team 1"
                        onChange={(e) => setTeamOne(e.target.value)}
                    ></input>
                    <input
                        type="text"
                        placeholder="Team 2"
                        onChange={(e) => setTeamTwo(e.target.value)}
                    ></input>
                    <button
                        onClick={readyHandler}
                    >
                        WE'RE READY
                    </button>
                </div>
            </div>
        </div >
    )
};

export default StartGame;