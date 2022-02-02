import React from 'react';
import { NavLink } from 'react-router-dom';
import covidLogo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="d-flex align-items-center w-100">
      <img src={covidLogo} alt="logo" width="90" height="90" className="py-2" />
      <h1 className="mx-3 display-4">Covid Tracket</h1>
      <div className="d-flex margin-left">
        <NavLink to="/" activeclassname="active" className="links-nav px-2">Home</NavLink>
        <NavLink to="/Countries" activeclassname="active" className="links-nav px-2">Countries</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
