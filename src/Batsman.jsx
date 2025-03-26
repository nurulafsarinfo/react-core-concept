import { useState } from 'react';

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const [bolls, setBolls] = useState(0);
    const [over, setOver] = useState(0);

    const [dotBolls, setDotBolls] = useState(0);
    const [noBolls, setNoBolls] = useState(0);

    const handleSingles = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () =>{
        const updatedFour = runs + 4;
        setRuns(updatedFour);
    }

    const handleSix = () => {
        const updatedSix = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedSix);
    }

    const handleBolls = () => {
        const updatedBoll = bolls + 1;
        setBolls(updatedBoll)

        if((updatedBoll) % 6 === 0){
            const updatedOver = over + 1;
            setOver(updatedOver);
            setBolls(0);
        }
    }

    const handleNoBoll = () =>{
        const updatedNoBolls = noBolls + 1;
        setNoBolls(updatedNoBolls);
        setRuns(runs + 1);
    }

    const handleDotBoll = () =>{
        const updatedDotBalls = dotBolls + 1;
        setDotBolls(updatedDotBalls)
    }




    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs>50 && <p>Your Score : 50</p>
            }
            <h4>Bolls -: {bolls}</h4>
            <h4>Dot bolls: {dotBolls} & No Bolls: {noBolls}</h4>
            <p>Over finished: {over}</p>

            <h1>Score: {runs}</h1>

            <button onClick={handleBolls}>Boll</button>
            <button onClick={handleNoBoll}>No boll</button>
            <button onClick={handleDotBoll}>Dot ball</button>
<br />
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Sixes</button><br /><br />
        </div>
    )
}