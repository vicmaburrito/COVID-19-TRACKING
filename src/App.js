import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About';
import CountryDetail from './Components/Countries/Country_detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CountryDetail/:id" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
