import React from 'react';

import { QUERY_CHARACTERS } from '../../utils/queries'
import { useQuery } from '@apollo/client';

import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Descriptions, Col, Row } from 'antd';
import CreateCharacter from './CreateCharacter';

export default function Home() {

  const { loading, data } = useQuery(QUERY_CHARACTERS)
  console.log(data)
  const characterData = data?.characters || [];
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

  if (loading) {
    return <h2 className="testingbg" style={{ height: '98vh'}} id="loading">Loading...</h2>;

  }
  return (
      <div className="testingbg" style={{ height: '98vh'}}>
        <h2 className="title">Home</h2>
        <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined /></h2>
        
        <Row gutter={16} justify="center">
        {characterData.map(character => (
          <Col span={6} style={{margin: "20px"}}>
          <Card title={character.name} bordered={false} style={{ textAlign: 'center', background:'#FFDAD1' }}>
            <div key={character._id} style={{textAlign: "left"}}>
              <h3>Description: {character.description}</h3>
              <h3>Universe: {character.universe}</h3>
              <h3>Satus: {character.status}</h3>
            </div>
          </Card>
          </Col>
        ))}
        </Row>
    </div>
  );
}  
              
             




   