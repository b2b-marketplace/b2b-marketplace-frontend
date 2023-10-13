import React, { useEffect } from 'react';
import './OrderFormReceiver.scss';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../../shared/store/slices/accountSlice';

const OrderFormReceiver = () => {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.account);
  // const { auth_token } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isFetched) {
  //     dispatch(getUser(auth_token));
  //   }
  // }, [isFetched]);
  return (
    <div className="order-form-receiver">
      <div className="order-form-receiver__fio">Афанасьев Александр Васильевич</div>
      <div className="order-form-receiver__phone">+ 7 999 999 00 00</div>
      <div className="order-form-receiver__email">mail@mail.ru</div>
    </div>
  );
};

export default OrderFormReceiver;
