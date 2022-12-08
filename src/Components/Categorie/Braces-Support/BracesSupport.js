import React from 'react';

import { useNavigate } from 'react-router-dom';
import CardComponent from '../../ReusableComponents/CardComponent';
import '../../ReusableComponents/Categories&ReturnButton.css';
import BracesSupportData from './BracesSupportData';

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

const BracesSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="header">Braces And Support</h1>
      <button onClick={() => navigate(-1)} className="return-categos-button">
        Return to Categories
      </button>

      <div className="maped-container">{BracesSupportData.map(createCard)}</div>
    </div>
  );
};

export default BracesSupport;
