import React, { useEffect, useRef, useState } from 'react';
import './TabsNavigation.scss';

const TabsNavigation = ({ extraClassName }) => {
  const aaaa = useRef();

  useEffect(() => {
    console.log(aaaa.current.value);
  }, []);

  return (
    <div className={`tabs-navigation ${extraClassName} || ''`}>
      <nav className="tabs-navigation__links">
        <a href="#tab_01" className="tabs-navigation__link tabs-navigation__link_active">
          Самовывоз со склада
        </a>
        <a href="#tab_02" className="tabs-navigation__link">
          Доставка
        </a>
      </nav>

      <div className="tabs-navigation__container">
        <div id="#tab_01" className="tabs-navigation__content">
          <div className="tabs-navigation__warehouse-addresses">
            <div className="tabs-navigation__warehouse-addresses-info">
              <h3 className="tabs-navigation__warehouse-addresses-title">Склады</h3>
              <ul className="tabs-navigation__warehouse-addresses-list">
                <li className="tabs-navigation__warehouse-addresses-item">
                  <div className="tabs-navigation__delivery-service"></div>
                  <input
                    onChange={(e) => e.target.value}
                    value="asdasdasd"
                    ref={aaaa}
                    type="text"
                  />
                </li>
              </ul>
            </div>
            <div className="tabs-navigation__warehouse-addresses-map"></div>
          </div>
        </div>
        <div id="#tab_02" className="tabs-navigation__content"></div>
      </div>
    </div>
  );
};

export default TabsNavigation;
