import IconBag from '../../../../components/UI/Icon/Icon_bag';
import IconBasket from '../../../../components/UI/Icon/Icon_basket';
import BiBag from '../../../../components/UI/Icon/Icon_bibag';
import IconCreditCard from '../../../../components/UI/Icon/Icon_credit-card';
import IconHearth from '../../../../components/UI/Icon/Icon_hearth';
import IconLocation from '../../../../components/UI/Icon/Icon_location';
import IconLock from '../../../../components/UI/Icon/Icon_lock';
import IconPackage from '../../../../components/UI/Icon/Icon_package';
import IconPurchases from '../../../../components/UI/Icon/Icon_purchases';

export const menuItemsCustomer = [
  { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
  //{ icon: <IconPackage />, link: 'purchase', label: 'Закупки' },
  { icon: <IconPurchases />, link: 'orders', label: 'Мои заказы' },
  { icon: <IconHearth />, link: 'favorites', label: 'Избранное' },
  { icon: <IconBasket />, link: '/basket', label: 'Корзина' },
  //{ icon: <IconMessage />, link: 'message', label: 'Сообщения' },
  { icon: <IconCreditCard />, link: 'payment', label: 'Оплата' },
  { icon: <IconLocation />, link: 'address', label: 'Адрес' },
  { icon: <IconLock />, link: 'secure', label: 'Безопасность' },
];

export const menuItemsSupplier = [
  { icon: <BiBag />, link: 'profile', label: 'Моя компания' },
  { icon: <IconPackage />, link: 'products', label: 'Товары' },
  { icon: <IconBag />, link: 'orders', label: 'Заказы' },
  { icon: <IconHearth />, link: 'favorites', label: 'Избранное' },
  //{ icon: <IconMessage />, link: 'message', label: 'Сообщения' },
  { icon: <IconCreditCard />, link: 'payment', label: 'Оплата' },
  { icon: <IconLocation />, link: 'address', label: 'Адрес' },
  { icon: <IconLock />, link: 'secure', label: 'Безопасность' },
];
