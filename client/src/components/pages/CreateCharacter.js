import React from 'react';
import '../../assets/css/createCharacter.css';

export default function CreateCharacter() {
  return (
    <div>
      <h1 className="title">Create Character</h1>
        <form className="form">
          <p>Name:</p>
          <input
            name="name"
            type="text"
          />
        </form>
        <button className="button" type="button">Submit</button>
    </div>
  );
}