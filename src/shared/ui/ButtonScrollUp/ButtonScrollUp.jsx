import React, { useState, useEffect } from 'react';

import IconArrow from '../../../components/UI/Icon/Icon_arrow';

import './ButtonScrollUp.scss';

/**
 * Компонент кнопки для прокрутки наверх.
 *
 * @returns {JSX.Element} JSX элемент кнопки прокрутки наверх.
 */

function ButtonScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="button-scroll-up">
      <button
        className={`button-scroll-up__button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        type="button"
      >
        <IconArrow />
      </button>
    </div>
  );
}

export { ButtonScrollUp };
