import React, { useState } from 'react';
import question from '../icons/question.png';
import pieceOfCake from '../icons/pieceOfCake.png';
import exercise from '../icons/exercise.jpg';

export default function EatMe() {
  const [pie, setPie] = useState(undefined);
  const [sport, setSport] = useState(undefined);

  const pieUrl = 'https://bhvnxhcg3f.execute-api.eu-west-1.amazonaws.com/random-pie';
  const sportUrl = 'https://bhvnxhcg3f.execute-api.eu-west-1.amazonaws.com/random-sport?kcal=';

  const renderCake = ({ pie, sport }) => {
    return (pie && sport)
      ? <div><img src={pieceOfCake} className="icons" alt="piece of cake" />
        <div className="eatme">

          <p>{pie.name}</p>
          <p className="smalltext">{pie.kcal} kcal</p>
        </div>
        <p>...ale za to możesz dzisiaj:</p>
        <img src={exercise} className="icons" alt="exercise" />
        <p className="eatme">
          <span className="bigtext">NIE</span> {sport.name} przez {' '}
          <span className="bigtext">{Math.floor(sport.duration)}</span> minut!</p>
      </div>
      :
      <div />
  }

  const renderGetPiece = () => {
    return sport ? <div /> : <p>Sprawdź, jakim!</p>;
  }

  const renderOneMorePiece = () => {
    return sport ? <p>Jeszcze jeden kawałek!</p> : <div />;
  }

  const renderFooter = () => {
    return sport ? <div className="smalltext">
      <hr />
      <p>Postawione na Lambdach i strasznie słabym kodzie w Reakcie. Zobacz na <a href="https://github.com/AnnaSkawinska/ja-pie"  target="_blank" rel="noopener noreferrer">GitHubie</a></p>
      <p><marquee>Graphic design is my passion</marquee></p>
    </div> : <div />;
  }

  const fetchFromApi = async (url) => {
    const response = await fetch(url);
    return await response.json();
  }

  const handleClick = async () => {
    // const pie = await fetch(pieUrl);
    const pie = await fetchFromApi(pieUrl);
    setPie(pie);

    const sport = await fetchFromApi(sportUrl + pie.kcal);
    setSport(sport);
  }

  return (
    <div>
      {renderCake({ sport, pie })}

      <button className="imageButton" onClick={handleClick}>
        {renderOneMorePiece()}
        <img src={question} className="icons" alt="get pie!" />
        {renderGetPiece()}
      </button>
      {renderFooter()}
    </div>
  );


}
