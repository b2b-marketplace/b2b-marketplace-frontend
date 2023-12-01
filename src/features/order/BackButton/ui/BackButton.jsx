import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../components/UI/Button/Button';
import IconArrow from '../../../../components/UI/Icon/Icon_arrow';

import './BackButton.scss';

/**
 * Компонент кнопки "Назад".
 * При клике на кнопку происходит возврат на предыдущую страницу.
 * @returns {JSX.Element}
 * @param {string} className - Дополнительные классы CSS.
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const BackButton = ({ className }) => {
  const navigate = useNavigate();

  /**
   * Обработчик клика по кнопке "Назад".
   * Вызывает функцию навигации для возврата на предыдущую страницу.
   */
  const handleButtonBack = () => {
    navigate(-1);
  };

  return (
    <Button type="button" onClick={handleButtonBack} className="back-button">
      <IconArrow className="back-button__icon" />
    </Button>
  );
};

export { BackButton };
BackButton.propTypes = {
  className: PropTypes.string,
};
