import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Base from './components/Base';
import Toppings from './components/Toppings';
import './App.css';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  return (
    <>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} /> 
          <Route path="/toppings" element={<Toppings />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
    <footer>
        <br/>
        <h5>© 2022 Net Ninja, Inc.</h5>
    </footer>
    </>
  );
}

export default App;
