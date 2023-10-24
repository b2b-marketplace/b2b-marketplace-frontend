import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import { USER_ROLE_NAME } from '../../../../shared/config/constants';

import noImage from '../../../../images/basket/Stub_132_128.jpg';

import './AccountHeader.scss';

/**
 * Компонент заголовка компании.
 *
 * @param {string} title - Заголовок компании.
 * @param {string} name - Название компании.
 * @returns {JSX.Element}
 * @constructor
 */
const AccountHeader = ({ title, name }) => {
  const { user } = useSelector((state) => state.account);
  const { company } = user;
  const userRoleName = USER_ROLE_NAME[company.role];

  return (
    <section className="account-header">
      <div className="account-header__container-logo">
        <img className="account-header__logo" src={noImage} alt="Логотип" />
      </div>
      <div className="account-header__container">
        <h3 className="account-header__name">{company.name}</h3>
        <p className="account-header__role">{userRoleName}</p>
      </div>
      {/*      {button && (*/}
      {/*  <button className="account-header__button" type="button">*/}
      {/*    {button}*/}
      {/*  </button>*/}
      {/*)}*/}
    </section>
  );
};

AccountHeader.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string,
};

export { AccountHeader };
