import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { resetUser } from '../../app/store/slices/accountSlice.js';
import { logoutUser } from '../../app/store/slices/authSlice.js';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logoutUser());
    dispatch(resetUser());
    navigate('/', { replace: true });
  }, []);
};

export default Logout;
