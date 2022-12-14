import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateCharacter from './pages/CreateCharacter';
import characters from '../assets/testingdata.js/CharacterList';
import Login from './pages/Login';
import '../assets/css/menu.css'
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';



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
    <div>
      <header>
        <h1 className="display-5 fw-bold">FicTroupe</h1>
      </header>
      <Menu mode="horizontal" items={items} />
      <section className="container">
        {renderPage()}
      </section>
      <footer className="text-center"></footer>
    </div>
  );
}