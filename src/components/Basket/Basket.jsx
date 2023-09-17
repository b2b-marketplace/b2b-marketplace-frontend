import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.scss';
import { changeChecked, deleteProduct } from '../../store/slices/basketSlice.js';
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
import SidebarRight from '../SidebarRight/SidebarRight';
import { useNavigate } from 'react-router-dom';

const Basket = ({ className }) => {
  const [currentProductList, setCurrentProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productCount: 0,
    suppliersCount: 0,
  });
  const basketList = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchBasketProducts = async () => {
    if (basketList.basket_products.length) {
      const productBasketIds = basketList.basket_products.map((product) => product.id);
      const mergedList = [];
      const selectedList = [];
      try {
        const { results } = await productsApi.getProducts(productBasketIds);
        for (const basketItem of basketList.basket_products) {
          const productItem = results.find((product) => product.id === basketItem.id);
          if (productItem) {
            if (basketItem.checked) {
              selectedList.push(basketItem.id);
            }
            const mergedItem = {
              ...productItem,
              quantity: basketItem.quantity,
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
      }
    }
  };

  useEffect(() => {
    fetchBasketProducts();
  }, []);

  useEffect(() => {
    if (currentProductList.length === 0) return;

    const mergedList = [];

    for (const basketItem of basketList.basket_products) {
      const productItem = currentProductList.find((product) => product.id === basketItem.id);

      if (productItem) {
        if (basketItem.checked) {
          setSelectedProductId([...selectedProductId, basketItem.id]);
        }
        const mergedItem = {
          ...productItem,
          quantity: basketItem.quantity,
          checked: basketItem.checked,
        };
        mergedList.push(mergedItem);
      }
    }

    setCurrentProductList(mergedList);
  }, [basketList]);

  useEffect(() => {
    const selectedProducts = currentProductList.filter((product) =>
      selectedProductId.includes(product.id)
    );

    const sumWithProducts = selectedProducts.reduce((total, currentProduct) => {
      const productPrice = parseFloat(currentProduct.price.replace(/\s/g, ''));
      const productQuantity = parseFloat(currentProduct.quantity);
      return total + productPrice * productQuantity;
    }, 0);

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

  const handleClickCheckboxProduct = (productId) => {
    dispatch(changeChecked({ productIds: productId }));
    const updatedSelectedProductIds = selectedProductId.includes(productId)
      ? selectedProductId.filter((id) => id !== productId)
      : [...selectedProductId, productId];
    setSelectedProductId(updatedSelectedProductIds);
  };

  const handleClickCheckboxSelectAllProduct = () => {
    if (isCheckAll) {
      setSelectedProductId([]);
      dispatch(changeChecked({ productIds: [], checked: false }));
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
    if (selectedProductId.length)
      navigate('/order', {
        state: { cameFromBasket: true },
      });
  };

  return (
    <section className={`basket ${className || ''}`}>
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
                <button onClick={handleClickDeleteSelectedProduct} className="basket__panel-button">
                  <IconTrash className="basket__icon-trash" />
                  Удалить выбранные
                </button>
              </div>
              <ul className="basket__product-list">
                {currentProductList?.map((product) => (
                  <li className="basket__product-item" key={product.id} data-id={product.id}>
                    <ProductCardBasket
                      isCheckboxChecked={product.checked}
                      onClickCheckbox={() => handleClickCheckboxProduct(product.id)}
                      product={product}
                      className="basket__product"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <SidebarRight extraClassName="basket__sidebar-right">
              <OrderDetail extraClassName="basket__order-detail-sticky">
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
                    onClick={handleNavigateToOrder}
                    primary
                    dark
                    disabled={!selectedProductId.length}
                    label={'Купить'}
                    // extraClass={`basket__order-detail-button ${
                    //   !selectedProductId.length ? 'basket__order-detail-button_disabled' : ''
                    // }`}
                  >
                    Купить
                  </Button>
                </div>
              </OrderDetail>
            </SidebarRight>
          </div>
        </>
      ) : (
        <div className="basket__empty">Корзина Пуста</div>
      )}
    </section>
  );
};

export default Basket;
