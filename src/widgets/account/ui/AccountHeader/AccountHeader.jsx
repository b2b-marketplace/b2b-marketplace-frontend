import React from 'react';

import { userModel } from '../../../../entities/user';
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
  const { user } = userModel.useGetUser();
  const { company } = user;
  const userRoleName = USER_ROLE_NAME[company.role];

  return (
    <section className="account-header">
      <div className="account-header__container-logo">
        <img className="account-header__logo" src={noImage} alt="Логотип" />
      </div>
      <div className="account-header__container">
        <h1 className="account-header__title">{company.name}</h1>
        <p className="account-header__role">{userRoleName}</p>
      </div>
    </section>
  );
};

AccountHeader.propTypes = {};

export { AccountHeader };
