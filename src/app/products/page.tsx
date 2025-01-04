import { Suspense } from 'react';
import { getProducts } from '@/lib/api';
import { ProductGrid } from '@/components/ui/product-grid';
import { ProductGridSkeleton } from '@/components/ui/product-skeleton';
import { wait } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  await wait(1000)
  const productsResponse = await getProducts();
  const products = productsResponse?.products || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid initialProducts={products} />
      </Suspense>
    </div>
  );
}