import { Link } from 'react-router-dom';

import './MenuBar.scss';
import IconAnimals from '../UI/Icon/Icon_animals';
import IconArrowCounter from '../UI/Icon/Icon_arrow-counter';
import IconCar from '../UI/Icon/Icon_car';
import IconClothes from '../UI/Icon/Icon_clothes';
import IconComputer from '../UI/Icon/Icon_computer';
import IconEatDrink from '../UI/Icon/Icon_eat-drink';
import IconGift from '../UI/Icon/Icon_gift';
import IconHome from '../UI/Icon/Icon_home';
import IconJul from '../UI/Icon/Icon_jul';
import IconRollerBrush from '../UI/Icon/Icon_roller-brush';
import IconSneaker from '../UI/Icon/Icon_sneaker';
import IconSport from '../UI/Icon/Icon_sport';
import IconTextile from '../UI/Icon/Icon_textile';
import IconToy from '../UI/Icon/Icon_toy';

const menuItems = [
  { icon: <IconClothes />, label: 'Одежда' },
  { icon: <IconSneaker />, label: 'Обувь' },
  { icon: <IconComputer />, label: 'Электроника' },
  { icon: <IconToy />, label: 'Детские товары' },
  { icon: <IconSport />, label: 'Спорттовары' },
  { icon: <IconEatDrink />, label: 'Продукты' },
  { icon: <IconRollerBrush />, label: 'Стройматериалы' },
  { icon: <IconTextile />, label: 'Текстиль' },
  { icon: <IconJul />, label: 'Аксессуары' },
  { icon: <IconCar />, label: 'Автотовары' },
  { icon: <IconGift />, label: 'Сувениры' },
  { icon: <IconHome />, label: 'Для дома' },
  { icon: <IconAnimals />, label: 'Для животных' },
];

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="menu-bar__list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-bar__item">
            {item.icon}
            <Link className="menu-bar__link" to="#">
              {item.label}
              <IconArrowCounter className="menu-bar__icon" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
