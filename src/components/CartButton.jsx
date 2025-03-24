import { useNavigate } from 'react-router';
import { useAuth } from '../Auth/authContext';
import CartIcon from './CartIcon';
import CartIconBadge from './CartIconBadge';
import './index.css';
import useCartStore from '../store/cartStore';

export default function CartButton() {
  const { userData, signOut } = useAuth();
  const items = useCartStore(state => state.items);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

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
