import { ProductCard } from '@/components/shared/product-card';
import { productsService } from '@/features/products/service';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const res = await productsService.list({ q: q ?? '' }).catch(() => ({ data: [] }));
  return <div><h1 className='mb-4 text-3xl font-bold'>Search results</h1><div className='grid grid-cols-2 gap-4 md:grid-cols-4'>{res.data.map((p) => <ProductCard key={p.id} product={p} />)}</div></div>;
}
