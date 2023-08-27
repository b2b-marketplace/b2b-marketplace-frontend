import React from 'react';
import "./InfoCard.scss";

/**
 * InfoCard компонент для отображения карточки с текстом.
 *
 * @component
 * @param {string} imageSrc - Ссылка на изображение.
 * @param {string} imageAlt - Текстовое описание изображения.
 * @param {string} text - Текст, отображаемый на карточке.
 * @returns {JSX.Element} Возвращает JSX-элемент с карточкой информации.
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
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
