import React from 'react';
import Popups from '../Popups';
import './PopupMenu.scss';
import MenuBar from '../../MenuBar/MenuBar';
import MenuClothes from './MenuClothes/MenuClothes';

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <Popups isOpen={isOpen} onClose={onClose}>
      <MenuBar />
      <MenuClothes />
    </Popups>
  );
};

export default PopupMenu;
