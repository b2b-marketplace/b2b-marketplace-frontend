import React, { useState, useEffect } from 'react';

import IconArrow from '../../../../../components/UI/Icon/Icon_arrow';
import { ScrollToTop } from '../model';

import './ScrollUpButton.scss';

/**
 * Компонент кнопки для прокрутки наверх.
 *
 * @returns {JSX.Element} JSX элемент кнопки прокрутки наверх.
 */
//@TODO Разбить Комопонент согласно методологии FSD, в shared не может быть логики, логика должна быть или в features или widgets
function ScrollUpButton() {
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
    <div className="scroll-up-button">
      <button
        className={`scroll-up-button__button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        type="button"
      >
        <IconArrow />
      </button>
      <ScrollToTop />
    </div>
  );
}

export { ScrollUpButton };
