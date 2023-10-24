import React from 'react';
import clsx from 'clsx';

import './AppHeadings.scss';

const AppH1 = ({ className, children }) => {
  return <h1 className={clsx('app-h1', className)}>{children}</h1>;
};

export { AppH1 };
