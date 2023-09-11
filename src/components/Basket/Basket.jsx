import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.scss';
import { deleteProduct } from '../../store/slices/basketSlice.js';
import Checkbox from '../UI/Checkbox/Checkbox';
import IconTrash from '../UI/Icon/Icon_trash';
import Tooltip from '../UI/Tooltip/Tooltip';
import IconInfoFill from '../UI/Icon/Icon_info_fill';
import { Button } from '../UI/Button/Button';
import OrderDetail from '../OrderDetail/OrderDetail';
import ProductCardBasket from '../ProductCardBasket/ProductCardBasket';
import productsApi from '../../utils/productsApi';
import OrderDetailHeader from '../OrderDetail/OrderDetailHeader/OrderDetailHeader';
import OrderDetailContentBasket from '../OrderDetail/OrderDetailContentBasket/OrderDetailContentBasket';

/**
 * Компонент Basket для отображения товаров в корзине.
 *
 * @param className - Дополнительные CSS классы для настройки внешнего вида.
 * @returns {JSX.Element} - Возвращает JSX-элемент компонента Basket.
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Basket = ({ className }) => {
  const [currentProductList, setCurrentProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const basketList = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productCount: 0,
    suppliersCount: 0,
  });

  useEffect(() => {
    // Пустой массив для объединенных данных
    const mergedList = [];
    //Проходим по массиву товаров из корзины
    if (basketList.basket_products.length) {
      const productBasketIds = basketList.basket_products.map((product) => product.id);
      productsApi
        .getProducts(productBasketIds)
        .then((data) => {
          for (const basketItem of basketList.basket_products) {
            // Ищем товар по ID
            const productItem = data.results.find((product) => product.id === basketItem.id);
            // Если товар найден, объединяем информацию о товаре и количестве
            if (productItem) {
              const mergedItem = {
                ...productItem,
                quantity: basketItem.quantity,
              };
              mergedList.push(mergedItem);
            }
          }
          if (mergedList.length) {
            setCurrentProductList(mergedList);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCurrentProductList([]);
    }
  }, []);

  useEffect(() => {
    if (currentProductList.length === 0) return;
    const mergedList = [];
    for (const basketItem of basketList.basket_products) {
      // Ищем товар по ID
      const productItem = currentProductList.find((product) => product.id === basketItem.id);
      // Если товар найден, объединяем информацию о товаре и количестве
      if (productItem) {
        const mergedItem = {
          ...productItem,
          quantity: basketItem.quantity,
        };
        mergedList.push(mergedItem);
      }
    }
    if (mergedList.length) {
      setCurrentProductList(mergedList);
    } else {
      setCurrentProductList([]);
    }
  }, [basketList]);

  useEffect(() => {
    //Список выделенных товаров
    const selectedProducts = currentProductList.filter((product) =>
      selectedProductId.includes(product.id)
    );
    //Сумма цен выделенных товаров
    const sumWithProducts = selectedProducts.reduce((total, currentProduct) => {
      //Цена товара
      const productPrice = parseFloat(currentProduct.price.replace(/\s/g, ''));
      //количество товаров
      const productQuantity = parseFloat(currentProduct.quantity);
      return total + productPrice * productQuantity;
    }, 0);
    //Количество поставщиков | Set - представляет собой коллекцию значений, где каждое значение может присутствовать только один раз.
    const suppliersId = new Set(
      selectedProducts.map((currentProduct) => currentProduct.seller[0]?.id)
    );

    setOrderInfo({
      suppliersCount: suppliersId.size,
      productSum: sumWithProducts,
      productCount: selectedProducts.reduce(
        (total, currentProduct) => total + parseFloat(currentProduct.quantity),
        0
      ),
    });
  }, [selectedProductId, currentProductList]);

  /**
   * Изменение состояния выбора товара в корзине
   * @param productId
   */
  const handleClickCheckboxProduct = (productId) => {
    const updatedSelectedProductIds = selectedProductId.includes(productId)
      ? selectedProductId.filter((id) => id !== productId)
      : [...selectedProductId, productId];
    setSelectedProductId(updatedSelectedProductIds);
  };

  /**
   * Выбор всех товаров
   */
  const handleClickCheckboxSelectAllProduct = () => {
    if (isCheckAll) {
      setSelectedProductId([]);
    } else {
      const allProductIds = currentProductList.map((product) => product.id);
      setSelectedProductId(allProductIds);
    }
    setIsCheckAll(!isCheckAll);
  };

  /**
   * Удаление выбранных товаров
   */
  const handleClickDeleteSelectedProduct = () => {
    dispatch(deleteProduct({ productIds: selectedProductId }));
  };

  return (
    <section className={`basket ${className || ''} `}>
      <main className="basket__main">
        {currentProductList.length > 0 ? (
          <>
            <div className="basket__container">
              <div className="basket__container-product">
                <div className="basket__panel">
                  <div className="basket__panel-checkbox">
                    <Checkbox
                      onCheckboxClick={handleClickCheckboxSelectAllProduct}
                      isChecked={isCheckAll}
                      className="basket__checkbox"
                    >
                      <span className="basket__checkbox-text">Выбрать все</span>
                    </Checkbox>
                  </div>
                  <button
                    onClick={handleClickDeleteSelectedProduct}
                    className="basket__panel-button"
                  >
                    <IconTrash className="basket__icon-trash" />
                    Удалить выбранные
                  </button>
                </div>
                <ul className="basket__product-list">
                  {currentProductList?.map((product) => (
                    <li className="basket__product-item" key={product.id} data-id={product.id}>
                      <ProductCardBasket
                        isCheckboxChecked={selectedProductId.includes(product.id)}
                        onClickCheckbox={() => handleClickCheckboxProduct(product.id)}
                        product={product}
                        className="basket__product"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="basket__order-detail-container">
                <OrderDetail className="basket__order-detail-sticky">
                  <OrderDetailHeader title="Детали заказа">
                    <Tooltip
                      position="top"
                      tooltipContent={
                        <>Выбрать способ и адрес доставки вы сможете на этапе оформления заказа</>
                      }
                    >
                      <IconInfoFill className="basket__order-detail-icon-info" />
                    </Tooltip>
                  </OrderDetailHeader>
                  <OrderDetailContentBasket
                    productSum={orderInfo.productSum}
                    productCount={orderInfo.productCount}
                    suppliersCount={orderInfo.suppliersCount}
                    extraClassName="basket__order-detail-content"
                  />
                  <div className="basket__order-detail-buttons">
                    <Button
                      size="xl"
                      mode="secondary"
                      border={true}
                      label={'Опубликовать'}
                      extraClass="basket__order-detail-button"
                    >
                      Купить
                    </Button>
                  </div>
                </OrderDetail>
              </div>
            </div>
          </>
        ) : (
          <div className="basket__empty">Корзина Пуста</div>
        )}
      </main>
    </section>
  );
};

export default Basket;
