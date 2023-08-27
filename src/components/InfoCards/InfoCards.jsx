import React from 'react';
import "./InfoCards.scss";
import { cardInfoList } from "./mock.js";
import InfoCard from "./InfoCard/InfoCard";

const InfoCards = () => {
  return (
    <ul className="info-cards">
      {
        cardInfoList.map((card) => (<li key={card.key}><InfoCard imageSrc={card.imageSrc} imageAlt={card.imageName} text={card.text}/></li>))
      }
    </ul>
  );
};

export default InfoCards;
