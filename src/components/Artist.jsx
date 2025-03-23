/* eslint-disable no-unused-vars */
import { useParams } from 'react-router';
import { artists } from '../constants/artists';
import { useAuth } from '../Auth/authContext';

function Artist() {
  let params = useParams();
  const { setSomething } = useAuth();
  // let [searchParams] = useSearchParams();
  // const location = useLocation();
  // console.log('🫠 > Artist > location:', location);
  // console.log('🫠 > Artist > searchParams:', searchParams.get('kekw'));

  const artist = artists.find(artist => artist.link === params.artist);

  return (
    <>
      <h3>{artist.name} Albums:</h3>
      <ol>
        {artist.albums.map(album => {
          return <li key={album}>{album}</li>;
        })}
      </ol>
      {/* <button
        onClick={() => {
          setSomething(Math.random());
        }}
      >
        Change something in the context
      </button> */}
    </>
  );
}

export default Artist;
