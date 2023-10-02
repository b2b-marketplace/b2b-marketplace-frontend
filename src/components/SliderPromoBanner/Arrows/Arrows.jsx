import React from 'react';
import './Arrows.scss';
import IconArrowUp from '../../UI/Icon/Icon_arrow-up';

export default function Arrows({ onLeft, onRight }) {
  return (
    <div className="arrows">
      <button onClick={onLeft} className="arrows__left arrows__button">
        <IconArrowUp />
      </button>
      <button onClick={onRight} className="arrows__right arrows__button">
        <IconArrowUp />
      </button>
    </div>
  );
}
