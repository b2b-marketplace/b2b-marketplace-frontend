import React, { useEffect } from 'react';
import { useState } from 'react';
import IconArrowCounter from '../Icon/Icon_arrow-counter';
import './Counter.scss';
import IconPlus from "../Icon/Icon_plus";
import IconMinus from "../Icon/Icon_minus";

const Counter = ({ initCount = 0, onChangeProductQuantity }) => {
  const [count, setCount] = useState(initCount);

  // useEffect(() => {
  //   onChangeProductQuantity(count);
  // }, [count]);

  const handleLeft = (event) => {
    const productCount = count - 1 === 0 ? count : count - 1;
    setCount(productCount);
    onChangeProductQuantity(productCount);
  };

  const handleRight = (event) => {
    const productCount = count + 1;
    setCount(productCount);
    onChangeProductQuantity(productCount);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleLeft}>
        <IconMinus className={'counter__icon'}/>
      </button>
      <input
        type="number"
        className="counter__input"
        value={count}
        onChange={(event) => {
          setCount(+event.target.value);
        }}/>
      <button className="counter__button" onClick={handleRight}>
        <IconPlus className={'counter__icon'}/>
      </button>
    </div>
  );
};

export default Counter;
