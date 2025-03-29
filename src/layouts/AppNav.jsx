import { Link, NavLink } from 'react-router';
import UserInfo from './UserInfo';
import CartButton from '../components/CartButton';
import { useAuthContext } from '../context/authContext';

function AppNav() {
  const { userData } = useAuthContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/artists" end>
          Artists
        </NavLink>
      </nav>
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          gap: '20px',
          marginInlineEnd: '20px',
          marginLeft: 'auto',
        }}
      >
        {!userData && (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <UserInfo />
        <CartButton />
      </div>
    </div>
  );
}

export default AppNav;
