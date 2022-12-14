import React from 'react';
import '../../assets/css/createCharacter.css';

export default function CreateCharacter() {
  return (
    <div>
      <h1 className="">Create Character</h1>
        <form className="">
          <p>Name:</p>
          <input
            name="name"
            type="text"
          />
        </form>
        <button className="" type="button">Submit</button>
    </div>
  );
}