import React, { useState, useEffect } from 'react';

import Arrows from './Arrows/Arrows';
import Dots from './Dots/Dots';
import BannerPromo from '../Banners/BannerPromo/BannerPromo';

import './SliderPromoBanner.scss';

const SliderPromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <BannerPromo key="slide1" />,
    <BannerPromo key="slide2" />,
    <BannerPromo key="slide3" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="slider-promo-banner">
      <div
        className="slider-promo-banner__container"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider-promo-banner__slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <Arrows onLeft={prevSlide} onRight={nextSlide} />
      <Dots slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
};

export default SliderPromoBanner;
