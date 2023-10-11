import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryExpansion } from '../../../../hooks/useCategoryExpansion';
import './MenuClothes.scss';
import IconArrowCounter from '../../../UI/Icon/Icon_arrow-counter';

const categories = [
  {
    title: 'Женщинам',
    items: [
      'Платья',
      'Футболки и топы',
      'Брюки и шорты',
      'Нижнее белье',
      'Верхняя одежда',
      'Свитера',
    ],
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
    items: [
      'Футболки и майки',
      'Брюки и шорты',
      'Рубашки',
      'Нижнее белье',
      'Носки',
      'Верхняя одежда',
    ],
    link: ['#', '#', '#', '#', '#'],
  },
  {
    title: 'Униформа',
    items: ['Спецодежда', 'Медицинская одежда', 'Поварам и официантам', 'Сигнальная одежда'],
    link: ['#', '#', '#', '#'],
  },
];

const MenuClothes = () => {
  const { expandedCategories, toggleCategoryExpansion } = useCategoryExpansion();

  return (
    <div className="menu-clothes">
      <h2 className="menu-clothes__title">
        Категории <span className="menu-clothes__title-quantity">372 277 товаров</span>
      </h2>
      <div className="menu-clothes__conteiner">
        {categories.map((category, index) => (
          <ul key={index} className="menu-clothes__lists">
            <h3 className="menu-clothes__subtitle">{category.title}</h3>
            {category.items.map((item, subIndex) => (
              <li
                className={`menu-clothes__list ${
                  !expandedCategories[index] && subIndex >= 5 ? 'hidden' : ''
                }`}
                key={subIndex}
              >
                <Link className="menu-clothes__link" to={category.link}>
                  {item}
                </Link>
              </li>
            ))}
            {category.items.length > 5 && (
              <button
                className="menu-clothes__button-more"
                onClick={() => toggleCategoryExpansion(index)}
              >
                {expandedCategories[index] ? 'Скрыть' : 'Еще'}{' '}
                {expandedCategories[index] ? (
                  <IconArrowCounter className="question-page__icon" />
                ) : (
                  <IconArrowCounter />
                )}
              </button>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MenuClothes;
