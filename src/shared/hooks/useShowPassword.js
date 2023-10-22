import { useState } from 'react';

const useShowPassword = (initState = false) => {
  const [isShow, setIsShow] = useState(initState);
  const handleShow = () => setIsShow(!isShow);
  const resetShow = (newState = false) => setIsShow(newState);
  return { isShow, handleShow, resetShow };
};

export default useShowPassword;
