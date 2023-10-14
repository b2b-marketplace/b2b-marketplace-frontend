import React, { useState } from 'react';

import IconClose from '../../Icon/Icon_close';
import IconPlus from '../../Icon/Icon_plus';

import visa from '../../../../images/visa.png';

import './AccountPaymentInfo.scss';

const AccountPaymentInfo = ({ title }) => {
  const [isMain, setIsMain] = useState(true);

  function changeMain() {
    setIsMain(!isMain);
  }

  return (
    <section className="accountpaymentinfo">
      <h1 className="accountpaymentinfo__title">{title}</h1>
      <ul className="accountpaymentinfo__list">
        <li
          className={
            isMain
              ? 'accountpaymentinfo__item accountpaymentinfo__item-main'
              : 'accountpaymentinfo__item'
          }
        >
          <div className="accountpaymentinfo__item-container">
            <div className="accountpaymentinfo__checkbox-zone">
              <div
                className={
                  isMain
                    ? 'accountpaymentinfo__logo-block accountpaymentinfo__logo-block-main'
                    : 'accountpaymentinfo__logo-block'
                }
              >
                <img
                  className="accountpaymentinfo__logo"
                  src={visa}
                  alt="Название платежной системы"
                ></img>
              </div>
              <input
                className={
                  isMain
                    ? 'accountpaymentinfo__checkbox accountpaymentinfo__checkbox-main'
                    : 'accountpaymentinfo__checkbox'
                }
                type="checkbox"
                id="input1"
                onClick={changeMain}
              ></input>
            </div>
            <div
              className={
                isMain
                  ? 'accountpaymentinfo__number-about accountpaymentinfo__number-about-main'
                  : 'accountpaymentinfo__number-about'
              }
            >
              <p className="accountpaymentinfo__type">{isMain ? 'Основной' : 'Сделать основной'}</p>
              <div className="accountpaymentinfo__number-zone">
                <p className="accountpaymentinfo__number"> 220220******2360</p>
                <button className="accountpaymentinfo__delete">
                  {isMain ? (
                    <IconClose className="accountpaymentinfo__delete-button_ligth" />
                  ) : (
                    <IconClose className="accountpaymentinfo__delete-button" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={
            isMain
              ? 'accountpaymentinfo__item accountpaymentinfo__item-main'
              : 'accountpaymentinfo__item'
          }
        >
          <div className="accountpaymentinfo__item-container">
            <div className="accountpaymentinfo__checkbox-zone">
              <div
                className={
                  isMain
                    ? 'accountpaymentinfo__logo-block accountpaymentinfo__logo-block-main'
                    : 'accountpaymentinfo__logo-block'
                }
              >
                <img
                  className="accountpaymentinfo__logo"
                  src={visa}
                  alt="Название платежной системы"
                ></img>
              </div>
              <input
                className={
                  isMain
                    ? 'accountpaymentinfo__checkbox accountpaymentinfo__checkbox-main'
                    : 'accountpaymentinfo__checkbox'
                }
                type="checkbox"
                id="input1"
                onClick={changeMain}
              ></input>
            </div>
            <div
              className={
                isMain
                  ? 'accountpaymentinfo__number-about accountpaymentinfo__number-about-main'
                  : 'accountpaymentinfo__number-about'
              }
            >
              <p className="accountpaymentinfo__type">{isMain ? 'Основной' : 'Сделать основной'}</p>
              <div className="accountpaymentinfo__number-zone">
                <p className="accountpaymentinfo__number"> 220220******2360</p>
                <button className="accountpaymentinfo__delete">
                  {isMain ? (
                    <IconClose className="accountpaymentinfo__delete-button_ligth" />
                  ) : (
                    <IconClose className="accountpaymentinfo__delete-button" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </li>

        <li
          className={
            isMain
              ? 'accountpaymentinfo__item accountpaymentinfo__item-main'
              : 'accountpaymentinfo__item'
          }
        >
          <div className="accountpaymentinfo__item-container">
            <div className="accountpaymentinfo__checkbox-zone">
              <div
                className={
                  isMain
                    ? 'accountpaymentinfo__logo-block accountpaymentinfo__logo-block-main'
                    : 'accountpaymentinfo__logo-block'
                }
              >
                <img
                  className="accountpaymentinfo__logo"
                  src={visa}
                  alt="Название платежной системы"
                ></img>
              </div>
              <input
                className={
                  isMain
                    ? 'accountpaymentinfo__checkbox accountpaymentinfo__checkbox-main'
                    : 'accountpaymentinfo__checkbox'
                }
                type="checkbox"
                id="input1"
                onClick={changeMain}
              ></input>
            </div>
            <div
              className={
                isMain
                  ? 'accountpaymentinfo__number-about accountpaymentinfo__number-about-main'
                  : 'accountpaymentinfo__number-about'
              }
            >
              <p className="accountpaymentinfo__type">{isMain ? 'Основной' : 'Сделать основной'}</p>
              <div className="accountpaymentinfo__number-zone">
                <p className="accountpaymentinfo__number"> 220220******2360</p>
                <button className="accountpaymentinfo__delete">
                  {isMain ? (
                    <IconClose className="accountpaymentinfo__delete-button_ligth" />
                  ) : (
                    <IconClose className="accountpaymentinfo__delete-button" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </li>

        <button className="accountpaymentinfo__add-new">
          <IconPlus className="accountpaymentinfo__button-add" />
        </button>
      </ul>
    </section>
  );
};

export default AccountPaymentInfo;
