import React from 'react';
import clsx from 'clsx';

import './Main.scss';

export const Main = ({ className, children }) => {
  return <main className={clsx('main', className)}>{children}</main>;
};
