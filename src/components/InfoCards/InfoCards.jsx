import React from 'react';
import "./InfoCards.scss";
import { CARD_INFO_LIST } from "./mock.js";
import InfoCard from "./InfoCard/InfoCard";

/**
 * InfoCards компонент для отображения карточек с преимуществами платформы.
 *
 * @returns {JSX.Element}
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const InfoCards = () => {


  return (
    <ul className="info-cards">
      {
        CARD_INFO_LIST.map((card) => (<li key={card.key}><InfoCard imageSrc={card.imageSrc} imageAlt={card.imageName} text={card.text}/></li>))
      }
    </ul>
  );
};

export default InfoCards;
