import React from 'react';
import clsx from 'clsx';

import './AppHeadings.scss';

const AppH2 = ({ className, children }) => {
  return <h2 className={clsx('app-h2', className)}>{children}</h2>;
};

export { AppH2 };
