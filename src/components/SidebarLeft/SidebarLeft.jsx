import React from 'react';
import './SidebarLeft.scss';

const SidebarLeft = ({ extraClassName, children }) => {
  return <div className={`sidebar-left ${extraClassName || ''}`}> {children} </div>;
};

export default SidebarLeft;
