import React from 'react';
import "./ColorCharacteristic.scss";

const ColorCharacteristic = ({ className, colorList, ...props }) => {

  // const colorList = [
  //   { key: 1, color: 'red' },
  //   { key: 2, color: 'blue' },
  // ];

  return (
    <div className={`color-characteristic ${className ? className : ""}`}>
      {colorList?.map((color) => (
        <div className="color-characteristic__color" key={color.key} style={color.color ? { backgroundColor: color.color } : { backgroundColor: `white` }}></div>
      ))}
    </div>

  );
};

export default ColorCharacteristic;
