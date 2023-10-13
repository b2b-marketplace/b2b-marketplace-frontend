import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BANNER_LIST } from './mock';

import './BannerAdvertising.scss';

/**
 * BannerAdvertising компонент для отображения ротирующихся баннеров.
 *
 * @param {string} className - Дополнительные CSS-классы для стилизации компонента.
 * @param {Array|object} bannerList - Список баннеров либо объект с данными одного баннера.
 * @param {number} timeInterval - Интервал в миллисекундах между сменой баннеров.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента BannerAdvertising.
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const BannerAdvertising = ({ className, bannerList, timeInterval = 5000 }) => {
  const bannerContainerRef = useRef();
  const [banners, setBanners] = useState([]);
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setBanners(BANNER_LIST);
  }, []);

  useEffect(() => {
    const images = bannerContainerRef.current.querySelectorAll('.banner-advertising__link');
    if (images.length === 0) return;

    bannerContainerRef.current?.classList.add('banner-advertising_active');
    setImages(images);
    play(images);
  }, [banners]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      play(images);
    }, timeInterval);

    return () => clearInterval(interval);
  }, [images, timeInterval]);

  const play = (images) => {
    images[imageIndex].classList.remove('banner-advertising__link_active');
    const nextIndex = (imageIndex + 1) % images.length;
    images[nextIndex].classList.add('banner-advertising__link_active');
    setImageIndex(nextIndex);
  };

  const renderImage = (image) => (
    <Link
      className={`banner-advertising__link ${
        images[imageIndex] === image ? 'banner-advertising__link_active' : ''
      }`}
      key={image.key}
      to={image.link}
    >
      <img className="banner-advertising__image" src={image.src} alt={image.alt} />
    </Link>
  );

  const renderImages = (images) => images.map((image) => renderImage(image));

  return (
    <section ref={bannerContainerRef} className={`banner-advertising ${className || ''}`}>
      {Array.isArray(banners) ? renderImages(banners) : renderImage(banners)}
    </section>
  );
};

export default BannerAdvertising;
