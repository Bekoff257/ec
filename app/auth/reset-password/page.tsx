'use client';
import { useState } from 'react';
import { authService } from '@/features/auth/service';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ResetPasswordPage() {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  return <form className='mx-auto max-w-sm space-y-3' onSubmit={async (e) => { e.preventDefault(); await authService.resetPassword(token, password); }}><h1 className='text-3xl font-bold'>Reset password</h1><Input value={token} onChange={(e) => setToken(e.target.value)} placeholder='Reset token' /><Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='New password' type='password' /><Button className='w-full'>Reset password</Button></form>;
}
