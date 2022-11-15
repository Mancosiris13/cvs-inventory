import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/login/hero" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
