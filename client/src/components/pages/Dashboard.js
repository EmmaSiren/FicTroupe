import React from 'react';
import CreateCharacter from './CreateCharacter';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import {QUERY_USER} from '../../utils/queries'
// import {QUERY_CHARACTERS} from '../../utils/queries'
import { Card, Descriptions } from 'antd';


import { useQuery } from '@apollo/client';


// export default function Dashboard({ character }) {
//   return (
//     <div className="container">
//       <h1 className="title">Dashboard</h1>
//       <h2>Your Characters</h2>
//       <div className="row">
//         {characters.map(character => (
//           <div className="col" key={character.id}>
//             <h3>{character.name}</h3>
//             <img className="image" alt="" src={character.img} />
            

export default function Dashboard() {

  const { loading, data } = useQuery(QUERY_USER)
  const characterData = data?.user || [];
  // console.log("HERE"+characterData.user.myCharacters)
  // console.log(data)
  // console.log(data.user.myCharacters)
  // const characterData =  data.user.myCharacters
  console.log(characterData)
  console.log(data)
  // console.log(characterData.myCharacters)

  const displayCharacters = characterData.myCharacters;

  console.log(displayCharacters)




  // const characters=data.myCharacters
  // .user.myCharacters
  
  if (loading) {
    return <h2  className="testingbg" style={{ height: '98vh'}} id="loading">Loading...</h2>;
  }
  return(
    <div  className="testingbg" style={{ height: '98vh'}}>
      <h2 className="title">Dashboard</h2>
      <h2 style={{ textAlign: 'center', color: '#211534' }}>Your Characters <SmileOutlined /></h2>
      <CreateCharacter className="handlee"/>
      
        
      {displayCharacters.map(character => (
        <Card size="small" title={character.name} style={{ textAlign: 'center', background:'#FFDAD1' }}>
  <div key={character._id}>
    <h3><UserOutlined /> {character.name}</h3>
    <h3><UserOutlined /> {character.description}</h3>
    <h3><UserOutlined /> {character.universe}</h3>
    <h3><UserOutlined /> {character.status}</h3>




    {/* <h3><UserOutlined /> {character.author}</h3> */}

    {/* <img style={{width: '100px'}} alt="" src={character.img} /> */}

  </div>
  </Card>
))}

    </div>
  );
}


