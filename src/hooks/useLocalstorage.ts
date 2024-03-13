import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageReturnType<T> {
  // Function to retrieve initial state from localStorage or use defaultValue
  const getInitialValue = (): T => {
    // If localStorage is not available (e.g., server-side rendering), return defaultValue
    if (typeof window === 'undefined') return defaultValue;
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };

  // Initialize state with the value retrieved from localStorage or defaultValue
  const [value, setValue] = useState<T>(getInitialValue);

  // Effect to update localStorage whenever 'value' changes
  useEffect(() => {
    // Only execute on the client-side
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]); // Dependency array includes 'key' and 'value'

  return [value, setValue];
}
