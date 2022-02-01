import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SomeComponent from './Components/MostViews';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most-views" element={<SomeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
