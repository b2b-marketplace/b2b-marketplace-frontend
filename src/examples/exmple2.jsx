// Глобальные импорты
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Импорты из проекта
import MyLocalComponent from './MyLocalComponent';

// Локальные файлы поддержки
import './UserCard.css';

/**
 *
 * @param user - Объект с данными пользователя
 * @param onUserCardClick - Функция обратного вызова при клике на элемент
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Checkbox.
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 * @author
 */
const exampleCard = ({ user, onUserCardClick }) => {
  // Селектор для определения класса в зависимости от значения isExpanded
  // Классический пример:
  //const cardClassName = `user-card ${isExpanded ? 'expanded' : ''}`;
  // С использованием пакета clsx пример:
  const cardClassName = clsx('user-card', {
    expanded: isExpanded,
  });
  //локальные состояния
  const [isExpanded, setIsExpanded] = useState(false);

  //эффекты
  useEffect(() => {
    // Здесь может быть код эффекта
  }, [isExpanded]);

  //Функции
  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    onUserCardClick(user.id);
  };

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      <div className="user-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      {isExpanded && (
        <div className="user-details">
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
};

exampleCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  onUserCardClick: PropTypes.func.isRequired,
};

export default exampleCard;
