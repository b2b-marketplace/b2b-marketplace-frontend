import React from 'react';
import './SidebarRight.scss';

const SidebarRight = ({ extraClassName, ...props }) => {
  return <div className={`sidebar-right ${extraClassName || ''}`}>{props.children}</div>;
};

export default SidebarRight;
