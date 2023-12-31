import React from 'react';

import './CharacteristicColor.scss';

const CharacteristicColor = ({ className, characteristicValue }) => {
  const renderColor = (color) => {
    const backgroundColor = color || 'white';
    const isWhite = color === 'white' ? 'characteristic-color__color-white' : '';
    return <div className={`characteristic-color__color ${isWhite}`} style={{ backgroundColor }} />;
  };

  const renderColors = (colors) => {
    return colors.map((color, idx) => <div key={idx}>{renderColor(color.color)}</div>);
  };

  return (
    <div className={`characteristic-color ${className || ''}`}>
      {Array.isArray(characteristicValue)
        ? renderColors(characteristicValue)
        : renderColor(characteristicValue)}
    </div>
  );
};

export default CharacteristicColor;
