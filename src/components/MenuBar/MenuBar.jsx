import { Link } from 'react-router-dom';
import './MenuBar.scss';
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

const menuItems = [
  { icon: <IconClothes className={'menu-bar__icons'}/>, label: 'Одежда' },
  { icon: <IconSneaker className={'menu-bar__icons'}/>, label: 'Обувь' },
  { icon: <IconComputer className={'menu-bar__icons'}/>, label: 'Электроника' },
  { icon: <IconToy className={'menu-bar__icons'}/>, label: 'Детские товары' },
  { icon: <IconSport className={'menu-bar__icons'}/>, label: 'Спорттовары' },
  { icon: <IconEatDrink className={'menu-bar__icons'}/>, label: 'Продукты' },
  { icon: <IconRollerBrush className={'menu-bar__icons'}/>, label: 'Стройматериалы' },
  { icon: <IconTextile className={'menu-bar__icons'}/>, label: 'Текстиль' },
  { icon: <IconJul className={'menu-bar__icons'}/>, label: 'Аксессуары' },
  { icon: <IconCar className={'menu-bar__icons'}/>, label: 'Автотовары' },
  { icon: <IconGift className={'menu-bar__icons'}/>, label: 'Сувениры' },
  { icon: <IconHome className={'menu-bar__icons'}/>, label: 'Для дома' },
  { icon: <IconAnimals className={'menu-bar__icons'}/>, label: 'Для животных' },
];

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul className="menu-bar__list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-bar__item">
            <Link className="menu-bar__link" to="#">
              {item.icon}
              {item.label}
            </Link>
            <IconArrowCounter className={'menu-bar__icon'} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
