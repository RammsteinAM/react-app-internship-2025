import { useParams } from 'react-router';
import { artists } from '../constants/artists';
import { useAuth } from '../context/authContext';
import useCartStore from '../store/cartStore';

function Artist() {
  let params = useParams();
  const items = useCartStore(state => state.items);
  const addItem = useCartStore(state => state.addItem);

  const { setSomething } = useAuth();

  const artist = artists.find(artist => artist.link === params.artist);

  const handleAddToCart = item => {
    addItem(item);
  };

  return (
    <>
      <h3>{artist.name} Albums:</h3>
      <ol>
        {artist.albums.map(album => {
          return (
            <li key={album.id} className="album-list-item">
              <div className="album-list-item-row">
                <span>{album.name}</span>
                <span
                  style={{
                    marginInlineStart: '1rem',
                    fontSize: '1rem',
                    color: '#aaaaaa',
                  }}
                >
                  {new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(album.price)}
                </span>
                <span
                  style={{
                    marginInlineStart: '1rem',
                    fontSize: '0.8rem',
                    color: '#aaaaaa',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleAddToCart(album)}
                    disabled={items.find(item => item.id === album.id)}
                  >
                    🛒 Add to cart
                  </button>
                </span>
              </div>
            </li>
          );
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
