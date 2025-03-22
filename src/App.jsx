import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router';
// import './App.css';
import AppNav from './AppNav';
import AuthLayout from './AuthLayout';
import { useAuth } from './Auth/useAuth';
import { artists } from './constants/artists';

function App() {
  return (
    <>
      <AppNav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

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

function Login() {
  const { login } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Register() {
  return <div>Coming soon</div>;
}

function Artists() {
  return (
    <>
      <h3>Artists</h3>
      <ul>
        {artists.map(city => {
          return (
            <li key={city.link}>
              <NavLink to={`./${city.link}`}>{city.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
// function City({ name, link }) {
//   return <NavLink to={link}>Welcome to {name}</NavLink>;
// }
function Artist() {
  let params = useParams();
  let [searchParams] = useSearchParams();
  const location = useLocation();
  console.log('🫠 > Artist > location:', location);
  console.log('🫠 > Artist > searchParams:', searchParams.get('kekw'));

  const artist = artists.find(artist => artist.link === params.artist);
  return (
    <>
      <h3>{artist.name} Albums:</h3>
      <ol>
        {artist.albums.map(album => {
          return <li key={album}>{album}</li>;
        })}
      </ol>
    </>
  );
}
// function Home() {
//   return <div>HOME</div>;
// }

// function MyComponent() {
//   const location = useLocation();

//   useEffect(() => {
//     // Do something based on location change
//   }, [location]);

//   return <>...</>;
// }
