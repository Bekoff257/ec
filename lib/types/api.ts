export type ApiError = { message: string; errors?: Record<string, string[]>; statusCode?: number };
export type PaginatedResponse<T> = { data: T[]; meta?: { page: number; limit: number; total: number; totalPages: number } };
