import React from 'react';
import { useState } from "react";
import IconArrowCounter from '../Icon/Icon_arrow-counter';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(2000);
  const handleLeft = () => {
    setCount(count - 1);
  };

  const handleRight = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleLeft}>
        <IconArrowCounter />
      </button>
      <div className='counter__count-conteiner'>{count}</div>
      <button className="counter__button" onClick={handleRight}>
        <IconArrowCounter className={'counter__icon-button'} />
      </button>
    </div>
  );
};

export default Counter;
