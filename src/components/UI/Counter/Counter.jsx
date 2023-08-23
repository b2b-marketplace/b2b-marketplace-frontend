import React from 'react';
import { useState } from 'react';
import IconArrowCounter from '../Icon/Icon_arrow-counter';
import './Counter.scss';

const Counter = ({ initCount = 2000 }) => {
  const [count, setCount] = useState(initCount);
  const handleLeft = () => {
    count - 1 === 0 ? setCount(count) : setCount(count - 1);
  };

  const handleRight = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleLeft}>
        <IconArrowCounter className={'counter__icon-left'}/>
      </button>
      <input type="number" className="counter__count-conteiner" value={count} onChange={(event) => {
        setCount(+event.target.value);
      }}/>
      <button className="counter__button" onClick={handleRight}>
        <IconArrowCounter className={'counter__icon-right'}/>
      </button>
    </div>
  );
};

export default Counter;
