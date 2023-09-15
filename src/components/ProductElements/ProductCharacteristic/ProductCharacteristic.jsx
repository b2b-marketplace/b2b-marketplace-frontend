import React from 'react';
import './ProductCharacteristic.scss';
import CharacteristicColor from '../CharacteristicColor/CharacteristicColor';

const ProductCharacteristicsList = ({ characteristics }) => {
  const characteristicComponents = {
    color: CharacteristicColor,
    // Другие характеристики и компоненты по мере необходимости
  };

  const characteristicNames = {
    color: 'Цвет',
    size: 'Размер',
    // Другие имена характеристик по мере необходимости
  };

  const ProductCharacteristic = ({ label, value }) => {
    const CharacteristicComponent = characteristicComponents[label];
    const characteristicName = characteristicNames[label] || null;

    return (
      <div className="product-characteristic">
        <span className="product-characteristic__label">{characteristicName}:</span>
        <span className="product-characteristic__value">
          {CharacteristicComponent ? (
            <CharacteristicComponent characteristicValue={value} />
          ) : (
            value
          )}
        </span>
      </div>
    );
  };

  return (
    <>
      {characteristics?.map((item, index) => {
        const label = Object.keys(item)[0];
        const value = item[label];
        return <ProductCharacteristic key={index} label={label} value={value} />;
      })}
    </>
  );
};

export default ProductCharacteristicsList;
