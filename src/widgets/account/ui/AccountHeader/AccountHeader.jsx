import { useSelector } from 'react-redux';
import React from 'react';

import { AppH3 } from '../../../../shared/ui/AppHeading';
import { USER_ROLE_NAME } from '../../../../shared/config/constants';

import noImage from '../../../../images/basket/Stub_132_128.jpg';

import './AccountHeader.scss';

/**
 * Компонент заголовка компании.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AccountHeader = () => {
  const { user } = useSelector((state) => state.account);
  const { company } = user;
  const userRoleName = USER_ROLE_NAME[company.role];

  return (
    <section className="account-header">
      <div className="account-header__container-logo">
        <img className="account-header__logo" src={noImage} alt="Логотип" />
      </div>
      <div className="account-header__container">
        <AppH3>{company.name}</AppH3>
        <p className="account-header__role">{userRoleName}</p>
      </div>
    </section>
  );
};

AccountHeader.propTypes = {};

export { AccountHeader };
