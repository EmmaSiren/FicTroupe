import React from 'react';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import {QUERY_CHARACTERS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

export default function Home() {

  const { loading, data } = useQuery(QUERY_CHARACTERS)
  const characterData = data?.characters || [];
  console.log(characterData)

  if (loading) {
    return <h2 style={{background: '#FFDAD1', height: '98vh'}} id="loading">Loading...</h2>;
  }
  return (
    <div style={{ background: '#FFDAD1', height: '98vh'}}>
      <h2 className="title">Home</h2>
      <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined /></h2>
      <div style={{ padding: '10px' }}>
        {characterData.map(character => (
          <div key={character._id}>
            <h3><UserOutlined /> {character.name}</h3>
            <p>{character.description}</p>
            <p>{character.status}</p>
            <p>{character.universe}</p>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

