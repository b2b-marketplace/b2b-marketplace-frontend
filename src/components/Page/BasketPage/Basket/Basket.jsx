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
    let sumWithProduct = 0;
    let sumProductCount = 0;
    const suppliersId = new Set();
    selectedProductList.map(currentProduct => {
      const productPrice = parseFloat(currentProduct.product.price.replace(/\s/g, ""));
      const productQuantity = parseFloat(currentProduct.quantity);
      const productSuppliersId = currentProduct.product.suppliers[ 0 ].id;
      suppliersId.add(productSuppliersId);

      sumWithProduct += productPrice;
      sumProductCount += productQuantity;
    });

    setOrderInfo(prevOrderInfo => ({
      suppliersCount: suppliersId.size,
      productSum: sumWithProduct,
      productCount: sumProductCount,
    }));
  }, [selectedProductList]);


  const handleClickSelectAllCheckbox = () => {
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

  const handleClickCheckbox = event => {
    const { id } = event.target.dataset;
    const id2 = event.target.closest(".basket__order-item");
    console.log(id2);
    const numberValue = parseInt(id, 10);
    const selectedProduct = productList.find(item => item.product.id === numberValue);
    const updatedIsCheck = isCheck.includes(numberValue) ? isCheck.filter(item => item !== numberValue) : [...isCheck, numberValue];
    const updatedSelectedProductList = isCheck.includes(numberValue) ? selectedProductList.filter(item => item.product.id !== numberValue) : [...selectedProductList, selectedProduct];

    setIsCheck(updatedIsCheck);
    setSelectedProductList(updatedSelectedProductList);
  };

  const handleClickDelete = () => {

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
            <Checkbox onClick={handleClickSelectAllCheckbox} isChecked={isCheckAll} className="basket__checkbox">
              <span className="basket__checkbox-text">Выбрать все</span>
            </Checkbox>
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
                  onCheckboxClick={handleClickCheckbox}
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
