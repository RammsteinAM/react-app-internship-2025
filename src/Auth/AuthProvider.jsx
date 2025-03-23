import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { userCredentials } from '../constants/login';
import bcrypt from 'bcryptjs';
import { AuthContext } from './authContext';
const LOGIN_LOCAL_STORAGE_KEY = 'myReactAppLogin';

const LOGIN_ERROR_MESSAGE = 'Invalid username or password';

function checkLogin() {
  const loggedInUserId = window.localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY);

  const user = userCredentials.find(user => user.id === loggedInUserId);

  return user ? { username: user.username, name: user.name } : null;
}

function signOut() {
  window.localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
}

function useProvideAuth() {
  const [userData, setUserData] = useState(checkLogin());
  const [, setSomething] = useState(0);
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

  const login = ({ username, password }) => {
    const user = userCredentials.find(user => user.username === username);

    if (!user) {
      return { hasError: true, message: LOGIN_ERROR_MESSAGE };
    }

    const doesPasswordMatch = bcrypt.compareSync(password, user.password);

    if (doesPasswordMatch) {
      window.localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, user.id);
      setUserData({ username: user.username, name: user.name });
      navigate('/');

      return;
    }

    return { hasError: true, message: LOGIN_ERROR_MESSAGE };
  };

  return { userData, signOut: handleSignOut, login, setSomething };
}

export default function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
