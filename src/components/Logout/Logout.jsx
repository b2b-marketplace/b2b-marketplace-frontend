import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slices/authSlice.js';
import { resetUser } from '../../store/slices/accountSlice.js';
import { useNavigate } from 'react-router';

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
