import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

/**
 * Компонент, обеспечивающий автоматическую прокрутку страницы в верхнюю часть при изменении маршрута.
 *
 * @returns {null} Компонент не отображает видимого содержания и используется только для управления прокруткой.
 */

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export { ScrollToTop };
