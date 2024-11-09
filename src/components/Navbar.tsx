import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ajmeralogo.png';
import './style.css';

const Navbar: React.FC = () => {

  return (
    <nav>
      <div>
        <div className="logo-container">
          <img src={logo} alt="Ajmera Logo" height={30} width={30} />
          <div className="company-name">
            <p>ajmera</p>
            <p>infotech</p>
          </div>
        </div>
        
        <div className="profiles-link">
          <Link to="/profile-form">Profile Form</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;