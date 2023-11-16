import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import IconArrow from '../../../../../components/UI/Icon/Icon_arrow';
import { Button } from '../../../../../components/UI/Button/Button';

import './ButtonBack.scss';

/**
 * Компонент кнопки "Назад".
 * При клике на кнопку происходит возврат на предыдущую страницу.
 * @returns {JSX.Element}
 * @param {string} className - Дополнительные классы CSS.
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const ButtonBack = ({ className }) => {
  const navigate = useNavigate();

  /**
   * Обработчик клика по кнопке "Назад".
   * Вызывает функцию навигации для возврата на предыдущую страницу.
   */
  const handleButtonBack = () => {
    navigate(-1);
  };

  return (
    <Button type="button" onClick={handleButtonBack} className="button-back">
      <IconArrow className="button-back__icon" />
    </Button>
  );
};

export { ButtonBack };
ButtonBack.propTypes = {
  className: PropTypes.string,
};
