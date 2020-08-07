import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  console.log(key, initialValue);
  const [storedValue, setStoredValue] = useState(() => {
    const i = window.localStorage.getItem(key);
    return i ? JSON.parse(i) : initialValue;
  });
  const setValue = (value) => {
    console.log(value);
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
