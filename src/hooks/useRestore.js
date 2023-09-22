import { useDispatch, useSelector } from 'react-redux';
import { resetState, setState } from '../store/slices/restoreSlice';

const useRestore = (restoreType) => {
  const dispatch = useDispatch();
  const { [restoreType]: restoreValue} = useSelector((state) => state.restore);
  
  const setType = (newState) => {
    dispatch(setState({ restoreType, newState }));
  };

  const resetType = (state) => {
    dispatch(resetState());
  };


  return { restoreValue, setType, resetType };
};

export default useRestore;
