import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OrderPopup.scss';
import usePopup from '../../../hooks/usePopup';
import Popup from '../../AuthPopup/Popup';
import RegistrationOpportunity from '../../AuthPopup/CompleteRegistrationPopup/RegistrationOpportunity/RegistrationOpportunity';
import IconComplele from '../../UI/Icon/IconComplele';
import Icon_fire from '../../UI/Icon/Icon_fire';
import { Link } from 'react-router-dom';

const OrderPopup = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading, error } = useSelector((state) => state.auth);
  const { isOpen, closePopup } = usePopup('order');

  useEffect(() => {
    if (!isOpen) return;
    if (!isLoggedIn) closePopup();
  }, [isLoggedIn]);

  return (
    <Popup
      isOpen={isOpen}
      onClose={closePopup}
      title={
        <>
          <Icon_fire className="order-popup__icon" /> Заказ успешно создан!
        </>
      }
      titleClassMode="order-popup__title"
    >
      <div className="order-popup">
        Можете перейти в{' '}
        <Link className="order-popup__link" to="/account/profile">
          {' '}
          Личный Кабинет{' '}
        </Link>{' '}
        для его просмотра
      </div>
    </Popup>
  );
};

export default OrderPopup;
