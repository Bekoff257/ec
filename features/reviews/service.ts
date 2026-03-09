import { api } from '@/lib/api/client';
import type { PaginatedResponse } from '@/lib/types/api';
import type { Review } from '@/lib/types/domain';

export const reviewsService = {
  list: async (productId: string, page = 1) => (await api.get<PaginatedResponse<Review>>(`/products/${productId}/reviews`, { params: { page } })).data,
  create: async (productId: string, rating: number, comment: string) => (await api.post(`/products/${productId}/reviews`, { rating, comment })).data
};
