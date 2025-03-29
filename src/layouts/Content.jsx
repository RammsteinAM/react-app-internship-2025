import { Route, Routes } from 'react-router';
import AuthLayout from './AuthLayout';
import Login from '../pages/Login';
import Artists from '../pages/Artists';
import Artist from '../pages/Artist';
import Cart from '../pages/Cart';

function Content() {
  return (
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
  );
}

export default Content;

function Home() {
  return <div>HOME</div>;
}
function About() {
  return <div>ABOUT</div>;
}

function Register() {
  return <div>Coming soon</div>;
}
