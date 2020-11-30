import React from 'react';
import './skeleton.css';

const Card = ({ item }) => {
  return (
    <li className="card">
      <img src={item.image} alt={item.title} className="card-image"/>
      <div className="card-text">
        <h4 className="card-title">{item.title}</h4>
        <div className="card-p">
          <p>Ricipe take time: </p>
          <p className="card-time">{item.duration}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;