import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/slices/authSlice.js';
import { useNavigate } from 'react-router';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logoutUser());
    navigate('/', { replace: true });
  }, []);
};

export default Logout;
