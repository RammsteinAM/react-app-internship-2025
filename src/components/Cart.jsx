import useCartStore from '../store/cartStore';

function Cart() {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.totalPrice());

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 15rem' }}
          >
            <span>{item.name}</span>
            <span>
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: 'EUR',
              }).format(item.price)}
            </span>
            <button onClick={() => useCartStore.getState().removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default Cart;
