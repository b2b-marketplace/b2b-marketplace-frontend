import { useState } from "react";

const useInput = (initValueParams) => {
  const [values, setValues] = useState(initValueParams);

  const handleChange = ({ target }) => {
    setValues(state => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const resetValue = (newValues = initValueParams) => {
    setValues(newValues);
  };

  return {values, handleChange, resetValue};
};

export default useInput;
