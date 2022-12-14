import React from 'react';
import '../../assets/css/dashboard.css';
import characters from '../../assets/testingdata.js/CharacterList.js';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';

export default function Dashboard({character}) {
  return(
    <div className="">
      <h2 style={{ textAlign: 'center' }}>Your Characters <SmileOutlined /></h2>
      <div style={{padding: '10px'}}>
        {characters.map(character => (
          <div key={character.id}>
            <h3><UserOutlined /> {character.name}</h3>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}