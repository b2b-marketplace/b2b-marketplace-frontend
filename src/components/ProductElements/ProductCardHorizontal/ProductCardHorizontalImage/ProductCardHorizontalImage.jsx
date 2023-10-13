import React from 'react';

import './ProductCardHorizontalImage.scss';

const ProductCardHorizontalImage = ({ imageSrc, imageAlt }) => {
  return <img className="product-card-horizontal-image" src={imageSrc} alt="Заглушка" />;
};

export default ProductCardHorizontalImage;
