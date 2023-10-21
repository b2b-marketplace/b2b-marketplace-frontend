import { useDispatch, useSelector } from 'react-redux';

import { setError, resetError } from '../../app/store/slices/errorSlice';

const useError = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  const showError = (errorText) => {
    dispatch(setError(errorText));
  };

  const clearError = () => {
    dispatch(resetError());
  };
  return { error, showError, clearError };
};

export default useError;
