import React from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
  Link,
} from 'react-router-dom';

import Login from './Components/Login/Login';
import Hero from './Components/Hero/Hero';
import Cover from './Cover';

//const navigate = useNavigate();

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Cover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
