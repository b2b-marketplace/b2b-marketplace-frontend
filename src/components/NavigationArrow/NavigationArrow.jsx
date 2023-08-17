import React, { useState, useEffect } from 'react';
import './NavigationArrow.scss';
import IconArrowUp from '../Icon/Icon_arrow';
import { Button } from '../Button/Button';

const NavigationArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation-arrow ${showArrow ? 'show' : ''}`}>
      <Button size="xs" primary={false} border={true} onClick={scrollToTop}>
        <IconArrowUp />
      </Button>
    </div>
  );
};

export default NavigationArrow;
