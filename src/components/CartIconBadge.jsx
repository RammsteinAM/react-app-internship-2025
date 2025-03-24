function CartIconBadge({ number }) {
  return (
    <span
      style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        background: 'red',
        color: 'white',
        borderRadius: '2rem',
        padding: '2px 6px',
        fontSize: '12px',
      }}
    >
      {number}
    </span>
  );
}

export default CartIconBadge;
