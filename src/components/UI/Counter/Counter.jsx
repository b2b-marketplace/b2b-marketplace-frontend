import React from 'react';
import { useState } from 'react';
import IconPlus from '../Icon/Icon_counter-plus';
import IconMinus from '../Icon/Icon_counter-minus';
import './Counter.scss';

const Counter = ({ initCount = 2000, min = 1, max = 2000 }) => {
  const [count, setCount] = useState(initCount);
  const handleLeft = () => {
    count - 1 < min ? setCount(count) : setCount(count - 1);
  };

  const handleRight = () => {
    count + 1 >= max ? setCount(count) : setCount(count + 1);
  };

  return (
    <div className="counter">
      <IconMinus onClick={handleLeft} />
      <input type="number" className="counter__count-container" value={count} min={min} max={max} onChange={(event) => {
        setCount(+event.target.value);
      }} />
      <IconPlus onClick={handleRight} />
    </div>
  );
};

export default Counter;
