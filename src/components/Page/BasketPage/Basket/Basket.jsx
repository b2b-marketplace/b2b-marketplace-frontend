import React, { useEffect, useState } from 'react';
import "./Basket.scss";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import IconTrash from "../../../UI/Icon/Icon_trash";
import ProductCardBasket from "../../../ProductCardBasket/ProductCardBasket";
import OrderDetail from "./OrderDetail/OrderDetail";
import { basketList } from "./mock";

const Basket = ({ className }) => {
  const [selectedProductList, setSelectedProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productCount: 0,
    suppliersCount: 0
  });

  useEffect(() => {
    setProductList(basketList[ 0 ]?.basket_products || []);
  }, [basketList]);

  useEffect(() => {
    const sumWithProduct = selectedProductList.reduce((total, currentProduct) => {
      const productPrice = parseFloat(currentProduct.product.price.replace(/\s/g, ""));
      const productQuantity = parseFloat(currentProduct.quantity);
      return total + productPrice * productQuantity;
    }, 0);

    const suppliersId = new Set(selectedProductList.map(currentProduct => currentProduct.product.suppliers[ 0 ]?.id));

    setOrderInfo({
      suppliersCount: suppliersId.size,
      productSum: sumWithProduct,
      productCount: selectedProductList.reduce((total, currentProduct) => total + parseFloat(currentProduct.quantity), 0)
    });
  }, [selectedProductList]);

  const toggleProductSelection = (productId) => {
    const updatedIsCheck = isCheck.includes(productId) ? isCheck.filter(item => item !== productId) : [...isCheck, productId];
    const selectedProduct = productList.find(item => item.product.id === productId);
    const updatedSelectedProductList = isCheck.includes(productId)
      ? selectedProductList.filter(item => item.product.id !== productId)
      : [...selectedProductList, selectedProduct];

    setIsCheck(updatedIsCheck);
    setSelectedProductList(updatedSelectedProductList);
  };

  const handleSelectAllCheckbox = () => {
    if (isCheckAll) {
      setIsCheck([]);
      setSelectedProductList([]);
    } else {
      const allProductIds = productList.map(product => product.product.id);
      setIsCheck(allProductIds);
      setSelectedProductList(productList);
    }
    setIsCheckAll(!isCheckAll);
  };

  const handleDeleteSelected = () => {
    const updatedProductList = productList.filter(product => !isCheck.includes(product.product.id));
    const updatedSelectedProductList = selectedProductList.filter(product => !isCheck.includes(product.product.id));

    setProductList(updatedProductList);
    setSelectedProductList(updatedSelectedProductList);

    if (isCheckAll) {
      setIsCheckAll(false);
    }
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
                  isCheckboxChecked={isCheck.includes(product.product.id)}
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
