import { useState, Dispatch, SetStateAction } from 'react';
import Cookies from 'js-cookie';

type UseCookieReturnType<T> = [T, Dispatch<SetStateAction<T>>, () => void];

const useCookies = <T>(cookieName: string, initialValue: T, expires?: number): UseCookieReturnType<T> => {
  // Get the initial value from the cookie or use the provided default value
  const getInitialValue = (): T => {
    const cookieValue = Cookies.get(cookieName);
    return cookieValue ? (JSON.parse(cookieValue) as T) : initialValue;
  };

  const [cookie, setCookie] = useState<T>(getInitialValue);

  // Function to update the cookie value
  const updateCookie = (newValue: SetStateAction<T>) => {
    // Update the state
    setCookie((prevValue) => {
      const updatedValue = typeof newValue === 'function' ? (newValue as (prevState: T) => T)(prevValue) : newValue;
      // Update the actual cookie
      Cookies.set(cookieName, JSON.stringify(updatedValue), { expires: expires || 365 }); // Set the expiration date as needed
      return updatedValue;
    });
  };

  // Function to remove the cookie
  const removeCookie = () => {
    // Remove from state
    setCookie(initialValue);
    // Remove the actual cookie
    Cookies.remove(cookieName);
  };

  return [cookie, updateCookie, removeCookie];
};

export default useCookies;
