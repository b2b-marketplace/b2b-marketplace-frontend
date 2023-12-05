import { useEffect, useState } from 'react';

import { Button } from '../../UI/Button/Button';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSceleton from '../ProductCard/ProductCardSceleton';

import './ProductCardContainer.scss';

export default function ProductCardContainer({
  title,
  products,
  onClickMoreBtn,
  isFull,
  className,
}) {
  const [displayCards, setDisplayCards] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState(6);
  const [cardsLoading, setCardsLoading] = useState(false);

  const handleAddCards = () => {
    setCardsQuantity(cardsQuantity + 6);
    if (cardsQuantity <= products.length) {
      onClickMoreBtn();
    }
  };

  useEffect(() => {
    setDisplayCards(products?.slice(0, cardsQuantity));
    products.length === 0 ? setCardsLoading(true) : setCardsLoading(false);
  }, [cardsQuantity, products]);

  return (
    <section className={`cards-container ${className || ''}`}>
      <h3 className="cards-container__title">{title}</h3>

      <div className="cards-container__cards">
        {
          cardsLoading ? Array.from({ length: 6 }).map((_, idx) => (
            <ProductCardSceleton key={idx} />

          )) :
            displayCards.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
      {/* {(isFull && products.length >= cardsQuantity) && ( */}
      {products.length >= cardsQuantity && (
        <Button primary dark size="xl" onClick={handleAddCards}>
          Смотреть ещё
        </Button>
      )}
    </section>
  );
}
