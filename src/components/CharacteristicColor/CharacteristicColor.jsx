import React from 'react';
import "./CharacteristicColor.scss";

const CharacteristicColor = ({ className, colorList, ...props }) => {

  // const colorList = [
  //   { key: 1, color: 'red' },
  //   { key: 2, color: 'blue' },
  // ];

  return (
    <div className={`characteristic-color ${className ? className : ""}`}>
      {colorList?.map((color) => (
        <div className="characteristic-color__color" key={color.key} style={color.color ? { backgroundColor: color.color } : { backgroundColor: `white` }}></div>
      ))}
    </div>

  );
};

export default CharacteristicColor;
