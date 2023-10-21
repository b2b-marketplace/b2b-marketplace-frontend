import { useDispatch, useSelector } from 'react-redux';

import { togglePopup } from '../../app/store/slices/togglePopupSlice';

const usePopup = (popupType) => {
  const dispatch = useDispatch();
  const { [popupType]: isOpen } = useSelector((state) => state.popup.isOpen);

  const handleOpenPopup = () => {
    dispatch(togglePopup({ popupType, isOpen: true }));
  };

  const handleClosePopup = () => {
    dispatch(togglePopup({ popupType, isOpen: false }));
  };

  return {
    isOpen,
    openPopup: handleOpenPopup,
    closePopup: handleClosePopup,
  };
};

export default usePopup;
