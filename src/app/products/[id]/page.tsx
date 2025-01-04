import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '@/lib/api';
import { AddToCartButton } from '@/components/ui/add-to-cart-button';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const { id } = await params
    const productResponse = await getProduct(id);
    const product = productResponse?.product || []

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-bold">${product.price?.toFixed(2)}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-${
                      i < Math.round(product?.rating?.rate)
                        ? 'yellow-400'
                        : 'gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.rating?.count} reviews)
              </span>
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
         
            <AddToCartButton product={product} size="lg" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log('error',error)
    notFound();
  }
}