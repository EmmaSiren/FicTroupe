import React from 'react';
import CreateCharacter from './CreateCharacter';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import {QUERY_CHARACTERS} from '../../utils/queries'
import { useQuery } from '@apollo/client';


export default function Dashboard({ character }) {
  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>
      <h2>Your Characters</h2>
      <div className="row">
        {characters.map(character => (
          <div className="col" key={character.id}>
            <h3>{character.name}</h3>
            <img className="image" alt="" src={character.img} />

export default function Dashboard({character}) {

  const { loading, data } = useQuery(QUERY_CHARACTERS)
  const characterData = data?.characters || [];
  console.log(characterData)
  
  if (loading) {
    return <h2 style={{background: '#FFDAD1', height: '98vh'}} id="loading">Loading...</h2>;
  }
  return(
    <div style={{ background: '#FFDAD1', height: '98vh'}}>
      <h2 className="title">Dashboard</h2>
      <h2 style={{ textAlign: 'center', color: '#211534' }}>Your Characters <SmileOutlined /></h2>
      <CreateCharacter className="handlee"/>
      <div className="handlee" style={{padding: '10px'}}>
        {characterData.map(character => (
          <div key={character._id}>
            <h3><UserOutlined /> {character.name}</h3>
            {/* <img style={{width: '100px'}} alt="" src={character.img} /> */}

          </div>
        ))}
      </div>
    </div>
  );
}