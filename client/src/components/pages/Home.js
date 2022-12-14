import React from 'react';
import characters from '../../assets/testingdata.js/CharacterList.js';

export default function Home({character}) {
  return(
    <div className="container">
      <h1 className="title">Home</h1>
      <div className="row">
        {characters.map(character => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
      <div className="row hardCoded">
          <div className="col">
            <h3>HardCoded FirstName LastName</h3>
            <p>HardCoded image</p>
          </div>
      </div>
    </div>
  );
}