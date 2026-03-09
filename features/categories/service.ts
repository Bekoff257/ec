import { api } from '@/lib/api/client';
import type { Category } from '@/lib/types/domain';

export const categoriesService = {
  list: async () => (await api.get<Category[]>('/categories')).data
};
