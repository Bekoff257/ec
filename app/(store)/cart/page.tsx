'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart-store';

export default function CartPage() {
  const { items, removeItem, updateQty } = useCartStore();
  const total = items.reduce((a, i) => a + (i.product?.price ?? 0) * i.quantity, 0);
  return (
    <div>
      <h1 className='mb-6 text-3xl font-bold'>Cart</h1>
      <div className='space-y-3'>
        {items.map((item) => (
          <div key={item.productId} className='flex items-center justify-between rounded-xl border p-4'>
            <div>{item.product?.title}</div>
            <input type='number' className='w-20 rounded border px-2 py-1' value={item.quantity} onChange={(e) => updateQty(item.productId, Number(e.target.value))} />
            <Button onClick={() => removeItem(item.productId)}>Remove</Button>
          </div>
        ))}
      </div>
      <p className='mt-4 font-semibold'>Total: ${total.toFixed(2)}</p>
      <Link href='/checkout' className='mt-4 inline-block rounded-xl bg-primary px-4 py-2 text-white'>Proceed to order request</Link>
    </div>
  );
}
