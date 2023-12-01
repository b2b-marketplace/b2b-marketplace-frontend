import PropTypes from 'prop-types';
import { useState } from 'react';

import IconPencil from '../../../../components/UI/Icon/Icon_pencil';
import { userModel } from '../../../../entities/user';
import { USER_ROLE_NAME } from '../../../../shared/config/constants';
import { AccountInputField } from '../AccountInputField/AccountInputField';

import './AccountHeader.scss';

/**
 * Компонент заголовка компании.
 *
 * @returns {JSX.Element}
 * @constructor
 */

const AccountHeader = ({ isEditMode }) => {
  const { user } = userModel.useGetUser();
  const { company } = user;
  const userRoleName = USER_ROLE_NAME[company.role];

  const [selectedLogo, setSelectedLogo] = useState(null);

  // Функция для обработки выбора файлов
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedLogo(selectedFile);
  };

  return (
    <section className="account-header">
      <div className="account-header__container-logo">
        <input
          className="account-header__upload-input"
          type="file"
          id="file-upload-input"
          accept="image/jpeg, image/png"
          onChange={handleFileSelect}
        />
        <label htmlFor="file-upload-input" className="account-header__button-upload">
          <div className="account-header__icon-container">
            {selectedLogo && (
              <img
                className="account-header__logo"
                src={URL.createObjectURL(selectedLogo)}
                alt="Company Logo"
              />
            )}
            <div className="account-header__pencil-icon">
              <IconPencil />
            </div>
          </div>
        </label>
      </div>
      <div className="account-header__container">
        <h1 className="account-header__title">
          {isEditMode ? (
            <AccountInputField
              placeholder="Название компании"
              type="text"
              name="companyName"
              id="companyName"
              isDisabled={!isEditMode}
              value={company.name}
              onChange={(e) => console.log('Handle change:', e.target.value)}
            />
          ) : (
            company.name
          )}
        </h1>
        <p className="account-header__role">{userRoleName}</p>
      </div>
    </section>
  );
};

AccountHeader.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
};

export { AccountHeader };
