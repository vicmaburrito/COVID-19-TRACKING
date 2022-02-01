import React from 'react';
import { NavLink } from 'react-router-dom';
import covidLogo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="d-flex align-items-center">
      <img src={covidLogo} alt="logo" width="100" height="100" />
      <h1 className="mx-3">Covid-19 tracket</h1>
      <div className="d-flex justify-content-end">
        <NavLink to="/" activeclassname="active" className="px-2">Home</NavLink>
        <NavLink to="/SomeComponent" activeclassname="active" className=" px-2">SomeComponent</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
