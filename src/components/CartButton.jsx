import { useNavigate } from 'react-router';
import CartIcon from './CartIcon';
import CartIconBadge from './CartIconBadge';
import './index.css';
import useCartStore from '../store/cartStore';

export default function CartButton() {
  const items = useCartStore((state) => state.items);
  const navigate = useNavigate();

  return (
    <button
      className="shopping-cart"
      type="button"
      onClick={() => {
        navigate('/cart');
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <CartIcon />
        {items.length > 0 && <CartIconBadge number={items.length} />}
      </div>
    </button>
  );
}
