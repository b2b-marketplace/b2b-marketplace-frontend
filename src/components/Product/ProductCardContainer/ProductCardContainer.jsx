<<<<<<<< HEAD:src/components/ProductElements/ProductCardContainer/ProductCardContainer.jsx
========
import ProductCard from '../ProductCard/ProductCard';
import { Button } from '../../UI/Button/Button';
>>>>>>>> main2:src/components/Product/ProductCardContainer/ProductCardContainer.jsx
import './ProductCardContainer.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Button } from '../../UI/Button/Button';
import { useEffect, useState } from 'react';
<<<<<<<< HEAD:src/components/ProductElements/ProductCardContainer/ProductCardContainer.jsx
========
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/slices/productsSlice';
>>>>>>>> main2:src/components/Product/ProductCardContainer/ProductCardContainer.jsx

export default function ProductCardContainer({ title, products, onClickMoreBtn, isFull, className }) {
  const [displayCards, setDisplayCards] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState(6);

  const handleAddCards = () => {
    setCardsQuantity(cardsQuantity + 6);
    if (cardsQuantity <= products.length) {
      onClickMoreBtn();

    }
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
      { (isFull && products.length > cardsQuantity) && <Button primary dark size="l" onClick={handleAddCards}>
        Смотреть ещё
      </Button>
      }
    </section>
  );
}
