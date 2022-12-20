import React from 'react';

import { QUERY_CHARACTERS } from '../../utils/queries'
import { useQuery } from '@apollo/client';

import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Descriptions } from 'antd';
import CreateCharacter from './CreateCharacter';

export default function Home() {

  const { loading, data } = useQuery(QUERY_CHARACTERS)
  console.log(data)
  const characterData = data?.characters || [];
  // console.log("HERE"+characterData)

  console.log(characterData)

  for (var i=0; i < characterData.length;i++){
    console.log(characterData.name)
  }
var cname = []
var cauth = []
var cuni = []
var cdest = []
var cstat = []




  characterData.forEach(element => {
    console.log("Test")
    console.log(element.name);
    cname += element.name
    cauth += element.author
    cuni += element.uni
    cdest += element.destination
    cstat += element.status
    
  });

  console.log (cname)

  // const displayCharacters = characterData.characters;
  // console.log(displayCharacters)

  // console.log(characterData)

  if (loading) {
    return <h2 className="testingbg" style={{ height: '98vh'}} id="loading">Loading...</h2>;

  }
  return (
    <div>  
      <div className="testingbg" style={{ height: '98vh'}}>
        <h2 className="title">Home</h2>
        <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined />
        </h2>
        {characterData.map(character => (
        <Card size="small" title={character.name}>
  <div key={character._id}>
    <h3><UserOutlined /> Description: {character.description}</h3>
    <h3><UserOutlined /> Universe: {character.universe}</h3>
    <h3><UserOutlined /> Satus: {character.status}</h3>
    </div>
</Card>


      
     
 

    

   

))

}
</div>
    </div>
    
  );
}  
              
             




   