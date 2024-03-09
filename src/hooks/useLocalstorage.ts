import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  // Retrieve the stored value from localStorage or use the default value
  const storedValue = window.localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : defaultValue;

  // State to hold the current value
  const [value, setValue] = useState<T>(initial);

  // Update the local storage whenever the value changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
