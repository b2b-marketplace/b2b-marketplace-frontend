import clsx from 'clsx';
import React from 'react';

import './Main.scss';

export const Main = ({ className, children }) => {
  return <main className={clsx('main', className)}>{children}</main>;
};
