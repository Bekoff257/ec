import { ProductCard } from '@/components/shared/product-card';
import { productsService } from '@/features/products/service';

export default async function ShopPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const res = await productsService.list(params).catch(() => ({ data: [] }));
  return (
    <div>
      <h1 className='mb-6 text-3xl font-bold'>Shop</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>{res.data.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </div>
  );
}
