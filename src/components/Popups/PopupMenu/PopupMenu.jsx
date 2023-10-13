import React from 'react';

import MenuClothes from './MenuClothes/MenuClothes';
import MenuBar from '../../MenuBar/MenuBar';
import Popups from '../Popups';

import './PopupMenu.scss';

const PopupMenu = ({ isOpen, onClose }) => {
  return (
    <Popups isOpen={isOpen} onClose={onClose}>
      <MenuBar />
      <MenuClothes />
    </Popups>
  );
};

export default PopupMenu;
