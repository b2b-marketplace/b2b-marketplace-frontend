import React from 'react';
import './SidebarRight.scss';

const SidebarRight = ({ extraClassName, children }) => {
  return <div className={`sidebar-right ${extraClassName || ''}`}>{children}</div>;
};

export default SidebarRight;
