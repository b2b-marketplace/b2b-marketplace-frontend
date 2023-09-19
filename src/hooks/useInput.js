import { useCallback, useEffect, useState } from 'react';
import { isEmail } from 'validator';

const useInput = (initValueParams) => {
  const [values, setValues] = useState(initValueParams);
  const [errors, setErrors] = useState(initValueParams);
  const [isNotValidForm, setIsNotValidForm] = useState(true);

  const initDirtyStates = Object.keys(initValueParams).reduce((states, inputName) => {
    states[inputName] = false;
    return states;
  }, {});

  const [isDirtyInputs, setIsDirtyInputs] = useState(initDirtyStates);

  const checkValidity = (input) => {
    if (input.type === 'email') {
      return isEmail(input.value);
    }
    
    return true;
  };
  const getCustomMessage = (input) => {

    return '/';
  };

  const handleChange = ({ target: input }) => {
    if (!isDirtyInputs[input.name]) {
      setIsDirtyInputs(state => ({
        ...state,
        [input.name]: true,
      }));
    }
    setErrors(state => ({
      ...state,
      [input.name]: input.validationMessage
    }));
    setValues(state => ({
      ...state,
      [input.name]: input.type === 'checkbox' ? input.checked : input.value,
    }));
  };

  useEffect(() => {
    const checkFormIsNotValid = Object.values(errors).some(error => error);
    const checkFormIsNotFullFilled = Object.values(values).some(value => typeof value === 'string' && !value.trim() || !value);
    setIsNotValidForm(checkFormIsNotFullFilled || checkFormIsNotValid);
  }, [values, errors, isDirtyInputs]);

  const resetValues = useCallback((newValues = initValueParams, newErrors = initValueParams, newNotIsVaild = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsNotValidForm(newNotIsVaild);
    setIsDirtyInputs(initDirtyStates);
  }, []);

  return { values, errors, isNotValidForm, isDirtyInputs, handleChange, resetValues };
};

export default useInput;
