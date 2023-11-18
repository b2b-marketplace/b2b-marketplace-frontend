import React from 'react';

//import './AppListItem.scss';

const AppListItem = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export { AppListItem };
