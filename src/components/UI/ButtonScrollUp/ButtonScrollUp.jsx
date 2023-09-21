import React, { useState, useEffect } from 'react';
import './ButtonScrollUp.scss';
import IconArrowUp from '../Icon/Icon_arrow-up';

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
        <IconArrowUp />
      </button>
    </div>
  );
}

export default ButtonScrollUp;
