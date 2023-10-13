import React, { useEffect, useState } from 'react';

import IconMinus from '../Icon/Icon_minus';
import IconPlus from '../Icon/Icon_plus';

import './Counter.scss';

const Counter = ({ initCount = 0, minValue = 1, maxValue = 999, onChangeQuantity = () => {} }) => {
  const [count, setCount] = useState(initCount);

  const handleLeft = (event) => {
    const productCount = count - 1 === 0 ? count : count - 1;
    if (minValue <= productCount) {
      setCount(productCount);
      onChangeQuantity(productCount);
    }
  };

  const handleRight = (event) => {
    const productCount = count + 1;
    if (maxValue >= productCount) {
      setCount(productCount);
      onChangeQuantity(productCount);
    }
  };

  const handleChangeInput = (event) => {
    const productCount = parseInt(event.target.value);

    if (!isNaN(productCount)) {
      // console.log(maxValue);
      if (minValue <= productCount && maxValue >= productCount) {
        setCount(productCount);
        onChangeQuantity(productCount);
      }
    }
  };
  return (
    <div className="counter">
      <button className="counter__button" onClick={handleLeft}>
        <IconMinus className="counter__icon" />
      </button>
      <input
        type="number"
        min={minValue}
        max={maxValue}
        className="counter__input"
        value={count}
        onChange={handleChangeInput}
      />
      <button className="counter__button" onClick={handleRight}>
        <IconPlus className="counter__icon" />
      </button>
    </div>
  );
};

export default Counter;
