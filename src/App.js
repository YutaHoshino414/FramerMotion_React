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
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }
  return (
    <>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} /> 
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
    <footer>
        <h5>© 2022 Net Ninja, Inc.</h5>
        <a href="/">back home</a>
    </footer>
    </>
  );
}

export default App;
