import React, { useEffect, useState } from 'react';
import "./Basket.scss";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import IconTrash from "../../../UI/Icon/Icon_trash";
import ProductCardBasket from "../../../ProductCardBasket/ProductCardBasket";
import OrderDetail from "./OrderDetail/OrderDetail";
import { basketList } from "./mock";

/**
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
  const [selectedProductIds, setSelectedProductIds] = useState([]);

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
    const selectedProducts = productList.filter(product => selectedProductIds.includes(product.product.id));
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
  }, [selectedProductIds, productList]);

  /**
   * Изменение состояния выбора продукта в корзине
   * @param productId
   */
  const toggleProductSelection = (productId) => {
    const updatedSelectedProductIds = selectedProductIds.includes(productId)
      ? selectedProductIds.filter(id => id !== productId)
      : [...selectedProductIds, productId];

    setSelectedProductIds(updatedSelectedProductIds);
  };

  /**
   * Выбор всех продуктов
   */
  const handleSelectAllCheckbox = () => {
    if (isCheckAll) {
      setSelectedProductIds([]);
    } else {
      const allProductIds = productList.map(product => product.product.id);
      setSelectedProductIds(allProductIds);
    }
    setIsCheckAll(!isCheckAll);
  };

  /**
   * Удаление выбранных продуктов
   */
  const handleDeleteSelected = () => {
    const updatedProductList = productList.filter(product => !selectedProductIds.includes(product.product.id));

    setProductList(updatedProductList);
    setSelectedProductIds([]);
    setIsCheckAll(false);
  };

  return (
    <section className={`basket ${className}`}>
      <header className="basket__header">
        <h1 className="basket__title">Корзина</h1>
        <p className="basket__title-product-count">{productList.length}</p>
      </header>
      <main className="basket__main">
        <div className="basket__panel">
          <div className="basket__panel-checkbox">
            <Checkbox onCheckboxClick={handleSelectAllCheckbox} isChecked={isCheckAll} className="basket__checkbox">
              <span className="basket__checkbox-text">Выбрать все</span>
            </Checkbox>
          </div>
          <button onClick={handleDeleteSelected} className="basket__panel-button">
            <IconTrash className="basket__icon-trash"/>
            Удалить выбранные
          </button>
        </div>
        <div className="basket__container">
          <ul className="basket__product-list">
            {productList?.map((product) => (
              <li className="basket__product-item" key={product.product.id} data-id={product.product.id}>
                <ProductCardBasket
                  isCheckboxChecked={selectedProductIds.includes(product.product.id)}
                  onClickCheckbox={() => toggleProductSelection(product.product.id)}
                  product={product}
                  className="basket__product"/>
              </li>
            ))}
          </ul>
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
