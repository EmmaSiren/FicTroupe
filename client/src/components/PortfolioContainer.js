import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dashboard from './pages/Dashboard';
import CreateCharacter from './pages/CreateCharacter';
import Profile from './pages/Profile';
import characters from './pages/CharacterList';
import Adopt from './pages/Adopt';
import './portfolioContainer.css'


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
    return <Adopt />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1 className="display-5 fw-bold">FicTroupe</h1>
        <nav>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      <section className="container">
        {renderPage()}
      </section>
      <footer className="text-center"></footer>
    </div>
  );
}