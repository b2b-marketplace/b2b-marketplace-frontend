import './ProductCardContainer.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Button } from '../../UI/Button/Button';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, loadMoreProducts } from '../../../store/slices/productsSlice.js';

export default function ProductCardContainer({ title, products, onClickMoreBtn, className }) {
  const [displayCards, setDisplayCards] = useState([]);
  const [cardsQuantity, setCardsQuantity] = useState(6);
  // const dispatch = useDispatch();

  // const productsState = useSelector((state) => state.products.products);
  // const products = productsState.items;
  // const dbPage = productsState.page;
  // console.log(dbPage);

  // useEffect(() => {
  //   dispatch(fetchProducts(dbPage));
  // }, [dbPage]);

  const handleAddCards = () => {
    // if (cardsQuantity + 6 >= products.length)
    onClickMoreBtn();

    setCardsQuantity(cardsQuantity + 6);
    // dispatch(fetchProducts(dbPage));
    // dispatch(loadMoreProducts());
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
      {/* {cardsQuantity <= products.length && <Button primary dark size="l" onClick={handleAddCards}> */}
      {<Button primary dark size="l" onClick={handleAddCards}>
        Смотреть ещё
      </Button>
      }
    </section>
  );
}
