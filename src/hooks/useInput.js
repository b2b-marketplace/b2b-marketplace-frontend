import { useCallback, useEffect, useState } from 'react';

const useInput = (initValueParams) => {
  const [values, setValues] = useState(initValueParams);
  const [errors, setErrors] = useState(initValueParams);
  const [isNotValidForm, setIsNotValidForm] = useState(true);

  const handleChange = ({ target }) => {
    setErrors(state => ({
      ...state,
      [target.name]: target.validationMessage
    }));
    setValues(state => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    const checkFormIsNotValid = Object.values(errors).some(error => error);
    setIsNotValidForm(checkFormIsNotValid);
  }, [values, errors]);

  const resetValues = useCallback((newValues = initValueParams, newErrors = initValueParams, newNotIsVaild = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsNotValidForm(newNotIsVaild);
  }, []);

  return {values, errors, isNotValidForm, handleChange, resetValues};
};

export default useInput;
