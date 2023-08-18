import React, { useEffect, useRef, useState } from 'react';
import "./Banner.scss";
import { BANNER_IMAGES } from "../../utils/bannerList";
import { Link } from "react-router-dom";

const Banner = ({ className, bannerList = BANNER_IMAGES, timeInterval = 5000 }) => {

  const bannerContainer = useRef();
  const [imagesList, setImagesList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const play = (images) => {
    images[ imageIndex ].classList.remove('banner__link_active');
    const nextIndex = (imageIndex + 1) % images.length;
    images[ nextIndex ].classList.add('banner__link_active');
    setImageIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      play(imagesList);
    }, timeInterval);
    return () => clearInterval(interval);
  }, [imageIndex]);

  useEffect(() => {
    const images = bannerContainer.current.querySelectorAll('.banner__link');
    if (images.length === 0)
      return;
    bannerContainer.current.classList.add('banner_active');
    setImagesList(images);
    play(images);
  }, []);


  const renderImage = (image, index) => (
    <Link className="banner__link" key={image.key} to={image.link}>
      <img className={`banner__image`} src={image.src} alt={image.alt}/>
    </Link>
  );

  const renderImages = (images) => images.map((image, index) => renderImage(image, index));

  return (
    <section ref={bannerContainer} className={`banner ${className || ""}`}>
      {Array.isArray(bannerList) ? renderImages(bannerList) : renderImage(bannerList, 0)}
    </section>
  );
};

export default Banner;
