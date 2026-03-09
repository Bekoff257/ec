import { api } from '@/lib/api/client';
import type { PaginatedResponse } from '@/lib/types/api';
import type { Product } from '@/lib/types/domain';

export const productsService = {
  list: async (params?: Record<string, string | number>) => (await api.get<PaginatedResponse<Product>>('/products', { params })).data,
  details: async (slug: string) => (await api.get<Product>(`/products/${slug}`)).data,
  related: async (slug: string) => (await api.get<Product[]>(`/products/${slug}/related`)).data
};
