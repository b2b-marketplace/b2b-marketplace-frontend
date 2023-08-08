import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './TagsNavigationHorizontal.scss';
import IconArrowTopRight from "../Icon/Icon_arrow_top-right";

const TagsNavigationHorizontal = () => {

  const myF = () => {
    const tagsElement = document.querySelector('.tags-navigation-horizontal__list');
    const scrollTrack = document.querySelector('.tags-navigation-horizontal__track');
    const scrollThumb = document.querySelector('.tags-navigation-horizontal__thumb');
    let scrollTrackWidth = scrollTrack.offsetWidth;//Ширина трека
    let scrollThumbWidth = scrollThumb.offsetWidth;//Ширина скрола
    let scrollTrackThumbWidth = scrollTrackWidth - scrollThumbWidth;//Ширина трека по которому двигается скролл
    let isDragging = false;
    let startX, offsetX = 0;

    const changeNumberWithPercentage = (number, percent, isAppend = true) => {
      // Преобразование процента в десятичную дробь
      const decimal = percent / 100;
      // Вычисление измененного числа
      const operation = isAppend ? 1 + decimal : 1 - decimal;
      return number * operation;
    };


    /**
     * Пересчет ширины контейнера и позиции скрола
     */
    const updateScrollTrackWidth = () => {
      const oldScrollTrackThumbWidth = scrollTrackThumbWidth;
      //Новая ширина трека
      scrollTrackWidth = scrollTrack.offsetWidth;
      //Ширина скрола
      scrollThumbWidth = scrollThumb.offsetWidth;
      //Ширина трека по которому двигается скролл
      scrollTrackThumbWidth = (scrollTrackWidth - scrollThumbWidth);
      //На сколько процентов уменьшился или увеличился контейнер
      let PercentageReduction = ((oldScrollTrackThumbWidth - scrollTrackThumbWidth) / oldScrollTrackThumbWidth) * 100;
      if (PercentageReduction < 0)
        PercentageReduction = PercentageReduction * -1;
      let offsetFix = 0;
      //Смещаем скролл
      if (oldScrollTrackThumbWidth > scrollTrackThumbWidth) {
        offsetFix = changeNumberWithPercentage(getOffset(), PercentageReduction, false);
      } else {
        offsetFix = changeNumberWithPercentage(getOffset(), PercentageReduction, true);
      }
      offsetFix = Math.round(offsetFix);
      updateScrollPosition(offsetFix);
    };

    /**
     * Пересчет параметров ширины области прокрутки скролла и ширины скролла
     * @param e
     */
    const docResize = (e) => {
      updateScrollTrackWidth();
    };

    /**
     * Текущие смещения скрола
     * @returns {number|number}
     */
    const getOffset = () => {
      return (isNaN(parseInt(scrollThumb.style.left)) ? 0 : parseInt(scrollThumb.style.left));
    };

    /**
     * Событие нажатия на скролл
     * @param e
     */
    const scrollClick = (e) => {
      isDragging = true;
      startX = e.clientX;
      offsetX = getOffset();
      console.log(scrollThumb);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    /**
     * Обновление позиции скролла
     * @param newX
     */
    function updateScrollPosition(newX) {
      if (newX < 0) {
        newX = 0;
      } else if (newX > scrollTrackThumbWidth) {
        newX = scrollTrackThumbWidth;
      }
      const contentStartX = (newX / scrollTrackThumbWidth) * (tagsElement.offsetWidth - tagsElement.scrollWidth);
      tagsElement.style.transform = `translateX(${contentStartX}px)`; // Прокручиваем контент
      scrollThumb.style.left = `${newX}px`;
    }

    /**
     * Перемещение скролла
     * @param e
     */
    function onMouseMove(e) {
      if (!isDragging) return;
      const newXInPixels = e.clientX - startX + offsetX;
      updateScrollPosition(newXInPixels);
    }

    /**
     * Удаление событий отслеживания за перемещением скрола
     * @param e
     */
    function onMouseUp(e) {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('resize', docResize);
    scrollThumb.addEventListener('mousedown', scrollClick);
  };

  useEffect(() => {
    myF();
  }, []);

  const tagList = [
    { key: 0, name: 'Оптовые поставщики обуви', link: '#' },
    { key: 1, name: 'Китайские поставщики', link: '#' },
    { key: 2, name: 'Оптовые поставщики обуви', link: '' },
    { key: 3, name: 'Еще тэги', link: '#' }
  ];


  return (
    <div className="tags-navigation-horizontal scrollbar-dark">
      <ul className="tags-navigation-horizontal__list">
        {tagList.map((item) => (
          <li key={item.key} className="tags-navigation-horizontal__item">
            <Link className="tags-navigation-horizontal__link" to={item.link}>{item.name} <IconArrowTopRight className="tags-navigation-horizontal__icon-arrow"/></Link>
          </li>
        ))}
      </ul>
      <div className="tags-navigation-horizontal__track">
        <div className="tags-navigation-horizontal__thumb scrollbar-dark"></div>
      </div>
    </div>
  );
};

export default TagsNavigationHorizontal;
