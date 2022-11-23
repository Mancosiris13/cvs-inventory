import React from 'react';
import { useLocation } from 'react-router-dom';
import Categories from './Categories';

const Hero = (props) => {
  const location = useLocation();
  let { name } = location.state.name;
  let { username } = location.state.username;
  let { role } = location.state.role;
  console.log(location);
  console.log(name);
  console.log(username);
  console.log(role);

  return (
    <div>
      <p>Welcome {name}</p>
      <Categories />
    </div>
  );
};

export default Hero;
