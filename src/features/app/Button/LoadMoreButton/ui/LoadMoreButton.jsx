import clsx from 'clsx';
import React from 'react';

import { Button } from '../../../../../components/UI/Button/Button';

import './LoadMoreButton.scss';

const LoadMoreButton = ({ onClick, disabled, className }) => {
  return (
    <Button
      className={clsx('load-more-button', className)}
      primary
      dark
      size="xl"
      onClick={() => onClick()}
      disabled={disabled}
    >
      Смотреть ещё
    </Button>
  );
};

export { LoadMoreButton };
