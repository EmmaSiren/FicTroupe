import React from 'react';
import './profile.css';
import characters from './CharacterList';

export default function Profile({character}) {
  return(
    <div className="container">
      <h1 className="title">Your Characters</h1>
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