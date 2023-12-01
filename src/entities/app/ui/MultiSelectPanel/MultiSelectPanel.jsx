import React from 'react';

import IconTrash from '../../../../components/UI/Icon/Icon_trash';
import { DeleteMultipleFavoriteButton } from '../../../../features/product';
import { Checkbox } from '../../../../shared/ui/Checkbox';

import './MultiSelectPanel.scss';

const MultiSelectPanel = ({
  isChecked,
  isSelectItems,
  onSetIsSelectItems,
  handleClickSelectAll,
}) => {
  return (
    <div className="multi-select-panel">
      <Checkbox onClick={handleClickSelectAll} checked={isChecked} className="basket__checkbox">
        <span className="multi-select-panel__checkbox-text">Выбрать все</span>
      </Checkbox>
      {isChecked || isSelectItems.length ? (
        <DeleteMultipleFavoriteButton
          onSetIsSelectItems={onSetIsSelectItems}
          items={isSelectItems}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export { MultiSelectPanel };
