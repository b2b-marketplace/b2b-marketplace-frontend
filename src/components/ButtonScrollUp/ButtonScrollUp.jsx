import React, { useState, useEffect } from 'react';
import './ButtonScrollUp.scss';
import IconArrowUp from '../UI/Icon/Icon_arrow';
import { Button } from '../UI/Button/Button';

const ButtonScrollUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
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

export default ButtonScrollUp;
