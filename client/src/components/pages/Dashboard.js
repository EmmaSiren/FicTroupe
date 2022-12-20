import React from 'react';
import CreateCharacter from './CreateCharacter';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import {QUERY_USER} from '../../utils/queries'
// import {QUERY_CHARACTERS} from '../../utils/queries'
import { Card, Descriptions, Col, Row } from 'antd';


import { useQuery } from '@apollo/client';       

export default function Dashboard() {

  const { loading, data } = useQuery(QUERY_USER)
  const characterData = data?.user || [];
  console.log(characterData)
  console.log(data)

  const displayCharacters = characterData.myCharacters;

  console.log(displayCharacters)
  
  if (loading) {
    return <h2  className="testingbg" style={{ height: '98vh'}} id="loading">Loading...</h2>;
  }
  return(
    <div  className="testingbg" style={{ height: '98vh'}}>
      <h2 className="title">Dashboard</h2>
      <h2 style={{ textAlign: 'center', color: '#211534' }}>Your Characters <SmileOutlined /></h2>
      <CreateCharacter className="handlee"/>
      
      <Row gutter={16} justify="center">
        {displayCharacters.map(character => (
          <Col span={8} style={{margin: "20px"}}>
          <Card title={character.name} bordered={false} style={{ textAlign: 'center', background:'#FFDAD1' }}>
            <div key={character._id} style={{textAlign: "left"}}>
              <h3>{character.description}</h3>
              <h3>{character.universe}</h3>
              <h3>{character.status}</h3>
          {/* <h3>{character.author}</h3> */}
          {/* <img style={{width: '100px'}} alt="" src={character.img} /> */}
            </div>
          </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


