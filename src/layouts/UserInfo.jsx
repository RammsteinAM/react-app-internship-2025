import { useNavigate } from 'react-router';
import { useAuthContext } from '../context/AuthContext';

function UserInfo() {
  const { userData, signOut } = useAuthContext();
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

export default UserInfo;
