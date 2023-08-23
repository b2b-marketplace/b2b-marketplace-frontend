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
  const [orderInfo, setOrderInfo] = useState({ productSum: 0, productCount: 0, suppliersCount: 0 });

  useEffect(() => {
    setProductList(basketList[ 0 ].basket_products || []);
  }, [basketList]);

  useEffect(() => {
    const sumWithInitial = selectedProductList.reduce((accumulator, currentProduct) => accumulator + parseFloat(currentProduct.product.price.replace(/\s/g, "")), 0);
    const sumProductCount = selectedProductList.reduce((accumulator, currentProduct) => accumulator + parseFloat(currentProduct.quantity), 0);
    setOrderInfo(prevOrderInfo => ({
      ...prevOrderInfo,
      productSum: sumWithInitial,
      productCount: sumProductCount,
    }));
  }, [selectedProductList]);

  const handleCheckboxSelectAll = () => {
    const allProductIds = productList.map(product => product.product.id);

    if (isCheckAll) {
      setIsCheck([]);
      setSelectedProductList([]);
    } else {
      setIsCheck(allProductIds);
      setSelectedProductList(productList);
    }

    setIsCheckAll(!isCheckAll);
  };

  const handleCheckboxClick = event => {
    const { id } = event.target.dataset;
    const numberValue = parseInt(id, 10);
    const selectedProduct = productList.find(item => item.product.id === numberValue);
    const updatedIsCheck = isCheck.includes(numberValue) ? isCheck.filter(item => item !== numberValue) : [...isCheck, numberValue];
    const updatedSelectedProductList = isCheck.includes(numberValue) ? selectedProductList.filter(item => item.product.id !== numberValue) : [...selectedProductList, selectedProduct];

    setIsCheck(updatedIsCheck);
    setSelectedProductList(updatedSelectedProductList);
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
            <Checkbox onClick={handleCheckboxSelectAll} isChecked={isCheckAll} className="basket__checkbox"/>
            <span className="basket__checkbox-text">Выбрать все</span>
          </div>
          <button className="basket__panel-button">
            <IconTrash className="basket__icon-trash"/>
            Удалить выбранные
          </button>
        </div>
        <div className="basket__container">
          <ul className="basket__product-list">
            {productList?.map((product) => (
              <li className="basket__order-item" key={product.product.id}>
                <ProductCardBasket
                  isCheckboxChecked={isCheck.includes(product.product.id)}
                  onCheckboxClick={handleCheckboxClick}
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
