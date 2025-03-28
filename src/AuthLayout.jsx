import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuth } from './context/authContext';

function AuthLayout() {
  const { userData } = useAuth();

  return <>{userData ? <Redirection /> : <Outlet />}</>;
}

export default AuthLayout;

function Redirection() {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();
  const { userData } = useAuth()

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);

      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [seconds, navigate]);

  const secondsLeftString = new Intl.RelativeTimeFormat('en').format(
    seconds,
    'second',
  );

  return seconds > 0 ? (
    <div>
      Dear <b>{userData.name}</b>, you are already logged in. You'll be redirected {secondsLeftString}.
    </div>
  ) : null;
}
