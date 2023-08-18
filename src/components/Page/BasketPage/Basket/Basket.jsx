import React from 'react';
import "./Basket.scss";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import IconTrash from "../../../Icon/Icon_trash";
import ProductHorizontal from "../../../ProductHorizontal/ProductHorizontal";
import OrderDetail from "./OrderDetail/OrderDetail";


const Basket = ({ className }) => {
  const productsList = [
    {
      "id": 3,
      "products": [
        {
          "product": {
            "id": 0,
            "sku": "1234567",
            "name": "Детская зимняя куртка",
            "brand": "Бренд",
            "price": "40 000",
            "wholesale_quantity": 0,
            "video": "string",
            "quantity_in_stock": 0,
            "description": "Описание",
            "manufacturer_country": "Россия",
            "user": {
              "id": 0,
              "username": "string"
            },
            "category": {
              "id": 10,
              "name": "Куртки",
              "slug": "kurtki",
              "parent_id": 123
            },
            "images": [
              {
                "image": "http://example.org/images/image.jpeg"
              }
            ],
            //Добавлено
            "suppliers": [
              {
                "id": 0,
                "email": "user@example.com",
                "username": "@hqWgF4c2V+KytAySz",
                "company": {
                  "company_id": 0,
                  "company_name": "ООО «Компания»",
                  "inn": 0,
                  "ogrn": 0,
                  "phone_numbers": [
                    "string"
                  ],
                  "addresses": [
                    "string"
                  ]
                }
              }
            ],
            "characteristic": [
              { "size": "10-12 лет" },
              { "color": 'red' },
            ],
          },
          "quantity": 1000
        }, {
          "product": {
            "id": 1,
            "sku": "1234567",
            "name": "Детская зимняя куртка",
            "brand": "Бренд",
            "price": "40 000",
            "wholesale_quantity": 0,
            "video": "string",
            "quantity_in_stock": 0,
            "description": "Описание",
            "manufacturer_country": "Россия",
            "user": {
              "id": 0,
              "username": "string"
            },
            "category": {
              "id": 10,
              "name": "Куртки",
              "slug": "kurtki",
              "parent_id": 123
            },
            "images": [
              {
                "image": "http://example.org/images/image.jpeg"
              }
            ],
            //Добавлено
            "suppliers": [
              {
                "id": 0,
                "email": "user@example.com",
                "username": "@hqWgF4c2V+KytAySz",
                "company": {
                  "company_id": 0,
                  "company_name": "ООО «Компания»",
                  "inn": 0,
                  "ogrn": 0,
                  "phone_numbers": [
                    "string"
                  ],
                  "addresses": [
                    "string"
                  ]
                }
              }
            ],
            "characteristic": [
              { "size": "10-12 лет" },
              { "color": 'red' },
            ],
          },
          "quantity": 1000
        }, {
          "product": {
            "id": 3,
            "sku": "1234567",
            "name": "Детская зимняя куртка",
            "brand": "Бренд",
            "price": "40 000",
            "wholesale_quantity": 0,
            "video": "string",
            "quantity_in_stock": 0,
            "description": "Описание",
            "manufacturer_country": "Россия",
            "user": {
              "id": 0,
              "username": "string"
            },
            "category": {
              "id": 10,
              "name": "Куртки",
              "slug": "kurtki",
              "parent_id": 123
            },
            "images": [
              {
                "image": "http://example.org/images/image.jpeg"
              }
            ],
            //Добавлено
            "suppliers": [
              {
                "id": 0,
                "email": "user@example.com",
                "username": "@hqWgF4c2V+KytAySz",
                "company": {
                  "company_id": 0,
                  "company_name": "ООО «Компания»",
                  "inn": 0,
                  "ogrn": 0,
                  "phone_numbers": [
                    "string"
                  ],
                  "addresses": [
                    "string"
                  ]
                }
              }
            ],
            "characteristic": [
              { "size": "10-12 лет" },
              { "color": 'red' },
            ],
          },
          "quantity": 1000
        }
      ]
    }
  ];

  return (
    <section className={`basket ${className ? className : ''}`}>
      <header className="basket__header ">
        <h1 className="basket__title">Корзина</h1>
        <p className="basket__title-product-count">2</p>
      </header>
      <main className="basket__main">
        <div className="basket__panel">
          <div className="basket__panel-checkbox">
            <Checkbox className="basket__checkbox"/>
            <span className="basket__checkbox-text">Выбрать все</span>
          </div>
          <button className="basket__panel-button">
            <IconTrash className="basket__icon-trash"/>
            Удалить выбранные
          </button>
        </div>
        <div className="basket__container">
          <ul className="basket__product-list">
            {productsList[ 0 ]?.products?.map((product, id) => (
              <li className="basket__order-item" key={product.product.id}>
                <ProductHorizontal product={product.product} className="basket__product"/>
              </li>
            ))}
          </ul>
          <div className="basket__order-detail-container">
            <OrderDetail className="basket__order-detail-sticky"/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Basket;
