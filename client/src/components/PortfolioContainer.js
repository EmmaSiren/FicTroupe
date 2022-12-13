import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import CreateCharacter from './pages/CreateCharacter';
import Profile from './pages/Profile';
import characters from './pages/CharacterList';
import Adopt from './pages/Adopt';
import Login from './pages/Login';
import './portfolioContainer.css'
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    if(currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if(currentPage === 'Profile') {
      return <Profile characters={characters}/>
    }
    if(currentPage === 'CreateCharacter') {
      return <CreateCharacter />;
    }
    if(currentPage === 'Login') {
      return <Login />;
    }
    return <Adopt />;
  };

  const items = [
    {
      label: 'Menu',
      key: 'Menu',
      icon: <AppstoreOutlined />,
      children: [
        {
          label: ( 
            <a href="#dashboard" onClick={() => setCurrentPage('Dashboard')}>
              Dashboard
            </a>
          ),
        },
        {
          label: ( 
            <a href="#profile" onClick={() => setCurrentPage('Profile')}>
              Profile
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
            <a href="#adopt" onClick={() => setCurrentPage('Adopt')}>
              Adopt
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