import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product } from '@/lib/types/domain';

type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.productId === product.id);
        if (existing) return set({ items: items.map((i) => i.productId === product.id ? { ...i, quantity: i.quantity + quantity } : i) });
        set({ items: [...items, { productId: product.id, quantity, product }] });
      },
      removeItem: (productId) => set({ items: get().items.filter((i) => i.productId !== productId) }),
      updateQty: (productId, quantity) => set({ items: get().items.map((i) => i.productId === productId ? { ...i, quantity } : i) }),
      clear: () => set({ items: [] })
    }),
    { name: 'ec-cart' }
  )
);
