'use client';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store/auth-store';

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);
  return <div className='space-y-3'><h1 className='text-3xl font-bold'>Account</h1><p>{user?.name} ({user?.email})</p><Link href='/account/orders' className='text-primary'>View orders</Link></div>;
}
