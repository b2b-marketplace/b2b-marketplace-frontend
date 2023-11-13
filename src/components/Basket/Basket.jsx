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
import { getCalculateProductInfo } from '../../shared/lib/utils';
import usePopup from '../../shared/hooks/usePopup';
import { AppApi } from '../../shared/api';
import { accountModel } from '../../entities/account';
import {
  changeChecked,
  changeCheckedAll,
  deleteProduct,
  updateAllProduct,
} from '../../app/store/slices/basketSlice';

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
  const basketList = useSelector((state) => state.basket.basket);
  const { user } = accountModel.useAccount();

  const { openPopup: openRegisterPopup } = usePopup('registration');
  const { openPopup: openLoginPopup } = usePopup('login');

  const [preloader, setPreloader] = useState(true);
  const [basketListProducts, setBasketListProducts] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState([]);
  const [orderInfo, setOrderInfo] = useState({
    productSum: 0,
    productQuantity: 0,
    suppliersCount: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Забираем с сервера описание продуктов в корзине
  const fetchBasketProducts = async () => {
    if (!basketList.basket_products.length) {
      setPreloader(false);
      return;
    }

    const basketProductIds = basketList.basket_products.map((product) => product.id);
    const selectedList = [];

    try {
      const { results } = await AppApi.products.getProductById(basketProductIds);

      const mergedList = basketList.basket_products.reduce((accumulator, basketItem) => {
        const productDescription = results.find((product) => product.id === basketItem.id);

        if (productDescription) {
          if (basketItem.checked) {
            selectedList.push(basketItem.id);
          }

          accumulator.push({
            ...productDescription,
            quantity: basketItem.quantity,
            checked: basketItem.checked,
          });
        }

        return accumulator;
      }, []);

      setBasketListProducts(mergedList);
      setSelectedProductId(selectedList);
    } catch (err) {
      console.error(err);
    } finally {
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
    if (basketListProducts.length === 0) return;

    setPreloader(true);

    const mergedList = basketList.basket_products.map((basketProduct) => {
      const productItem = basketListProducts.find((product) => product.id === basketProduct.id);

      if (!productItem) return null;

      if (basketProduct.checked) {
        setSelectedProductId((prevSelected) => [...prevSelected, basketProduct.id]);
      }

      return {
        ...productItem,
        quantity: basketProduct.quantity,
        checked: basketProduct.checked,
      };
    });

    setBasketListProducts(mergedList.filter(Boolean));
    setPreloader(false);
  }, [basketList]);

  useEffect(() => {
    const selectedProducts = basketListProducts.filter((product) =>
      selectedProductId.includes(product.id)
    );
    const { totalPrice, totalQuantity } = getCalculateProductInfo(selectedProducts);

    const suppliersId = new Set(selectedProducts.map((currentProduct) => currentProduct.seller.id));

    setOrderInfo({
      suppliersCount: suppliersId.size,
      productSum: totalPrice,
      productQuantity: totalQuantity,
    });
  }, [selectedProductId]);

  const handleClickCheckboxProduct = (productId) => {
    dispatch(changeChecked({ productId }));
    const updatedSelectedProductIds = selectedProductId.includes(productId)
      ? selectedProductId.filter((id) => id !== productId)
      : [...selectedProductId, productId];
    setSelectedProductId(updatedSelectedProductIds);
  };

  const handleClickCheckboxSelectAllProduct = () => {
    const allProductIds = basketListProducts
      .filter(
        (product) =>
          product.quantity_in_stock >= product.quantity &&
          product.quantity >= product.wholesale_quantity
      )
      .map((product) => product.id);

    if (isCheckAll) {
      dispatch(changeCheckedAll({ productIds: allProductIds, checked: false }));
      setSelectedProductId([]);
    } else {
      dispatch(changeCheckedAll({ productIds: allProductIds, checked: true }));
      setSelectedProductId(allProductIds);
    }
    setIsCheckAll(!isCheckAll);
  };

  const handleClickDeleteSelectedProduct = () => {
    dispatch(deleteProduct({ productIds: selectedProductId }));
  };

  const handleNavigateToOrder = () => {
    if (selectedProductId.length) {
      dispatch(updateAllProduct({ currentProductList: basketListProducts }));
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
      {basketListProducts.length > 0 ? (
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
              {basketListProducts?.map((product) => (
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
                suppliersCount={orderInfo.suppliersCount}
                productQuantity={orderInfo.productQuantity}
                productSumPrice={orderInfo.productSum}
              />
              <div className="basket__buttons">
                {isLoggedIn ? (
                  user.company.role !== 'supplier' ? (
                    <Button
                      size="l"
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
                        size="l"
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
