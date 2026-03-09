import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/lib/types/domain';

type WishlistState = {
  items: Product[];
  toggle: (product: Product) => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (product) => {
        const has = get().items.some((p) => p.id === product.id);
        set({ items: has ? get().items.filter((p) => p.id !== product.id) : [...get().items, product] });
      }
    }),
    { name: 'ec-wishlist' }
  )
);
