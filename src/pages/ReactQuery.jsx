import useCartStore from '../store/cartStore';
import { formatPrice } from '../utils/priceFormatter';

function ReactQuery() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 15rem' }}
          >
            <span>{item.name}</span>
            <span>{formatPrice(item.price)}</span>
            <button onClick={() => useCartStore.getState().removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: {formatPrice(total)}</p>
    </div>
  );
}

export default ReactQuery;
