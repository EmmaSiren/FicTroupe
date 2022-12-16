import React from 'react';
import CreateCharacter from './CreateCharacter';
import characters from '../../assets/testingdata.js/CharacterList.js';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';

export default function Dashboard({character}) {
  return(
    <div>
      <h2 className="title">Dashboard</h2>
      <h2 style={{ textAlign: 'center' }}>Your Characters <SmileOutlined /></h2>
      <CreateCharacter/>
      <div style={{padding: '10px'}}>
        {characters.map(character => (
          <div key={character.id}>
            <h3><UserOutlined /> {character.name}</h3>
            <img style={{width: '100px'}} alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}