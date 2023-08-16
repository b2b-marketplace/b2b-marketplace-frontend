import React from 'react';
import "./CharacteristicColor.scss";

const CharacteristicColor = ({ className, characteristicValue, ...props }) => {

  const arrayColors = (colors) => {
    return (
      <div className={`characteristic-color ${className ? className : ""}`}>
        {characteristicValue?.map((color) => (
          <div className="characteristic-color__color" key={color.key} style={color.color ? { backgroundColor: color.color } : { backgroundColor: `white` }}></div>
        ))}
      </div>

    );
  };

  const singleColor = (color) => {
    return (
      <div className={`characteristic-color ${className ? className : ""}`}>
        <div className="characteristic-color__color" style={color ? { backgroundColor: color } : { backgroundColor: `white` }}></div>
      </div>

    );
  };

  return (characteristicValue.isArray) ? arrayColors(characteristicValue) : singleColor(characteristicValue);
};

export default CharacteristicColor;
