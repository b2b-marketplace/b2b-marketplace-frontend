import { Link } from 'react-router-dom';
import './CatalogBar.scss';
import IconClothes from '../UI/Icon/Icon_clothes';
import IconSneaker from '../UI/Icon/Icon_sneaker';
import IconComputer from '../UI/Icon/Icon_computer';
import IconToy from '../UI/Icon/Icon_toy';
import IconSport from '../UI/Icon/Icon_sport';
import IconEatDrink from '../UI/Icon/Icon_eat-drink';
import IconRollerBrush from '../UI/Icon/Icon_roller-brush';
import IconTextile from '../UI/Icon/Icon_textile';
import IconJul from '../UI/Icon/Icon_jul';
import IconCar from '../UI/Icon/Icon_car';
import IconGift from '../UI/Icon/Icon_gift';
import IconHome from '../UI/Icon/Icon_home';
import IconAnimals from '../UI/Icon/Icon_animals';
import IconArrowCounter from '../UI/Icon/Icon_arrow-counter';

const catalogItems = [
  { icon: <IconClothes className={'catalog-bar__icons'}/>, label: 'Одежда' },
  { icon: <IconSneaker className={'catalog-bar__icons'}/>, label: 'Обувь' },
  { icon: <IconComputer className={'catalog-bar__icons'}/>, label: 'Электроника' },
  { icon: <IconToy className={'catalog-bar__icons'}/>, label: 'Детские товары' },
  { icon: <IconSport className={'catalog-bar__icons'}/>, label: 'Спорттовары' },
  { icon: <IconEatDrink className={'catalog-bar__icons'}/>, label: 'Продукты' },
  { icon: <IconRollerBrush className={'catalog-bar__icons'}/>, label: 'Стройматериалы' },
  { icon: <IconTextile className={'catalog-bar__icons'}/>, label: 'Текстиль' },
  { icon: <IconJul className={'catalog-bar__icons'}/>, label: 'Аксессуары' },
  { icon: <IconCar className={'catalog-bar__icons'}/>, label: 'Автотовары' },
  { icon: <IconGift className={'catalog-bar__icons'}/>, label: 'Сувениры' },
  { icon: <IconHome className={'catalog-bar__icons'}/>, label: 'Для дома' },
  { icon: <IconAnimals className={'catalog-bar__icons'}/>, label: 'Для животных' },
];

const CatalogBar = () => {
  return (
    <div className="catalog-bar">
      <ul className="catalog-bar__list">
        {catalogItems.map((item, index) => (
          <li key={index} className="catalog-bar__item">
            <Link className="catalog-bar__link" to="#">
              {item.icon}
              {item.label}
            </Link>
            <IconArrowCounter className={'catalog-bar__icon'} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogBar;
