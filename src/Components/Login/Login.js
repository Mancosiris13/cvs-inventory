/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EmployeesData from '../../EmployeesData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';

//import EmployeesData from '../../EmployeesData';
const Login = () => {
  const usernames = EmployeesData.map((employe) => {
    //console.log(employe.username);
    return employe.username;
  });
  //console.log('usernames mapeados', usernames);

  const passwords = EmployeesData.map((employePassword) => {
    //console.log('contrase;as mapeadas', employePassword.password);
    return employePassword.password;
  });

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [succesMsg, setSuccesMsg] = useState('');

  const handleUsernameChange = (e) => {
    setSuccesMsg('');
    setUsernameError('');
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSuccesMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  };
  /*if (correctUsername && correctPassword === true) {
    <Link to={'hero'}>
    </Link>*/

  const handleFormSubmit = (e) => {
    let correctUsername = false;
    let correctPassword = false;

    e.preventDefault();

    //check if email is empty

    if (username !== '') {
      //check some other condition
      for (let individualUsername of usernames) {
        if (individualUsername === username) {
          console.log('username inputed ', individualUsername);
          console.log('username match');
          setUsernameError('');
          correctUsername = true;
          // console.log(correctUsername);
          break;
        } else {
          setUsernameError('Incorrect Username');
          //console.log('username incorrect');
        }
      }
    } else {
      setUsernameError('Username Required');
    }
    //check if password is empty
    if (password !== '') {
      //do something here
      for (let individualPassword of passwords) {
        if (individualPassword === password) {
          console.log('password inputed ', individualPassword);
          console.log('password match');
          setPasswordError('');
          correctPassword = true;
          //console.log(correctPassword);
          break;
        } else {
          setPasswordError('Incorrect Password');
          //console.log('password dont match');
        }
      }
    } else {
      setPasswordError('Password Required');
    }

    if (correctUsername && correctPassword === true) {
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-page">
        <img src="images/cvs-logo.svg" />
        <h1 className="">LOG IN</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="username"
            className="username  spaced"
            onChange={handleUsernameChange}
            value={username}
          />
          {usernameError && <div className="error-msg">{usernameError}</div>}
          <input
            type="password"
            placeholder="password"
            className="pwd  spaced"
            onChange={handlePasswordChange}
            value={password}
          />
          {passwordError && <div className="error-msg">{passwordError}</div>}
          <Link to={'hero'}>
            <button className="login-button spaced">Log in</button>
          </Link>
          ;
        </form>
      </div>
    </div>
  );
};

export default Login;
