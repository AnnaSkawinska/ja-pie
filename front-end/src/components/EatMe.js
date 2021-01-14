import React, { useState } from 'react';
import pieClick from '../icons/pieClick.png';
import pieAnother from '../icons/pieAnother.png';
import pieceOfCake from '../icons/pieceOfCake.png';

export default function EatMe() {
  const [eaten, setEaten] = useState(false);
  const [pieName, setPieName] = useState(undefined);
  const [pieWeight, setPieWeight] = useState(undefined);

  const apiUrl = 'https://bhvnxhcg3f.execute-api.eu-west-1.amazonaws.com/random-pie';

  const image = eaten ? pieAnother : pieClick;

  const renderCake = (name, weight) => {
    if (eaten) {
      return <div><img src={pieceOfCake} className="cakeForYou icons" alt="pieceOfCake" />
        <p className="pieName">{name}</p>
        <p className="smalltext">{weight}</p>
      </div>
    } else {
      return <div />
    }
  }

  const handleClick = () => {
    setEaten(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPieName(data.name);
        setPieWeight(data.weight);
        console.log('This is your data', data);
      });
  }

  return (
    <div>
      {renderCake(pieName, pieWeight)}
      <button className="imageButton" onClick={handleClick}><img src={image} className="icons" /></button>
    </div>
  );
}
