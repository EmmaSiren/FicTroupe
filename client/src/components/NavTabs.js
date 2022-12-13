import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
        href="#login"
        onClick={() => handlePageChange('Login')}
        className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#dashboard"
        onClick={() => handlePageChange('Dashboard')}
        className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#Profile"
        onClick={() => handlePageChange('Profile')}
        className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#CreateCharacter"
        onClick={() => handlePageChange('CreateCharacter')}
        className={currentPage === 'CreateCharacter' ? 'nav-link active' : 'nav-link'}
        >
          Create Character
        </a>
      </li>
      <li className="nav-item">
        <a
        href="#adopt"
        onClick={() => handlePageChange('Adopt')}
        className={currentPage === 'Adopt' ? 'nav-link active' : 'nav-link'}
        >
          Adopt
        </a>
      </li>
    </ul>
  );
}