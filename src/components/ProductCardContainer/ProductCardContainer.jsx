import ProductCard from '../ProductCard/ProductCard';
import { Button } from '../UI/Button/Button';
import './ProductCardContainer.scss';
import { useEffect, useState } from 'react';

export default function ProductCardContainer({ title, products, className }) {
  const [displayCards, setDisplayCards] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState(4);

  const handleAddCards = () => {
    setCardsQuantity(cardsQuantity + 4);
  };

  useEffect(() => {
    setDisplayCards(products?.slice(0, cardsQuantity));
  }, [cardsQuantity, products]);

  return (
    <section className={`cards-container ${className ? className : ''}`}>
      <h3 className="cards-container__title">{title}</h3>

      <div className="cards-container__cards">
        {displayCards.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      {cardsQuantity >= products?.length ? (
        <></>
      ) : (
        <Button primary size="l" onClick={handleAddCards}>
          Смотреть ещё
        </Button>
      )}
    </section>
  );
}
