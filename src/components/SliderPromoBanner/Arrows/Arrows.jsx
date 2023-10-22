import React from 'react';

import IconArrow from '../../UI/Icon/Icon_arrow';

import './Arrows.scss';

export default function Arrows({ onLeft, onRight }) {
  return (
    <div className="arrows">
      <button onClick={onLeft} className="arrows__left arrows__button">
        <IconArrow />
      </button>
      <button onClick={onRight} className="arrows__right arrows__button">
        <IconArrow />
      </button>
    </div>
  );
}
