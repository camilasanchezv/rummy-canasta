import React, { useEffect, useState, useMemo } from 'react';

function TeamCard({ team }) {

    //constants
    const [points, setPoints] = useState(0);

    const [canasta, setCanasta] = useState(false);

    const [espejitoPoints, setEspejitoPoints] = useState(0)
    const [espejito, setEspejito] = useState(false);

    const [redThreeChecked, setRedThreeChecked] = useState(0);
    const [redThreePoints, setRedThreePoints] = useState(0);

    const [canastasRojas, setCanastasRojas] = useState(0);
    const [canastasNegras, setCanastasNegras] = useState(0);
    const [canastasRojasPoints, setCanastasRojasPoints] = useState(0);
    const [canastasNegrasPoints, setCanastasNegrasPoints] = useState(0);

    const [roundPoints, setRoundPoints] = useState(0);

    //functions
    const redThrees = useMemo(() => {

        return [0, 1, 2, 3, 4].map((three, index) => {
            return (index <= redThreeChecked)
        })

    }, [redThreeChecked]);

    useEffect(() => {
        if (canastasRojas === 0 && canastasNegras === 0) {
            setCanasta(false)
        } else {
            setCanasta(true)
        };
    }, [canastasRojas, canastasNegras])

    useEffect(() => {
        if (espejito) {
            setEspejitoPoints(100)
        } else {
            setEspejitoPoints(0)
        };

        if (redThreeChecked === 4) {
            setRedThreePoints(800)
        } else {
            setRedThreePoints(100 * redThreeChecked)
        };

        setCanastasRojasPoints(canastasRojas * 500);
        setCanastasNegrasPoints(canastasNegras * 300);

    }, [espejito, redThreeChecked, canastasRojas, canastasNegras]);

    useEffect(() => {
        if (canasta) {
            setPoints(espejitoPoints + redThreePoints + canastasRojasPoints + canastasNegrasPoints + roundPoints);
        } else {
            setPoints(-(espejitoPoints + redThreePoints) + roundPoints);
        }
    }, [espejitoPoints, redThreePoints, canastasRojasPoints, canastasNegrasPoints, roundPoints]);

    return (
        <div>
            <div className="team-name">
                <h1>{team}</h1>
                <h2>{points}</h2>
            </div>
            <div className="grid">
                <div className="grid-box">
                    <h1>ESPEJITO</h1>
                    <div className="input" onClick={() => setEspejito(!espejito)}>
                        {espejito ?
                            (<i className="fas fa-check-square"></i>)
                            : (<i className="far fa-square"></i>)}
                    </div>
                </div>
                <div className="grid-box">
                    <h1>TRES ROJO</h1>
                    <div className="row-container">
                        <div className="input" onClick={() => setRedThreeChecked(0)}>
                            <i className="fas fa-times-circle"></i>
                        </div>
                        <div className="input" onClick={() => setRedThreeChecked(1)}>
                            {redThrees[1] ?
                                (<i className="far fa-check-circle"></i>)
                                : (<i className="far fa-circle"></i>)}
                        </div>
                        <div className="input" onClick={() => setRedThreeChecked(2)}>
                            {redThrees[2] ?
                                (<i className="far fa-check-circle"></i>)
                                : (<i className="far fa-circle"></i>)}
                        </div>
                        <div className="input" onClick={() => setRedThreeChecked(3)}>
                            {redThrees[3] ?
                                (<i className="far fa-check-circle"></i>)
                                : (<i className="far fa-circle"></i>)}
                        </div>
                        <div className="input" onClick={() => setRedThreeChecked(4)}>
                            {redThrees[4] ?
                                (<i className="far fa-check-circle"></i>)
                                : (<i className="far fa-circle"></i>)}
                        </div>
                    </div>
                </div>
                <div className="grid-box">
                    <h1>CANASTAS ROJAS</h1>
                    <input className="input"
                        type="number"
                        min="0"
                        max="11"
                        onChange={(e) => { setCanastasRojas(e.target.valueAsNumber) }}
                    ></input>
                </div>
                <div className="grid-box">
                    <h1>CANASTAS NEGRAS</h1>
                    <input className="input"
                        type="number"
                        min="0"
                        max="11"
                        onChange={(e) => { setCanastasNegras(e.target.valueAsNumber) }}
                    ></input>
                </div>
                <div className="grid-big-box">
                    <h1>PUNTOS DE RONDA</h1>
                    <input className="input"
                        type="number"
                        onChange={(e) => { setRoundPoints(e.target.valueAsNumber) }}
                    ></input>
                </div>
            </div>
        </div >
    );
};

export default TeamCard;