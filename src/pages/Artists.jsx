import { NavLink } from 'react-router';
import { artists } from '../constants/artists';

function Artists() {
  return (
    <>
      <h3>Artists</h3>
      <ul>
        {artists.map((city) => {
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

export default Artists;
