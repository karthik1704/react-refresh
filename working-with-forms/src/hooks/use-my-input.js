import { useState } from "react";

const useMyInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setValue("");
  };

  return {
    value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useMyInput;
