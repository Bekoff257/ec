'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types/domain';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart-store';

export const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <motion.div whileHover={{ y: -4 }} className='rounded-2xl border border-border bg-white p-4 shadow-sm dark:bg-slate-900'>
      <Link href={`/products/${product.slug}`} className='block'>
        <div className='aspect-square rounded-xl bg-muted' />
        <h3 className='mt-3 line-clamp-1 font-semibold'>{product.title}</h3>
      </Link>
      <p className='mt-1 text-sm text-slate-500'>${product.price}</p>
      <Button className='mt-3 w-full' onClick={() => addItem(product)}>Add to Cart</Button>
    </motion.div>
  );
};
