import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router';
const LOGIN_LOCAL_STORAGE_KEY = 'myReactAppLogin';

function checkLogin() {
  const loginInfo = window.localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY);

  return loginInfo === '1234';
}

function signOut() {
  window.localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
}

function useProvideAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkLogin());
  const navigate = useNavigate();

  useEffect(() => {
    const eventListener = () => {
      setIsLoggedIn(checkLogin());
    };

    window.addEventListener('storage', eventListener);

    return () => {
      window.removeEventListener('storage', eventListener);
    };
  }, []);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    signOut();
  };

  const login = () => {
    window.localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, '1234');
    setIsLoggedIn(true);
    navigate('/');
  };

  return { isLoggedIn, signOut: handleSignOut, login };
}

export default function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// function MyComponent() {
//   const navigate = useNavigate();

//   const someAction = () => {
//     someAsyncFcuntion().then(() => {
//       navigate('/');
//     });
//   };

//   return <>...</>;
// }
