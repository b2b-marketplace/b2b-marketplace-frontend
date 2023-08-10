import React, { useEffect, useRef, useState } from 'react';
import IconSafety from "../Icon/Icon_safety";
import "./PlatformBenefits.scss";
import IconArrow from "../Icon/Icon_arrow";
import { useResize } from "../../hooks/useResize";
import IconRuble from "../Icon/Icon_ruble";
import IconTimer from "../Icon/Icon_timer";

const PlatformBenefits = () => {
  const { width } = useResize();

  const [isMouseDownNext, setIsMouseDownNext] = useState(false);
  const [isMouseDownPrev, setIsMouseDownPrev] = useState(false);
  const [isMaxOffset, setIsMaxOffset] = useState(0);

  const [currentOffsetPosition, setCurrentOffsetPosition] = useState(0);

  const platformBenefitsListRef = useRef();

  const [animationFrameIdNext, setAnimationFrameIdNext] = useState(null);
  const [animationFrameIdPrev, setAnimationFrameIdPrev] = useState(null);

  const moveSlide = (position) => {
    platformBenefitsListRef.current.style.transform = `translateX(${position}px)`; // Прокручиваем контент
  };

  const handleMouseDownNext = () => {
    setIsMouseDownNext(true);
    animateScrollNext();
  };

  const handleMouseUpNext = () => {
    setIsMouseDownNext(false);
    cancelAnimationFrame(animationFrameIdNext);
  };

  const animateScrollNext = () => {
    setCurrentOffsetPosition(prevPosition => {
      if (prevPosition <= 0)
        return prevPosition - 2;
      else
        return 0;
    });
    setAnimationFrameIdNext(requestAnimationFrame(animateScrollNext));
  };

  const handleMouseDownPrev = () => {
    setIsMouseDownPrev(true);
    animateScrollPrev();
  };

  const handleMouseUpPrev = () => {
    setIsMouseDownPrev(false);
    cancelAnimationFrame(animationFrameIdPrev);
  };

  const animateScrollPrev = () => {
    setCurrentOffsetPosition(prevPosition => {
      if (prevPosition < 0)
        return prevPosition + 2;
      else
        return 0;
    });
    setAnimationFrameIdPrev(requestAnimationFrame(animateScrollPrev));
  };

  const getOffset = () => {
    const platformBenefitsList = platformBenefitsListRef.current;
    const platformBenefitsListFullWidth = platformBenefitsList.scrollWidth;
    const platformBenefitsListVisibleWidth = platformBenefitsList.offsetWidth;
    return platformBenefitsListVisibleWidth - platformBenefitsListFullWidth;
  };
  useEffect(() => {

  }, []);

  useEffect(() => {
    const newMaxOffset = getOffset();
    setIsMaxOffset(newMaxOffset);
    if (newMaxOffset !== isMaxOffset && isMaxOffset !== 0) {
      setCurrentOffsetPosition(0);
      requestAnimationFrame(() => moveSlide(0));
    }
  }, [width]);

  useEffect(() => {
    let updatedPosition = 0;

    if (isMouseDownNext) {
      updatedPosition = Math.max(isMaxOffset, currentOffsetPosition);
      setCurrentOffsetPosition(updatedPosition);
      moveSlide(updatedPosition);
    }
    if (isMouseDownPrev) {
      updatedPosition = Math.min(currentOffsetPosition, 0);
      setCurrentOffsetPosition(updatedPosition);
      moveSlide(updatedPosition);
    }

  }, [isMouseDownNext, isMouseDownPrev, currentOffsetPosition]);

  return (
    <section className="platform-benefits">
      <ul ref={platformBenefitsListRef} className="platform-benefits__list">
        <li className="platform-benefits__item">
          <IconSafety className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Безопасность 1</h4>
            <p className="platform-benefits__text">Авторизуйтесь, чтобы совершать безопасные сделки</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconRuble className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Выбор лучших цен</h4>
            <p className="platform-benefits__text">Сравнивайте предложения и выбирайте самые выгодные</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconTimer className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Экономия времени</h4>
            <p className="platform-benefits__text">Оформляйте заказ в несколько кликов в любое удобное время</p>
          </div>
        </li>

        <li className="platform-benefits__item">
          <IconSafety className="platform-benefits__icon"/>
          <div className="platform-benefits__content">
            <h4 className="platform-benefits__title">Экономия времени</h4>
            <p className="platform-benefits__text">Оформляйте заказ в несколько кликов в любое удобное время</p>
          </div>
        </li>
      </ul>

      <div className="platform-benefits__nav">
        <button
          onMouseDown={handleMouseDownPrev}
          onMouseUp={handleMouseUpPrev}
          onMouseLeave={handleMouseUpPrev}
          onMouseEnter={handleMouseDownPrev}
          //className={`platform-benefits__button platform-benefits__button_left benefits__button_hidden ${currentOffsetPosition === 0 ? 'platform-benefits__button_hidden' : ''}`}
          className={`platform-benefits__button platform-benefits__button_left`}
        >
          <IconArrow className="platform-benefits__button-icon"/>
        </button>
        <button
          onMouseDown={handleMouseDownNext}
          onMouseUp={handleMouseUpNext}
          onMouseEnter={handleMouseDownNext}
          onMouseLeave={handleMouseUpNext}
          // className={`platform-benefits__button platform-benefits__button_right ${currentOffsetPosition === maxOffsetPosition ? 'platform-benefits__button_hidden' : ''}`}>
          className={`platform-benefits__button platform-benefits__button_right`}>
          <IconArrow className="platform-benefits__button-icon"/>
        </button>
      </div>
    </section>
  );
};

export default PlatformBenefits;
