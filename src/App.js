import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
import Countries from './Components/Countries/Country';
// import SomeComponent from './Components/MostViews';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        {/* <Route path="/Home" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
