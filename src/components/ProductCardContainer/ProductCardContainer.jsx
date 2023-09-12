import ProductCard from '../ProductCard/ProductCard';
import { Button } from '../UI/Button/Button';
import './ProductCardContainer.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productsSlice';

export default function ProductCardContainer({ title, className }) {
  const [displayCards, setDisplayCards] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState(6);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddCards = () => {
    setCardsQuantity(cardsQuantity + 6);
  };

  useEffect(() => {
    setDisplayCards(products?.slice(0, cardsQuantity));
  }, [cardsQuantity, products]);

  return (
    <section className={`cards-container ${className || ''}`}>
      <h3 className="cards-container__title">{title}</h3>

      <div className="cards-container__cards">
        {displayCards.map((product) => (
          <ProductCard product={product} key={product.id} />
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
