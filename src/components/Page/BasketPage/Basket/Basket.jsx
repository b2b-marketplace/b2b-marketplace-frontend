import React, { useEffect, useState } from 'react';
import "./Basket.scss";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import IconTrash from "../../../UI/Icon/Icon_trash";
import ProductCardBasket from "../../../ProductCardBasket/ProductCardBasket";
import OrderDetail from "./OrderDetail/OrderDetail";
import { basketList } from "./mock";

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
  const [productList, setProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productCount: 0,
    suppliersCount: 0
  });

  useEffect(() => {
    setProductList(basketList[ 0 ]?.basket_products || []);
  }, [basketList]);

  useEffect(() => {
    //Список выделенных товаров
    const selectedProducts = productList.filter(product => selectedProductId.includes(product.product.id));
    //Сумма цен выделенных продуктов
    const sumWithProducts = selectedProducts.reduce((total, currentProduct) => {
      //Цена продукта
      const productPrice = parseFloat(currentProduct.product.price.replace(/\s/g, ""));
      //количество
      const productQuantity = parseFloat(currentProduct.quantity);
      return total + (productPrice * productQuantity);
    }, 0);
    //Количество поставщиков | Set - представляет собой коллекцию значений, где каждое значение может присутствовать только один раз.
    const suppliersId = new Set(selectedProducts.map(currentProduct => currentProduct.product.suppliers[ 0 ]?.id));

    setOrderInfo({
      suppliersCount: suppliersId.size,
      productSum: sumWithProducts,
      productCount: selectedProducts.reduce((total, currentProduct) => total + parseFloat(currentProduct.quantity), 0)
    });
  }, [selectedProductId, productList]);

  /**
   * Изменение состояния выбора продукта в корзине
   * @param productId
   */
  const handleClickCheckboxProduct = (productId) => {
    const updatedSelectedProductIds = selectedProductId.includes(productId)
      ? selectedProductId.filter(id => id !== productId)
      : [...selectedProductId, productId];

    setSelectedProductId(updatedSelectedProductIds);
  };

  /**
   * Выбор всех продуктов
   */
  const handleClickCheckboxSelectAllProduct = () => {
    if (isCheckAll) {
      setSelectedProductId([]);
    } else {
      const allProductIds = productList.map(product => product.product.id);
      setSelectedProductId(allProductIds);
    }
    setIsCheckAll(!isCheckAll);
  };

  /**
   * Удаление выбранных продуктов
   */
  const handleClickDeleteSelectedProduct = () => {
    const updatedProductList = productList.filter(product => !selectedProductId.includes(product.product.id));

    setProductList(updatedProductList);
    setSelectedProductId([]);
    setIsCheckAll(false);
  };
  /**
   * Удаление продукта из корзины
   * @param productId
   */
  const handleClickDeleteProduct = (productId) => {
    const updatedProductList = productList.filter(product => product.product.id !== productId);
    setProductList(updatedProductList);
  };

  return (
    <section className={`basket ${className}`}>
      {/*<header className="basket__header">*/}
      {/*  <h1 className="basket__title">Корзина</h1>*/}
      {/*  <p className="basket__title-product-count">{productList.length}</p>*/}
      {/*</header>*/}
      <main className="basket__main">

        <div className="basket__container">
          <div>
            <div className="basket__panel">
              <div className="basket__panel-checkbox">
                <Checkbox onCheckboxClick={handleClickCheckboxSelectAllProduct} isChecked={isCheckAll} className="basket__checkbox">
                  <span className="basket__checkbox-text">Выбрать все</span>
                </Checkbox>
              </div>
              <button onClick={handleClickDeleteSelectedProduct} className="basket__panel-button">
                <IconTrash className="basket__icon-trash"/>
                Удалить выбранные
              </button>
            </div>
            <ul className="basket__product-list">
              {productList?.map((product) => (
                <li className="basket__product-item" key={product.product.id} data-id={product.product.id}>
                  <ProductCardBasket
                    isCheckboxChecked={selectedProductId.includes(product.product.id)}
                    onClickCheckbox={() => handleClickCheckboxProduct(product.product.id)}
                    onClickDeleteProduct={() => handleClickDeleteProduct(product.product.id)}
                    product={product}
                    className="basket__product"/>
                </li>
              ))}
            </ul>
          </div>

          <div className="basket__order-detail-container">
            <OrderDetail
              productSum={orderInfo.productSum}
              productCount={orderInfo.productCount}
              suppliersCount={orderInfo.suppliersCount}
              className="basket__order-detail-sticky"/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Basket;
