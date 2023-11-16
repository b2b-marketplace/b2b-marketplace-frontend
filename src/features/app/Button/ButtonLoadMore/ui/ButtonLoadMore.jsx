import React from 'react';
import clsx from 'clsx';

import { Button } from '../../../../../components/UI/Button/Button';

const ButtonLoadMore = ({ onClick, disabled, className }) => {
  return (
    <Button
      className={clsx('button-load-more', className)}
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

export { ButtonLoadMore };
