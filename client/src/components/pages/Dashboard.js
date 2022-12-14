import React from 'react';
import '../../assets/css/dashboard.css';
import characters from '../../assets/testingdata.js/CharacterList.js';

export default function Dashboard({character}) {
  return(
    <div className="">
      <h1 className="">Dashboard</h1>
      <h2>Your Characters</h2>
      <div className="">
        {characters.map(character => (
          <div className="" key={character.id}>
            <h3>{character.name}</h3>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}