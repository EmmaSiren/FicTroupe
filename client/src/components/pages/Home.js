import React from 'react';
import characters from '../../assets/testingdata.js/CharacterList.js';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';

  return(
    <div>
      <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined /></h2>
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