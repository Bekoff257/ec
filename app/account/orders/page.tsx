'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@/features/orders/service';

export default function OrdersPage() {
  const { data } = useQuery({ queryKey: ['orders'], queryFn: () => ordersService.list() });
  return <div><h1 className='mb-4 text-3xl font-bold'>Order history</h1><div className='space-y-2'>{data?.map((o) => <Link key={o.id} className='block rounded border p-3' href={`/account/orders/${o.id}`}>#{o.id} • {o.status} • ${o.total}</Link>)}</div></div>;
}
