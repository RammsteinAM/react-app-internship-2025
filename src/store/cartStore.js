import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

// const useCartStore = create((set, get) => ({
//   items: [],
//   addItem: (item) => set((state) => ({ items: [...state.items, item] })),
//   removeItem: (id) =>
//     set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
//   getTotal: () => get().items.reduce((total, item) => total + item.price, 0),
// }));

const useCartStore = create(
  combine({ items: [] }, (set, get) => ({
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
    getTotal: () => get().items.reduce((total, item) => total + item.price, 0),
  })),
);

export default useCartStore;
