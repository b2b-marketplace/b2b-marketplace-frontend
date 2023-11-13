import React from 'react';
import clsx from 'clsx';

import './AppList.scss';

const AppList = ({ children, className }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul className={clsx('app-list', className)} role="list">
      {children}
    </ul>
  );
};

export { AppList };
