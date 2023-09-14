import { useState } from "react";

const useShowPassword = (initState = false) => {
  const [isShow, setIsShow] = useState(initState);
  const handleShow = () => setIsShow(!isShow);
  return { isShow, handleShow };
};

export default useShowPassword;
