import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeChecked, deleteProduct, updateAllProduct } from '../../app/store/slices/favoritesSlice';
import productsApi from '../../shared/api/productsApi';
import { getProductText, getSuppliersText, getCalculateProductInfo } from '../../shared/lib/utils';
import OrderDetail from '../OrderDetail/OrderDetail';
import OrderDetailContentBasket from '../OrderDetail/OrderDetailContentBasket/OrderDetailContentBasket';
import OrderDetailHeader from '../OrderDetail/OrderDetailHeader/OrderDetailHeader';
import ProductCardFavorites from '../ProductElements/ProductCardFavorites/ProductCardFavorites';
import { Button } from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import IconTrash from '../UI/Icon/Icon_trash';
import Preloader from '../UI/Preloader/Preloader';

import './Favorites.scss';

const Favorites = ({ extraClassName }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.account);

  const [preloader, setPreloader] = useState(true);
  const [currentProductList, setCurrentProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productQuantity: 0,
    suppliersCount: 0,
  });
  const basketList = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchBasketProducts = async () => {
    console.log(basketList);
    if (basketList?.favorites_products.length) {
      const productBasketIds = basketList.favorites_products.map((product) => product.id);
      const mergedList = [];
      const selectedList = [];
      try {
        const { results } = await productsApi.getProductById(productBasketIds);
        for (const basketItem of basketList.favorites_products) {
          const productItem = results.find((product) => product.id === basketItem.id);
          if (productItem) {
            if (basketItem.checked) {
              selectedList.push(basketItem.id);
            }
            const mergedItem = {
              ...productItem,
              quantity:
                productItem.quantity_in_stock >= basketItem.quantity
                  ? basketItem.quantity
                  : parseFloat(productItem.quantity_in_stock),
              // quantity: basketItem.quantity,
              checked: basketItem.checked,
            };
            mergedList.push(mergedItem);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setCurrentProductList(mergedList);
        setSelectedProductId(selectedList);
        setPreloader(false);
      }
    } else {
      setPreloader(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
    }
  }, [isLoggedIn]);

  useEffect(() => {
    fetchBasketProducts();
  }, []);

  useEffect(() => {
    if (currentProductList.length === 0) return;
    setPreloader(true);
    const mergedList = [];

    for (const basketItem of basketList.favorites_products) {
      const productItem = currentProductList.find((product) => product.id === basketItem.id);

      if (productItem) {
        if (basketItem.checked) {
          setSelectedProductId([...selectedProductId, basketItem.id]);
        }
        const mergedItem = {
          ...productItem,
          quantity:
            productItem.quantity_in_stock >= basketItem.quantity
              ? basketItem.quantity
              : parseFloat(productItem.quantity_in_stock),
          checked: basketItem.checked,
        };
        mergedList.push(mergedItem);
      }
    }
    setCurrentProductList(mergedList);
    setPreloader(false);
  }, [basketList]);

  useEffect(() => {
    const selectedProducts = currentProductList.filter((product) =>
      selectedProductId.includes(product.id)
    );
    const { totalPrice, totalQuantity } = getCalculateProductInfo(selectedProducts);
    const suppliersId = new Set(
      selectedProducts.map((currentProduct) => currentProduct.seller[0]?.id)
    );

    setOrderInfo({
      suppliersCount: suppliersId.size,
      productSum: totalPrice,
      productQuantity: totalQuantity,
    });
  }, [selectedProductId]);

  const handleClickCheckboxProduct = (productId) => {
    dispatch(changeChecked({ productIds: productId }));
    const updatedSelectedProductIds = selectedProductId.includes(productId)
      ? selectedProductId.filter((id) => id !== productId)
      : [...selectedProductId, productId];
    setSelectedProductId(updatedSelectedProductIds);
  };

  const handleClickCheckboxSelectAllProduct = () => {
    if (isCheckAll) {
      dispatch(changeChecked({ productIds: [], checked: false }));
      setSelectedProductId([]);
    } else {
      const allProductIds = currentProductList.map((product) => product.id);
      dispatch(changeChecked({ productIds: [], checked: true }));
      setSelectedProductId(allProductIds);
    }
    setIsCheckAll(!isCheckAll);
  };

  const handleClickDeleteSelectedProduct = () => {
    dispatch(deleteProduct({ productIds: selectedProductId }));
  };

  const handleNavigateToOrder = () => {
    if (selectedProductId.length) {
      dispatch(updateAllProduct({ currentProductList }));
      navigate('/order', {
        state: { cameFromBasket: true },
      });
    }
  };

  if (preloader) {
    return <Preloader />;
  }
  return (
    <section className={`favorites ${extraClassName || ''}`}>
      {currentProductList.length > 0 ? (
        <div className="favorites__container">
          <div className="favorites__container-product">
            <div className="favorites__panel">
              <div className="favorites__panel-checkbox">
                <Checkbox
                  handleChangeCheckbox={handleClickCheckboxSelectAllProduct}
                  checked={isCheckAll}
                  className="favorites__checkbox"
                >
                  <span className="favorites__checkbox-text">Выбрать все</span>
                </Checkbox>
              </div>
              {isCheckAll || selectedProductId.length ? (
                <button
                  type="button"
                  onClick={handleClickDeleteSelectedProduct}
                  className="favorites__panel-button"
                >
                  <IconTrash className="favorites__icon-trash" />
                  Удалить выбранные
                </button>
              ) : (
                ''
              )}
            </div>
            <ul className="favorites__product-list">
              {currentProductList?.map((product) => (
                <li className="favorites__product-item" key={product.id} data-id={product.id}>
                  <ProductCardFavorites
                    isCheckboxChecked={product.checked}
                    onClickCheckbox={() => handleClickCheckboxProduct(product.id)}
                    product={product}
                    className="favorites__product"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="favorites__empty">Избранное пусто</div>
      )}
    </section>
  );
};

export default Favorites;
