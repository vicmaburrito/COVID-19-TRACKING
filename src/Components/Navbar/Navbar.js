import React from 'react';
import { Link } from 'react-router-dom';
import covidLogo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-2">
      <img src={covidLogo} alt="logo" width="40" height="45" className="navbar-brand" />
      <Link to="/" className="navbar-brand links-nav display-4">Covid Tracker</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
