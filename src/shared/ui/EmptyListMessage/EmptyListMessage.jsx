import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import './EmptyListMessage.scss';

/**
 *
 * @param className - дополнительные классы
 * @param children - Текст сообщения
 * @returns {Element}
 * @constructor
 */
const EmptyListMessage = ({ className, children }) => {
  return <div className={clsx('empty-list-message', className)}>{children}</div>;
};
EmptyListMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export { EmptyListMessage };
