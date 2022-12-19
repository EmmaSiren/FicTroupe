import React from 'react';

import { QUERY_CHARACTERS } from '../../utils/queries'
import { useQuery } from '@apollo/client';

import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Descriptions } from 'antd';

export default function Home() {

  const { loading, data } = useQuery(QUERY_CHARACTERS)
  const characterData = data?.characters || [];
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
  </div>
  <div style={{ padding: '10px' }}>
      {characterData.map(character => (
        <div key={character._id}>
          <Card
            title={character.name}
            description={
              <div>
                <Descriptions>
                  <Descriptions.Item label="description">{character.description}</Descriptions.Item>
                  <Descriptions.Item label="status">{character.status}</Descriptions.Item>
                  <Descriptions.Item label="universe">{character.universe}</Descriptions.Item>
                </Descriptions>
              </div>
            }
            cover={
              <div>
                <img className="image" alt="" src={character.img}>
                </img>
              </div>
            }
          ></Card>

        </div>
      ))
      }
    </div ></div>


  )
};


// import React from 'react';
// import {QUERY_CHARACTERS} from '../../utils/queries'
// import { useQuery } from '@apollo/client';

// import { TeamOutlined, UserOutlined } from '@ant-design/icons';

// export default function Home() {

//   const { loading, data } = useQuery(QUERY_CHARACTERS)
//   const characterData = data?.characters || [];
//   // console.log(characterData)

//   if (loading) {
//     return <h2 style={{background: '#FFDAD1', height: '98vh'}} id="loading">Loading...</h2>;
//   }
//   return (
//     <div style={{ background: '#FFDAD1', height: '98vh'}}>
//       <h2 className="title">Home</h2>
//       <h2 style={{ textAlign: 'center' }}>New Characters <TeamOutlined /></h2>
//       <div style={{ padding: '10px' }}>
//         {characterData.map(character => (
//           <div key={character._id}>
//             <h3><UserOutlined /> {character.name}</h3>
//             <p>{character.description}</p>
//             <p>{character.status}</p>
//             <p>{character.universe}</p>
//             <img className="image" alt="" src={character.img} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }