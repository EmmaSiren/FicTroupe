import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if(currentPage === 'Login') {
  //     return <Login />;
  //   }
  //   if(currentPage === 'Dashboard') {
  //     return <Dashboard characters={characters}/>;
  //   }
  //   if(currentPage === 'CreateCharacter') {
  //     return <CreateCharacter />;
  //   }
  //    return <Home />;
  // };

  const items = [
    {
      label: 'Menu',
      key: 'Menu',
      icon: <MenuOutlined />,
      children: [

        {
          label: (
            <Menu.Item key="1">
              <HomeOutlined />
              <span>Home</span>
              <Link as={Link} to="/" />
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="2">
              <IdcardOutlined />
              <span>Dashboard</span>
              <Link as={Link} to="/dashboard" />
            </Menu.Item>

          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <UserAddOutlined />
              <span>Create Character</span>
              <Link as={Link} to="/createcharacter" />
            </Menu.Item>
          ),
        },
        {
          label: (
            <Menu.Item key="3">
              <LoginOutlined />
              <span>Login</span>
              <Link as={Link} to="/login" />
            </Menu.Item>
          ),
        },
      ],
    },
  ];

  return (
    <Layout>
        <Header style={{ background: '#1890ff' }}>
          <h1 className="ficTroupe" style={{ float: 'right' }}>
            <img style={{ width: '45px' }} src={Quill} alt=""></img>
            FicTroupe
          </h1>

        <Menu className="menu" mode="horizontal" items={items}>
        </Menu>
        </Header>
       
        <Content>hello</Content>
      
        <Footer style={{ textAlign: 'center' }}>
          FicTroupe 2022 Created by SAJE
        </Footer>
      </Layout>
       
  );
}