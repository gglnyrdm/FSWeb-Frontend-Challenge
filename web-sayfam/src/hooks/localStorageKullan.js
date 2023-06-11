import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(storedValue);
    localStorage.setItem(key, stringifiedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
