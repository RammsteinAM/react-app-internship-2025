import { useContext, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  LOGIN_ERROR_MESSAGE,
  LOGIN_LOCAL_STORAGE_KEY,
  userCredentials,
} from '../constants/login';
import { checkLogin, isPasswordCorrect, signOut } from '../utils/loginUtils';

export const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useAuthProvider() {
  const [userData, setUserData] = useState(checkLogin());
  const navigate = useNavigate();

  useEffect(() => {
    const eventListener = () => {
      setUserData(checkLogin());
    };

    window.addEventListener('storage', eventListener);

    return () => {
      window.removeEventListener('storage', eventListener);
    };
  }, []);

  const handleSignOut = () => {
    setUserData(false);
    signOut();
  };

  const signIn = ({ username, password }) => {
    const user = userCredentials.find((user) => user.username === username);

    if (!user) {
      return { hasError: true, message: LOGIN_ERROR_MESSAGE };
    }

    if (isPasswordCorrect(password, user.password)) {
      window.localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, user.id);
      setUserData({ username: user.username, name: user.name });
      navigate('/');

      return;
    }

    return { hasError: true, message: LOGIN_ERROR_MESSAGE };
  };

  return { userData, signIn, signOut: handleSignOut };
}
