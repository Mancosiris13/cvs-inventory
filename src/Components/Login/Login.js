/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
import EmployeesData from '../../EmployeesData';
import { useNavigate } from 'react-router-dom';
import Hero from './../Hero/Hero';

const Login = () => {
  const navigate = useNavigate();

  const usersInfo = EmployeesData.map((employe) => {
    //console.log(employe.username);
    return {
      id: employe.id,
      name: employe.name,
      username: employe.username,
      role: employe.role,
      password: employe.password,
    };
  });

  //console.log('usernames mapeados', usernames);

  //const [correctUsername, setCorrectUsername] = useState(false);
  // const [correctPassword, setCorrectPassword] = useState(false);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //.log('usersinfo.username: ', usersInfo.username);
    //console.log('usersinfo.password: ', usersInfo.password);
    let correctUsername = false;
    let correctPassword = false;
    let role = '';
    let name = '';
    //check if email is empty

    if (username !== '') {
      //check some other condition
      for (let individualUsername of usersInfo) {
        //console.log('individualUsername: ', individualUsername.username);
        if (individualUsername.username === username) {
          name = individualUsername.name;
          role = individualUsername.role;
          console.log('username inputed ', username);
          console.log('username match');
          setUsernameError('');
          correctUsername = true;
          //setCorrectUsername(true);
          console.log('user name correct? :', correctUsername);
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
      for (let individualPassword of usersInfo) {
        if (individualPassword.password === password) {
          console.log('password inputed ', password);
          console.log('password match');
          setPasswordError('');
          correctPassword = true;
          //setCorrectPassword(true);
          console.log('password name correct?:', correctPassword);
          break;
        } else {
          setPasswordError('Incorrect Password');
          console.log(correctPassword);
          //console.log('password dont match');
        }
      }
    } else {
      setPasswordError('Password Required');
    }
    console.log('hola');

    if (correctUsername && correctPassword == true) {
      navigate('/categories', {
        state: {
          name: { name },
          username: { username },
          role: { role },
        },
      });
    }
  };

  /*if (correctUsername && correctPassword == true) {
    Navigate('/hero');
  }*/

  /*const handleOnClick = () => {
    if (correctUsername && correctPassword == true) {
      navigate('/hero');
    }*/

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
          <button className="login-button spaced">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
