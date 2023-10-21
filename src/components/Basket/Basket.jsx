import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

import Tooltip from '../UI/Tooltip/Tooltip';
import Preloader from '../UI/Preloader/Preloader';
import IconTrash from '../UI/Icon/Icon_trash';
import IconInfoFill from '../UI/Icon/Icon_info_fill';
import Checkbox from '../UI/Checkbox/Checkbox';
import { Button } from '../UI/Button/Button';
import ProductCardHorizontal from '../ProductElements/ProductCardHorizontal/ProductCardHorizontal';
import OrderDetailHeader from '../OrderDetail/OrderDetailHeader/OrderDetailHeader';
import OrderDetailContentBasket from '../OrderDetail/OrderDetailContentBasket/OrderDetailContentBasket';
import OrderDetail from '../OrderDetail/OrderDetail';
import { Sidebar } from '../../shared/ui/Layout';
import { getProductText, getSuppliersText, getCalculateProductInfo } from '../../shared/lib/utils';
import usePopup from '../../shared/hooks/usePopup';
import productsApi from '../../shared/api/productsApi';
import { changeChecked, deleteProduct, updateAllProduct } from '../../app/store/slices/basketSlice';

import './Basket.scss';

/**
 *
 * @param className
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Basket = ({ className }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.account);
  const { openPopup: openRegisterPopup } = usePopup('registration');
  const { openPopup: openLoginPopup } = usePopup('login');

  const [preloader, setPreloader] = useState(true);
  const [currentProductList, setCurrentProductList] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productQuantity: 0,
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
        const { results } = await productsApi.getProductById(productBasketIds);
        for (const basketItem of basketList.basket_products) {
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

    for (const basketItem of basketList.basket_products) {
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

  const handleOpenLoginPopup = () => {
    openLoginPopup();
  };

  const handleOpenRegisterPopup = () => {
    openRegisterPopup();
  };

  if (preloader) {
    return <Preloader />;
  }
  return (
    <section className={`basket ${className || ''}`}>
      {currentProductList.length > 0 ? (
        <div className="basket__container">
          <div className="basket__container-product">
            <div className="basket__panel">
              <div className="basket__panel-checkbox">
                <Checkbox
                  handleChangeCheckbox={handleClickCheckboxSelectAllProduct}
                  checked={isCheckAll}
                  className="basket__checkbox"
                >
                  <span className="basket__checkbox-text">Выбрать все</span>
                </Checkbox>
              </div>
              {isCheckAll || selectedProductId.length ? (
                <button
                  type="button"
                  onClick={handleClickDeleteSelectedProduct}
                  className="basket__panel-button"
                >
                  <IconTrash className="basket__icon-trash" />
                  Удалить выбранные
                </button>
              ) : (
                ''
              )}
            </div>
            <ul className="basket__product-list">
              {currentProductList?.map((product) => (
                <li className="basket__product-item" key={product.id} data-id={product.id}>
                  <ProductCardHorizontal
                    isCheckboxChecked={product.checked}
                    onClickCheckbox={() => handleClickCheckboxProduct(product.id)}
                    product={product}
                    className="basket__product"
                  />
                </li>
              ))}
            </ul>
          </div>
          <Sidebar type="right" className="basket__sidebar-right">
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
                suppliersCount={getSuppliersText(orderInfo.suppliersCount)}
                productQuantity={getProductText(orderInfo.productQuantity)}
                productSumPrice={orderInfo.productSum}
              />
              <div className="basket__buttons">
                {isLoggedIn ? (
                  user.company.role !== 'supplier' ? (
                    <Button
                      size="m"
                      extraClass="basket__button"
                      onClick={handleNavigateToOrder}
                      primary
                      dark
                      disabled={!selectedProductId.length || !orderInfo.productQuantity}
                      label="Купить"
                    >
                      Купить
                    </Button>
                  ) : (
                    <>
                      <Button
                        extraClass="basket__button"
                        size="m"
                        primary
                        dark
                        disabled
                        label="Купить"
                      >
                        Купить
                      </Button>
                      <div className="basket__hint basket__hint_warning">
                        Оформление заказа доступно только покупателям
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <Button
                      size="m"
                      onClick={handleOpenRegisterPopup}
                      primary
                      dark
                      label="Зарегистрироваться"
                    >
                      Зарегистрироваться
                    </Button>
                    <Button size="m" onClick={openLoginPopup} label="Войти" primary>
                      Войти
                    </Button>
                  </>
                )}
              </div>
            </OrderDetail>
          </Sidebar>
        </div>
      ) : (
        <div className="basket__empty">Корзина Пуста</div>
      )}
    </section>
  );
};

export default Basket;
