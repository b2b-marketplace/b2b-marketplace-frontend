import React from 'react';
import "./InfoCard.scss";

const InfoCard = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="info-card">
      <img className="info-card__image" src={imageSrc} alt={imageAlt}/>
      <p className="info-card__text">{text}</p>
      <div className="info-card__overlay"></div>
    </div>
  );
};

export default InfoCard;
