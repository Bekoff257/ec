'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { productsService } from '@/features/products/service';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart-store';

export default function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const addItem = useCartStore((s) => s.addItem);
  const { data } = useQuery({ queryKey: ['product', slug], queryFn: () => productsService.details(slug) });
  if (!data) return <p>Loading...</p>;
  return (
    <div className='grid gap-8 md:grid-cols-2'>
      <div className='aspect-square rounded-2xl bg-muted' />
      <div>
        <h1 className='text-3xl font-bold'>{data.title}</h1>
        <p className='mt-3 text-sm text-slate-500'>{data.description}</p>
        <p className='mt-4 text-2xl font-semibold'>${data.price}</p>
        <Button className='mt-6' onClick={() => addItem(data)}>Add to cart</Button>
      </div>
    </div>
  );
}
