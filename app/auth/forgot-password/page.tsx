'use client';
import { useState } from 'react';
import { authService } from '@/features/auth/service';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  return <form className='mx-auto max-w-sm space-y-3' onSubmit={async (e) => { e.preventDefault(); await authService.forgotPassword(email); }}><h1 className='text-3xl font-bold'>Forgot password</h1><Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><Button className='w-full'>Send reset link</Button></form>;
}
