import React from 'react';
import { useLocation } from 'react-router-dom';

const Hero = (props) => {
  const location = useLocation();
  let username = location.state.username;
  console.log(location);
  console.log(username);
  return <div>hi from hero</div>;
};

export default Hero;
