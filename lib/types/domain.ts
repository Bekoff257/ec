export type Product = { id: string; slug: string; title: string; description?: string; price: number; oldPrice?: number; image?: string; rating?: number; stock?: number; categoryId?: string; brand?: string; tags?: string[] };
export type Category = { id: string; name: string; slug: string };
export type User = { id: string; name: string; email: string; phone?: string };
export type CartItem = { productId: string; quantity: number; product?: Product };
export type Order = { id: string; status: string; total: number; createdAt: string; items: CartItem[] };
export type Review = { id: string; rating: number; comment: string; createdAt: string; userName: string };
