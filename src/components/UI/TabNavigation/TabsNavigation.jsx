import React, { useEffect, useRef, useState } from 'react';
import './TabsNavigation.scss';

const TabsNavigation = ({ extraClassName, tabElements }) => {
  const [selectedValue, setSelectedValue] = useState(null); // Состояние выбранной RadioButton

  const handleSwitchTab = (id) => {
    setSelectedValue(id);
  };

  return (
    <div className={`tabs-navigation ${extraClassName} || ''`}>
      <nav className="tabs-navigation__buttons">
        {tabElements.map((element, index) => {
          return (
            <button
              onClick={() => handleSwitchTab(index)}
              className={`tabs-navigation__button ${
                selectedValue === index || (element.default && !selectedValue)
                  ? 'tabs-navigation__button_active'
                  : ''
              }`}
              key={index}
            >
              {element.name}
            </button>
          );
        })}
      </nav>
      <div className="tabs-navigation__container">
        {tabElements.map((element, index) => {
          return (
            <div
              id={`#tab_${index + 1}`}
              className={`tabs-navigation__content ${
                selectedValue === index || (element.default && !selectedValue)
                  ? 'tabs-navigation__content_active'
                  : ''
              }`}
              key={index}
            >
              {element.element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsNavigation;
