import React from 'react';
import {QUERY_CHARACTERS} from "../../utils/queries"
// import characters from '../../assets/testingdata.js/CharacterList.js';
import { useQuery } from '@apollo/client';

export default function Home() {

//  console.log(QUERY_CHARACTERS);



 const {loading, data} = useQuery(QUERY_CHARACTERS)

const characters = data?.characters || [];
console.log(characters)


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
    </div>
  );
}