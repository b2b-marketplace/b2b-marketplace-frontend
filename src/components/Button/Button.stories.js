import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    border: {control: 'boolean'},
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
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
    label: 'Button',
  },
};
export const ExtraLarge = {
  args: {
    size: 'xl',
    label: 'Button',
  },
};
export const Large = {
  args: {
    size: 'l',
    label: 'Button',
  },
};

export const Medium = {
  args: {
    size: 'm',
    label: 'Button',
  },
};


export const Small = {
  args: {
    size: 's',
    label: 'Button',
  },
};
