'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { registerSchema } from '@/lib/validations/auth';
import { authService } from '@/features/auth/service';
import { useAuthStore } from '@/lib/store/auth-store';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Form = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();
  const { register, handleSubmit } = useForm<Form>({ resolver: zodResolver(registerSchema) });
  const onSubmit = async (values: Form) => {
    const data = await authService.register(values);
    setAuth(data.accessToken, data.user);
    router.push('/account/profile');
  };
  return <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-sm space-y-3'><h1 className='text-3xl font-bold'>Create account</h1><Input placeholder='Name' {...register('name')} /><Input placeholder='Email' {...register('email')} /><Input placeholder='Phone' {...register('phone')} /><Input placeholder='Password' type='password' {...register('password')} /><Button className='w-full'>Register</Button></form>;
}
