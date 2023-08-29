import React from 'react';
import { Link } from 'react-router-dom';
import './CatalogClothes.scss';

const categories = [
  {
    title: 'Женщинам',
    items: ['Платья', 'Футболки и топы', 'Брюки и шорты', 'Нижнее белье', 'Верхняя одежда'],
  },
  {
    title: 'Детям',
    items: ['Девочкам', 'Мальчикам', 'Новорожденным', 'Школьная форма'],
  },
  {
    title: 'Уход за одеждой',
    items: ['Красители', 'Ролики, щетки', 'Бретели, штрипки'],
  },
  {
    title: 'Мужчинам',
    items: ['Футболки и майки', 'Брюки и шорты', 'Рубашки', 'Нижнее белье', 'Носки'],
  },
  {
    title: 'Униформа',
    items: ['Спецодежда', 'Медицинская одежда', 'Поварам и официантам', 'Сигнальная одежда'],
  },
];

const CatalogClothes = () => {
  return (
    <div className="catalog-clothes">
      <h2 className="catalog-clothes__title">Категории</h2>
      <div className="catalog-clothes__conteiner">
        {categories.map((category, index) => (
          <ul key={index} className="catalog-clothes__list">
            <h3 className="catalog-clothes__subtitle">{category.title}</h3>
            {category.items.map((item, subIndex) => (
              <li key={subIndex}>
                <Link className="catalog-clothes__link" to="#">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CatalogClothes;
