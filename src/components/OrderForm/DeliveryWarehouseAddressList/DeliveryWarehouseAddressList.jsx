import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DeliveryWarehouseAddress from './DeliveryWarehouseAddress/DeliveryWarehouseAddress';
import RadioButton from '../../UI/RadioButton/RadioButton';

import logoSrc1 from '../../../images/stock/logo-1.png';
import logoSrc2 from '../../../images/stock/logo-2.png';
import imageMap from '../../../images/stock/map.jpg';

import './DeliveryWarehouseAddressList.scss';

const DeliveryWarehouseAddressList = ({ onGetStockAddr, isDeliveryAddressList }) => {
  const date1 = Date.now() / 1000 + 10 * 24 * 60 * 60;
  const date2 = Date.now() / 1000 + 20 * 24 * 60 * 60;
  const mockListStock = [
    {
      id: 1,
      city: 'г. Санкт-Петербург',
      price: '3000',
      name: 'Kit',
      icon: logoSrc1,
      address: 'пр-кт Большевиков, 41',
      deliveryDate: date1.toString(),
    },
    {
      id: 2,
      city: 'г. Санкт-Петербург',
      price: '2300',
      name: 'Пэк',
      icon: logoSrc2,
      address: 'пр-кт Большевиков, 2А',
      deliveryDate: date2.toString(),
    },
  ];
  const deliveryAddressList = useSelector((state) => state.basket.basket.delivery_address);
  const selectDefaultValue = 0;
  const [selectedValue, setSelectedValue] = useState(selectDefaultValue);
  const [listStock, setListStock] = useState([]);

  useEffect(() => {
    if (mockListStock.length) {
      setListStock(mockListStock);
      if (onGetStockAddr) {
        if (!deliveryAddressList) {
          onGetStockAddr(mockListStock[selectDefaultValue]);
        } else {
          setSelectedValue(deliveryAddressList.id);
        }
      }
    }
  }, []);

  const handleChangeRadioButton = (stock) => {
    setSelectedValue(stock.id);
    if (onGetStockAddr) onGetStockAddr(stock);
  };

  return (
    <div className="delivery-warehouse-address-list">
      <h3 className="delivery-warehouse-address-list__title">Склады</h3>
      <div className="delivery-warehouse-address-list__container">
        {!listStock.length ? (
          <div className="delivery-warehouse-address-list__">Нет доступных складов</div>
        ) : (
          <ul className="delivery-warehouse-address-list__list">
            {listStock.map((stock, index) => {
              return (
                <li
                  key={stock.id}
                  className="delivery-warehouse-address-list__warehouse-addresses-item"
                >
                  <div className="delivery-warehouse-address-list__content">
                    <RadioButton
                      name="stock"
                      extraClassName="delivery-warehouse-address-list__radio-button"
                      id={stock.id}
                      value={stock.id}
                      checked={
                        selectedValue === stock.id ||
                        (index === selectDefaultValue && !selectedValue)
                      }
                      handleChange={() => handleChangeRadioButton(stock)}
                      color='black'
                    />
                    <DeliveryWarehouseAddress stock={stock} />
                  </div>
                  <span className="delivery-warehouse-address-list__price">от {stock.price} ₽</span>
                </li>
              );
            })}
          </ul>
        )}
        <div className="delivery-warehouse-address-list__map">
          <img className="delivery-warehouse-address-list__map-images" src={imageMap} alt="Карта" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryWarehouseAddressList;
