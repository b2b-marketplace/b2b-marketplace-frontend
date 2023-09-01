import React from 'react';
import { Link } from 'react-router-dom';
import './MenuClothes.scss';

const categories = [
  {
    title: 'Женщинам',
    items: ['Платья', 'Футболки и топы', 'Брюки и шорты', 'Нижнее белье', 'Верхняя одежда'],
    link: ['#', '#', '#', '#', '#'],
  },
  {
    title: 'Детям',
    items: ['Девочкам', 'Мальчикам', 'Новорожденным', 'Школьная форма'],
    link: ['#', '#', '#', '#'],
  },
  {
    title: 'Уход за одеждой',
    items: ['Красители', 'Ролики, щетки', 'Бретели, штрипки'],
    link: ['#', '#', '#'],
  },
  {
    title: 'Мужчинам',
    items: ['Футболки и майки', 'Брюки и шорты', 'Рубашки', 'Нижнее белье', 'Носки'],
    link: ['#', '#', '#', '#', '#'],
  },
  {
    title: 'Униформа',
    items: ['Спецодежда', 'Медицинская одежда', 'Поварам и официантам', 'Сигнальная одежда'],
    link: ['#', '#', '#', '#'],
  },
];

const MenuClothes = () => {
  return (
    <div className="menu-clothes">
      <h2 className="menu-clothes__title">Категории</h2>
      <div className="menu-clothes__conteiner">
        {categories.map((category, index) => (
          <ul key={index} className="menu-clothes__list">
            <h3 className="menu-clothes__subtitle">{category.title}</h3>
            {category.items.map((item, subIndex) => (
              <li key={subIndex}>
                <Link className="menu-clothes__link" to={category.link}>
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

export default MenuClothes;
