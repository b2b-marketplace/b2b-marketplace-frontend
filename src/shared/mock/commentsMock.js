import product from './../../images/4.jpg';
import avatar from './../../images/defaultUserLogo.png';

export const PRODUCT_COMMENTS = [
  {
    id: 1,
    author: { name: 'Марина У.', avatar: avatar },
    rating: 5,
    date: '20 августа 2023',
    advantages: 'Качество отличное, Плотная ткань',
    disadvantages: 'Нет',
    comment:
      'Отличный рюкзак. Простой, но выглядит стильно. Подходит взрослым и детям. Заказала партию 100 штук. Разбирают быстро.',
    images: [product, product, product],
    likes: 3,
    dislikes: 0,
  },
  {
    id: 2,
    author: { name: 'Ольга В.', avatar: avatar },
    rating: 3,
    date: '08 декабря 2023',
    advantages: 'Небольшой, но вместительный.',
    disadvantages: 'Нет',
    comment:
      'Хороший рюкзак. Сшит качественно, строчки ровные, нитки не торчат, фурнитура надежная. Заказала партию 100 штук. Разобрали за 2 месяца!',
    images: [product, product, product, product, product, product],
    likes: 25,
    dislikes: 10,
  },
  {
    id: 3,
    author: { name: 'Зухра В.', avatar: avatar },
    rating: 5,
    date: '11 ноября 2023',
    advantages: 'Товар замечательный, пришёл очень быстро.',
    disadvantages: 'Ещё не смотрела, надеюсь что нет.',
    comment: 'Пришёл заказ месяц назад, ещё не открывали, но всем довольны. Берите не пожалеете.',
    images: [],
    likes: 0,
    dislikes: 93,
  },
  {
    id: 4,
    author: { name: 'Клава У.', avatar: avatar },
    rating: 0,
    date: '05 октября 2023',
    advantages: 'Их нет',
    disadvantages: 'Полная лажа и паль',
    comment:
      'Качество ужасное, ощущение, что делали китайские дети в подвале за плошку риса. Хотя если гулять с этим в безлунную ночь по Рязани, то сойдёт.',
    images: [
      product,
      product,
      product,
      product,
      product,
      product,
      product,
      product,
      product,
      product,
      product,
      product,
    ],
    likes: 25,
    dislikes: 1,
  },
];
