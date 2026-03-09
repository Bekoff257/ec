import { api } from '@/lib/api/client';
import type { Order } from '@/lib/types/domain';

export type CreateOrderRequest = {
  phone: string;
  address: string;
  notes?: string;
  callbackTime?: string;
  items: { productId: string; quantity: number }[];
};

export const ordersService = {
  create: async (body: CreateOrderRequest) => (await api.post<Order>('/orders', body)).data,
  list: async () => (await api.get<Order[]>('/orders')).data,
  details: async (id: string) => (await api.get<Order>(`/orders/${id}`)).data
};
