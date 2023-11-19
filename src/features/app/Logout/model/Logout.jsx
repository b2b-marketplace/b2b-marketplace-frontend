import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { userModel } from '../../../../entities/user';
import { logoutUser } from '../../../../app/store/slices/authSlice.js';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logoutUser());
    dispatch(userModel.resetUser());
    navigate('/', { replace: true });
  }, []);
};

export { Logout };
