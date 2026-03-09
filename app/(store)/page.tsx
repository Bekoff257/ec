import Link from 'next/link';
import { ProductCard } from '@/components/shared/product-card';
import { productsService } from '@/features/products/service';

export default async function HomePage() {
  const products = await productsService.list({ page: 1, limit: 8 }).then((r) => r.data).catch(() => []);
  return (
    <div className='space-y-10'>
      <section className='rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white'>
        <h1 className='text-4xl font-bold'>Premium marketplace experience</h1>
        <p className='mt-3 max-w-xl'>Discover curated products. Submit your order request and our team will call you back.</p>
        <Link href='/shop' className='mt-6 inline-block rounded-xl bg-white px-4 py-2 font-semibold text-blue-600'>Shop now</Link>
      </section>
      <section>
        <h2 className='mb-4 text-2xl font-semibold'>Featured products</h2>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
}
