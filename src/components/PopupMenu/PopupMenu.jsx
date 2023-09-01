import React, { useRef, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import MenuClothes from './MenuClothes/MenuClothes';
import './PopupMenu.scss';

const PopupMenu = ({ onClose }) => {
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
    <div className="popup-menu" >
      <div className="popup-menu__content" ref={popupRef}>
        <MenuBar />
        <MenuClothes />
      </div>
    </div>
  );
};

export default PopupMenu;
