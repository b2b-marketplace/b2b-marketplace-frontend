import React from 'react';
import './DeliveryWarehouseAddress.scss';

const DeliveryWarehouseAddress = ({ children, stock }) => {
  // Функция для преобразования Unix timestamp в строку формата "ДД Месяц"
  function formatDate(unixTimestamp) {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const date = new Date(unixTimestamp * 1000); // Преобразуем в миллисекунды
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day} ${month}`;
  }

  return (
    <div className="delivery-warehouse-address">
      <img className="delivery-warehouse-address__image" src={stock.icon} alt={stock.name} />
      <div className="delivery-warehouse-address__content">
        <span>
          {stock.city}, {stock.address}
        </span>
        <span className="delivery-warehouse-address__dalavery-date">
          Ориентировочная дата доставки: <b>{formatDate(stock.deliveryDate)}</b>
        </span>
      </div>
      {children}
    </div>
  );
};

export default DeliveryWarehouseAddress;
