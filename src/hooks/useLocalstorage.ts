import { useState, useEffect, Dispatch, SetStateAction, useLayoutEffect } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      setValue(storedValue ? JSON.parse(storedValue) : defaultValue);
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
