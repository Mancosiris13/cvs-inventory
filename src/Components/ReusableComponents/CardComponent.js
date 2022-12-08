/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './CardComponent.css';

const CardComponent = ({ id, name, coverImg, price, quantity }) => {
  return (
    <div className="card-container">
      <div className="cards-div">
        <img src={`images/${coverImg}`} className="medicine-photo" />

        <div className="extra-info">
          <span className=" number medicine-name">{name}</span>
          <span className=" number price">${price} USD</span>
          <span className=" number quantity">Stock: {quantity} PCS</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
