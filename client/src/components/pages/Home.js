import React from 'react';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import {QUERY_CHARACTERS} from '../../utils/queries'
import { useQuery } from '@apollo/client';

import { Layout, Menu  } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {

const { loading, data } = useQuery(QUERY_CHARACTERS)
const characterData = data?.characters || [];

if (loading) {
  return <h2>LOADING...</h2>;
}
  return(
    <div>
       <h2 className="title">Home</h2>
      <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined /></h2>
      <div style={{padding: '10px'}}>
        {characterData.map(character => (
          <div key={character._id}>
            <h3><UserOutlined /> {character.name}</h3>
            <p>{character.background}</p>
            <p>{character.status}</p>
            <p>{character.universe}</p>
            <img className="image" alt="" src={character.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

