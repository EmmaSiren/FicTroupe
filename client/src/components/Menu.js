import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateCharacter from './pages/CreateCharacter';
import characters from '../assets/testingdata.js/CharacterList';
import Login from './pages/Login';
import { AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;


export default function HamburgerMenu() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if(currentPage === 'Home') {
      return <Home />;
    }
    if(currentPage === 'Dashboard') {
      return <Dashboard characters={characters}/>;
    }
    if(currentPage === 'CreateCharacter') {
      return <CreateCharacter />;
    }
    return <Login />;
  };

  const items = [
    {
      label: 'Menu',
      key: 'Menu',
      icon: <AppstoreOutlined />,
      children: [
        {
          label: ( 
            <a href="#home" onClick={() => setCurrentPage('Home')}>
              Home
            </a>
          ),
        },
        {
          label: ( 
            <a href="#dashboard" onClick={() => setCurrentPage('Dashboard')}>
              Dashboard
            </a>
          ),
        },
        {
          label: ( 
            <a href="#createCharacter" onClick={() => setCurrentPage('CreateCharacter')}>
              Create Character
            </a>
          ),
        },
        {
          label: ( 
            <a href="#login" onClick={() => setCurrentPage('Login')}>
              Login
            </a>
          ),
        },
      ],
    },
  ];

  return (
    <Layout>
      <Header style={{ background: '#1890ff' }}>
        <h1 style={{float: 'right'}}>FicTroupe</h1>
        <Menu style={{ background: 'transparent' }} mode="horizontal" items={items} />
      </Header>
      <Content style={{ padding: '30px' }}>
        <div className="site-layout-content" style={{ background: 'grey', height: '75vh' }}>
          {renderPage()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        FicTroupe 2022 Created by SAJE
      </Footer>
    </Layout>

      // <header>
      //   <h1 className="">FicTroupe</h1>
      //   <h2 className="">{currentPage}</h2>
      // </header>
      // <Menu mode="horizontal" items={items} />
      // <section className="">
      //   {renderPage()}
      // </section>
  );
}