'use client';
import { ProductCard } from '@/components/shared/product-card';
import { useWishlistStore } from '@/lib/store/wishlist-store';

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);
  return <div><h1 className='mb-4 text-3xl font-bold'>Wishlist</h1><div className='grid grid-cols-2 gap-4 md:grid-cols-4'>{items.map((p) => <ProductCard key={p.id} product={p} />)}</div></div>;
}
