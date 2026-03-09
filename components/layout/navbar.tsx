'use client';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart-store';

export const Navbar = () => {
  const count = useCartStore((s) => s.items.length);
  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4'>
        <Link href='/' className='font-bold'>ECOM</Link>
        <div className='flex gap-4 text-sm'>
          <Link href='/shop'>Shop</Link>
          <Link href='/wishlist'>Wishlist</Link>
          <Link href='/cart'>Cart ({count})</Link>
          <Link href='/account/profile'>Account</Link>
        </div>
      </nav>
    </header>
  );
};
