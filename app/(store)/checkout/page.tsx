'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '@/lib/validations/checkout';
import { z } from 'zod';
import { useCartStore } from '@/lib/store/cart-store';
import { ordersService } from '@/features/orders/service';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Form = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clear } = useCartStore();
  const { register, handleSubmit } = useForm<Form>({ resolver: zodResolver(checkoutSchema) });

  const onSubmit = async (values: Form) => {
    await ordersService.create({ ...values, items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })) });
    clear();
    router.push('/checkout/success');
  };

  return (
    <form className='mx-auto max-w-xl space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-3xl font-bold'>Confirm your order request</h1>
      <p className='text-sm text-slate-500'>No online payment. Our admin will call you back after submission.</p>
      <Input placeholder='Phone number' {...register('phone')} />
      <Input placeholder='Delivery address' {...register('address')} />
      <Input placeholder='Delivery notes (optional)' {...register('notes')} />
      <Input placeholder='Preferred callback time (optional)' {...register('callbackTime')} />
      <Button type='submit' className='w-full'>Submit order request</Button>
    </form>
  );
}
