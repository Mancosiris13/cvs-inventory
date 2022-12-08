/* eslint-disable array-callback-return */
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import CategoriesName from './CategoriesName';
const categories = CategoriesName;

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories">
        <h3>Categories</h3>

        <ul>
          {categories.map((category, key, path) => {
            return (
              <button className="individual-button">
                <Link to={category.path}>
                  <li key={key} className="individual-category">
                    {category.categoryName}
                  </li>
                </Link>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
