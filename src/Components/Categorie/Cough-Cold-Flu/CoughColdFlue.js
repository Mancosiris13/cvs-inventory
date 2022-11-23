/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CoughColdFlue.css';
import CoughData from './CoughMedicineData';

console.log('array de todo', CoughData);
const coughData = CoughData;

const individualInfo = coughData.map((indvidualCard) => {
  console.log('individual card', indvidualCard);
  return {
    key: indvidualCard.id,
    coverImg: indvidualCard.coverImg,
    name: indvidualCard.name,
    price: indvidualCard.price,
    quantity: indvidualCard.quantity,
  };
});
console.log(individualInfo);
const CoughColdFlue = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Cough, Cold & Flu</h1>
        <button onClick={() => navigate(-1)} className="return-categos-button">
          Return to Categories
        </button>
      </div>
      <div className="cards-div">
        <img
          src={`images/${individualInfo.coverImg}`}
          className="medicine-photo"
        />
        <div className="extra-info">
          <span className=" number medicine-name">Name</span>
          <span className=" number price">Price</span>
          <span className=" number quantity">Quantity</span>
        </div>
      </div>
    </div>
  );
};

export default CoughColdFlue;
