import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { accountModel } from '../../entities/account';
import { logoutUser } from '../../app/store/slices/authSlice.js';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logoutUser());
    dispatch(accountModel.resetUser());
    navigate('/', { replace: true });
  }, []);
};

export default Logout;
