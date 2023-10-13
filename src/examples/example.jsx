// Глобальные импорты
import React, { useState, useEffect } from 'react';

// Файлы из проекта
import SomeComponent from './SomeComponent';
import AnotherComponent from './AnotherComponent';

// Локальные файлы поддержки
import './styles.scss';

/**
 * Пример пустого компонента
 *
 * @param {props1: string} какой-то входной параметр 1
 * @param {props2: number} какой-то входной параметр 2
 * 
 * @description Описание еслии нужно
 *
 * @returns {JSX.Element}
 */

const MyComponent = ({ props1, props2 }) => {
  // Статически объявленные константы или списки
  const colors = ['red', 'green', 'blue'];
  const initialCount = 0;

  // Селекторы

  // Локальные состояния
  const [count, setCount] = useState(initialCount);

  // Эффекты
  useEffect(() => {
    // Логика эффекта

    // Очистка эффекта (если необходимо)
    return () => {
      // Логика очистки эффекта
    };
  }, []);

  // JSX разметка
  return <div></div>;
};

export default MyComponent;
