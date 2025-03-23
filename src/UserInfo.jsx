import { useNavigate } from 'react-router';
import { useAuth } from './Auth/authContext';

export default function UserInfo() {
  const { userData, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return userData ? (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div>
        Welcome, <b>{userData.name}</b>!
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  ) : null;
}
