'use client';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@/features/orders/service';

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({ queryKey: ['order', id], queryFn: () => ordersService.details(id) });
  return <div><h1 className='text-3xl font-bold'>Order #{id}</h1><p className='mt-2'>Status: {data?.status}</p></div>;
}
