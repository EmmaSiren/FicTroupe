import React from 'react';
import '../../assets/css/dashboard.css';
import characters from '../../assets/testingdata.js/CharacterList.js';

export default function Dashboard({ character }) {
  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>
      <h2>Your Characters</h2>
      <div className="row">
        {characters.map(character => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}