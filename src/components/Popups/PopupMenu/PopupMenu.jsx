import React from 'react';

import Popups from '../Popups';
import MenuBar from '../../MenuBar/MenuBar';

import MenuClothes from './MenuClothes/MenuClothes';

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
