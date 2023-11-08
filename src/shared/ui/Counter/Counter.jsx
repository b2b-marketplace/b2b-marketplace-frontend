import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import IconPlus from '../../../components/UI/Icon/Icon_plus';
import IconMinus from '../../../components/UI/Icon/Icon_minus';

import './Counter.scss';

/**
 * Компонент счетчика (Counter) с настраиваемыми параметрами.
 *
 * @param {number} initCount - Начальное значение счетчика.
 * @param {number} minValue - Минимальное значение счетчика.
 * @param {number} maxValue - Максимальное значение счетчика.
 * @param {function} onChangeQuantity - Обработчик изменения значения счетчика.
 * @param {string} extraClassName - Дополнительные классы для настройки внешнего вида.
 * @returns {JSX.Element} JSX элемент компонента счетчика.
 */

const Counter = ({
  initCount = 0,
  minValue = 1,
  maxValue = 999,
  onChangeQuantity = () => {},
  extraClassName,
}) => {
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
      if (minValue <= productCount && maxValue >= productCount) {
        setCount(productCount);
        onChangeQuantity(productCount);
      }
    }
  };

  const counterClasses = clsx('counter', extraClassName);

  return (
    <div className={counterClasses}>
      <button className="counter__button" onClick={handleLeft} type="button">
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
      <button className="counter__button" onClick={handleRight} type="button">
        <IconPlus className="counter__icon" />
      </button>
    </div>
  );
};

Counter.propTypes = {
  initCount: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChangeQuantity: PropTypes.func,
  extraClassName: PropTypes.string,
};

export { Counter };
