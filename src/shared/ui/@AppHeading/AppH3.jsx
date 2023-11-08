import React from 'react';
import clsx from 'clsx';

import './AppHeadings.scss';

const AppH3 = ({ className, children }) => {
  return <h3 className={clsx('app-h3', className)}>{children}</h3>;
};

export { AppH3 };
