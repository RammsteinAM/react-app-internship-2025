import { NavLink, Outlet, Route, Routes } from 'react-router';
import AppNav from './AppNav';
import AuthLayout from './AuthLayout';
import Login from './components/Login';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <AppNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />

        <Route path="artists">
          <Route index element={<Artists />} />
          <Route path=":artist" element={<Artist />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

function Home() {
  return <div>HOME</div>;
}
function About() {
  return <div>ABOUT</div>;
}

function Register() {
  return <div>Coming soon</div>;
}
