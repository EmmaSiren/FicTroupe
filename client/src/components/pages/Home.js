import React from 'react';
import characters from '../../assets/testingdata.js/CharacterList.js';

export default function Home({character}) {
  return(
    <div className="">
      <h1 className="">Home</h1>
      <div className="">
        {characters.map(character => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
      <div className=" hardCoded">
          <div className="">
            <h3>HardCoded FirstName LastName</h3>
            <p>HardCoded image</p>
          </div>
      </div>
    </div>
  );
}