import React from 'react';

import './Icon.scss';

const Icon = ({ children, className }) => {
  const localClassName = className === 'undefined' ? '' : className;

  return <span className={`icon ${localClassName}`}>{children}</span>;
};

export default Icon;
