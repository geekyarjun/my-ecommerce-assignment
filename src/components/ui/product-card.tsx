'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

export function ProductCard({ product }: { product: Product }) {
  const [cart, setCart] = useCart();
  const isAdded = cart[product?.id] !== undefined;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setCart((prevCart) => {
      const productId = product?.id;
      if (!productId) return prevCart;

      const newProduct = {
        [productId]: {...product}
      }

      return {
        ...prevCart,
        ...newProduct
      }
    });
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="flex flex-col group relative h-full rounded-lg border bg-white p-4 transition-all hover:scale-105 hover:shadow-lg">
        <div className="relative aspect-square mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-2 flex-1 flex flex-col justify-between">
          <h3 className="font-medium line-clamp-2 text-sm">{product.title}</h3>

          <div>
            <p className="font-bold">${product.price.toFixed(2)}</p>
            <Button
              onClick={handleAddToCart}
              className={cn(
                'w-full transition-colors',
                isAdded && 'bg-green-600 hover:bg-green-700'
              )}
            >
              {isAdded ? 'Added!' : 'Add to Cart'}
            </Button>
          </div>

        </div>
      </div>
    </Link>
  );
}