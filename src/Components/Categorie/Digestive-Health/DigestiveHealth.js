/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../../ReusableComponents/CardComponent';
import '../../ReusableComponents/Categories&ReturnButton.css';
import DigestiveHealthData from './DigestiveHealthData';

const createCard = (info) => {
  return (
    <CardComponent
      coverImg={info.coverImg}
      name={info.name}
      price={info.price}
      quantity={info.quantity}
    />
  );
};

const DigestiveHealth = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="header">Digestive Health</h1>
      <button onClick={() => navigate(-1)} className="return-categos-button">
        Return to Categories
      </button>

      <div className="maped-container">
        {DigestiveHealthData.map(createCard)}
      </div>
    </div>
  );
};

export default DigestiveHealth;
