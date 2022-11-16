import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Cover = () => {
  return (
    <div className="cover-div">
      <Link to={'login'}>
        <button className="login-button">LOG IN</button>
      </Link>
    </div>
  );
};

export default Cover;
