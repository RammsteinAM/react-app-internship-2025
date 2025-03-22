import { useNavigate } from 'react-router';
import { useAuth } from './Auth/useAuth';

export default function UserInfo() {
  const { isLoggedIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return isLoggedIn ? <button onClick={handleSignOut}>Sign Out</button> : null;
}
