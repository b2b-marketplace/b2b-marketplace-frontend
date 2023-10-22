import React, { useRef, useEffect } from 'react';

import IconClose from '../UI/Icon/Icon_close';

import './Popups.scss';

const Popups = ({ isOpen, onClose, children }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="popups">
      <div className="popups__content" ref={popupRef}>
        {children}
        <button className="popups__button" type="button" onClick={onClose}>
          <IconClose />
        </button>
      </div>
    </div>
  );
};

export default Popups;
