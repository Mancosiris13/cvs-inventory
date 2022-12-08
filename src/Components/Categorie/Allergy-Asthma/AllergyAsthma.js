import React from 'react';

import { useNavigate } from 'react-router-dom';
import CardComponent from '../../ReusableComponents/CardComponent';
import '../../ReusableComponents/Categories&ReturnButton.css';
import AllergyAsthmaData from './AllergyAsthmaData';

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

const AllergyAsthma = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="header">Allergy And Asthma</h1>
      <button onClick={() => navigate(-1)} className="return-categos-button">
        Return to Categories
      </button>

      <div className="maped-container">{AllergyAsthmaData.map(createCard)}</div>
    </div>
  );
};

export default AllergyAsthma;
