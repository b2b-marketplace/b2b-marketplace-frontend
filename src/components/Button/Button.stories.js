import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {description: 'Светлая или темная заливка кнопки'},
    border: { control: 'boolean', default: true, description: 'Рамка вокруг кнопки' },
    backgroundColor: { control: 'color' },
    children: {description: 'Надпись на кнопке и иконка'}
  },
};

export const Primary = {
  args: {
    primary: true,
    border: true,
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
  },
};

export const ExtraExtraLarge = {
  args: {
    size: 'xxl',
    children: 'Зарегистрироваться',
  },
};
export const ExtraLarge = {
  args: {
    size: 'xl',
    children: 'В корзину',
  },
};
export const Large = {
  args: {
    size: 'l',
    children: 'Меню',
  },
};

export const Medium = {
  args: {
    size: 'm',
    children: 'Подробнее',
  },
};

export const Small = {
  args: {
    size: 's',
    children: 'Найти',
  },
};

export const ExtraSmall = {
  args: {
    size: 'xs',
    children: '+',
  },
};