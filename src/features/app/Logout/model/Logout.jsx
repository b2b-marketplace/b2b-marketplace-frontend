import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { logoutUser } from '../../../../app/store/slices/authSlice.js';
import { userModel } from '../../../../entities/user';

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
