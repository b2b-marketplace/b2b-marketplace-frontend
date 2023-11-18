import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppImage.scss';

/**
 * Компонент для отображения изображения.
 *
 * @param {string} imageSrc - URL изображения.
 * @param {string} imageAlt - Альтернативный текст изображения.
 * @param {string} className - Дополнительные классы CSS.
 * @param {boolean} border - Добавить рамку вокруг изображения (опционально).
 * @param {string} radius - Округлить изображение (опционально, варианты:'radius-20', 'radius-30', 'radius-50').
 * @param loading
 * @returns {JSX.Element}
 */
const AppImage = ({ imageSrc, imageAlt, className, border, radius, loading }) => {
  return (
    <img
      className={clsx(
        'app-image',
        className,
        radius && `app-image_${radius}`,
        border && `app-image_border`
      )}
      src={imageSrc}
      loading={loading}
      alt={imageAlt}
    />
  );
};
AppImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  border: PropTypes.bool,
  radius: PropTypes.oneOf(['radius-20', 'radius-30', 'radius-50']),
};

AppImage.defaultProps = {
  imageAlt: 'Описание Изображения',
  className: '',
  border: false,
  radius: '',
};
export { AppImage };
