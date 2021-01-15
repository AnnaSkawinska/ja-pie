import React, { useState } from 'react';
import pie from '../icons/pie.png';
import pieceOfCake from '../icons/pieceOfCake.png';
import exercise from '../icons/exercise.jpg';

export default function EatMe() {
  const [eaten, setEaten] = useState(false);
  const [pieName, setPieName] = useState(undefined);
  const [pieWeight, setPieWeight] = useState(undefined);
  const [sportName, setSportName] = useState(undefined);
  const [sportDuration, setSportDuration] = useState(undefined);

  const pieUrl = 'https://bhvnxhcg3f.execute-api.eu-west-1.amazonaws.com/random-pie';
  const sportUrl = 'https://bhvnxhcg3f.execute-api.eu-west-1.amazonaws.com/random-sport?kcal=';

  const renderCake = ({ name, weight, sport, duration }) => {
    if (eaten) {
      return <div><img src={pieceOfCake} className="cakeForYou icons" alt="piece of cake" />
        <p>{name}</p>
        <p className="smalltext">{weight}</p>
        <p>...ale za to możesz dzisiaj:</p>
        <img src={exercise} className="cakeForYou icons" alt="exercise" />
        <p><span className="bigtext">NIE</span> {sport} przez <span className="bigtext">{Math.floor(duration)}</span> minut!</p>
      </div>
    } else {
      return <div />
    }
  }

  const renderGetPiece = () => {
    return eaten ? <div /> : <p>Kliknij i weź kawałek!</p>;
  }

  const renderOneMorePiece = () => {
    return eaten ? <p>Jeszcze jeden kawałek!</p> : <div />;
  }

  const fetchFromApi = async (url) => {
    const response = await fetch(url);
    return await response.json();
  }

  const handleClick = async () => {
    // const pie = await fetch(pieUrl);
    const pie = await fetchFromApi(pieUrl);

    setEaten(true);
    setPieName(pie.name);
    setPieWeight(pie.weight);

    const sport = await fetchFromApi(sportUrl + pie.kcal);
    setSportName(sport.verb + ' ' + sport.sport);
    setSportDuration(sport.duration);
  }

  return (
    <div>
      {renderCake({ name: pieName, weight: pieWeight, sport: sportName, duration: sportDuration })}

      <button className="imageButton" onClick={handleClick}>
        {renderOneMorePiece()}
        <img src={pie} className="icons" alt="get pie!" />
        {renderGetPiece()}
      </button>
    </div>
  );


}
