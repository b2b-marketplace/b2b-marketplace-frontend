import React from 'react';
import './Dots.scss';

const Dots = ({ slides, currentSlide, setCurrentSlide }) => {
  return (
    <div className="dots">
      {slides.map((_, index) => (
        <span
          key={index}
          className={`dots__dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
