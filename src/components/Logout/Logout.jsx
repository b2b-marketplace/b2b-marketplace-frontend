import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { logoutUser } from '../../app/store/slices/authSlice.js';
import { resetUser } from '../../app/store/slices/accountSlice.js';

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
