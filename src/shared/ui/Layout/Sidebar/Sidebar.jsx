import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Sidebar.scss';

/**
 *
 * @param {string} className - Дополнительные классы CSS.
 * @param {ReactNode} children - Содержимое панели.
 * @param {string} type - Тип панели ('left' или 'right').
 * @returns {JSX.Element}
 * @constructor
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const Sidebar = ({ className, children, type }) => {
  const currentClassName = clsx(
    'sidebar',
    className,
    type === 'left' && 'sidebar_left',
    type === 'right' && 'sidebar_right'
  );
  return <section className={currentClassName}>{children}</section>;
};

Sidebar.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.node,
};

Sidebar.defaultProps = {
  className: '',
  type: 'left',
  children: undefined,
};

export { Sidebar };
