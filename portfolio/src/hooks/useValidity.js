import { useState, useEffect } from 'react';

const useValidity = (initialValidity) => {
  const [isValid, setIsValid] = useState(initialValidity);

  const validate = (event) => {
    if (event.type === 'invalid') {
      event.preventDefault();
    }
    setIsValid(event.target.validity.valid);
  };

  return [isValid, validate];
};

export default useValidity;