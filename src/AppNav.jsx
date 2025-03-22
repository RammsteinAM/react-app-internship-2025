import { Link, NavLink } from 'react-router';
import UserInfo from './UserInfo';
// import './App.css';

function AppNav() {
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
          alignSelf: 'flex-start',
          display: 'flex',
          gap: '20px',
          marginLeft: 'auto',
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
        <UserInfo />
      </div>
    </div>
  );
}

export default AppNav;
