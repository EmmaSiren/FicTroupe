import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateCharacter from './pages/CreateCharacter';
import Quill from '../assets/images/quill.png';
import characters from '../assets/testingdata.js/CharacterList';
import Login from './pages/Login';
import { 
  MenuOutlined, 
  HomeOutlined, 
  IdcardOutlined, 
  UserAddOutlined, 
  LoginOutlined 
  } from '@ant-design/icons';
import { Layout, Menu  } from 'antd';

const { Header, Content, Footer } = Layout;

export default function HamburgerMenu() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if(currentPage === 'Login') {
      return <Login />;
    }
    if(currentPage === 'Dashboard') {
      return <Dashboard characters={characters}/>;
    }
    if(currentPage === 'CreateCharacter') {
      return <CreateCharacter />;
    }
     return <Home />;
  };

  const items = [
    {
      label: 'Menu',
      key: 'Menu',
      icon: <MenuOutlined />,
      children: [
        {
          label: ( 
            <a href="#home" onClick={() => setCurrentPage('Home')}>
              <HomeOutlined /> Home
            </a>
          ),
        },
        {
          label: ( 
            <a href="#dashboard" onClick={() => setCurrentPage('Dashboard')}>
              <IdcardOutlined /> Dashboard
            </a>
          ),
        },
        {
          label: ( 
            <a href="#createCharacter" onClick={() => setCurrentPage('CreateCharacter')}>
              <UserAddOutlined /> Create Character
            </a>
          ),
        },
        {
          label: ( 
            <a href="#login" onClick={() => setCurrentPage('Login')}>
              <LoginOutlined /> Login
            </a>
          ),
        },
      ],
    },
  ];

  return (
    <Layout>
      <Header style={{ background: '#1890ff' }}>
        <h1  className="ficTroupe" style={{float: 'right'}}> 
          <img style={{width: '45px'}}src={Quill} alt=""></img>
          FicTroupe
        </h1>
        <Menu className="menu" mode="horizontal" items={items} />
      </Header>
      <h2 className="title">{currentPage}</h2>
      <Content style={{ padding: '30px' }}>
        <div className="site-layout-content" style={{ background: 'grey', height: '70vh' }}>
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