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
  },
};

export const Primary = {
  args: {
    primary: true,
    border: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const ExtraExtraLarge = {
  args: {
    size: 'xxl',
    label: 'Зарегистрироваться',
  },
};
export const ExtraLarge = {
  args: {
    size: 'xl',
    label: 'В корзину',
  },
};
export const Large = {
  args: {
    size: 'l',
    label: 'Меню',
  },
};

export const Medium = {
  args: {
    size: 'm',
    label: 'Подробнее',
  },
};

export const Small = {
  args: {
    size: 's',
    label: 'Найти',
  },
};
