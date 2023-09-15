import { useState } from "react";

const useInput = (initValueParams) => {
  const [values, setValues] = useState(initValueParams);

  const handleChange = ({ target }) => {
    setValues(state => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const resetValues = (newValues = initValueParams) => {
    setValues(newValues);
  };

  return {values, handleChange, resetValues};
};

export default useInput;
