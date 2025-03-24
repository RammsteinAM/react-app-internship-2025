import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
  removeItem: id =>
    set(state => ({ items: state.items.filter(item => item.id !== id) })),
  totalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
}));

export default useCartStore;
