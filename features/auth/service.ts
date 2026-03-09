import { api } from '@/lib/api/client';
import type { User } from '@/lib/types/domain';

export type LoginBody = { email: string; password: string };
export type RegisterBody = { name: string; email: string; password: string; phone?: string };

type AuthResponse = { accessToken: string; user: User };

export const authService = {
  login: async (body: LoginBody) => (await api.post<AuthResponse>('/auth/login', body)).data,
  register: async (body: RegisterBody) => (await api.post<AuthResponse>('/auth/register', body)).data,
  forgotPassword: async (email: string) => (await api.post('/auth/forgot-password', { email })).data,
  resetPassword: async (token: string, password: string) => (await api.post('/auth/reset-password', { token, password })).data,
  me: async () => (await api.get<User>('/users/me')).data
};
