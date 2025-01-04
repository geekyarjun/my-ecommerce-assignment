"use client";

import { getMoreProducts } from "@/actions/getMoreProducts";
import { ProductCard } from "@/components/ui/product-card";
import { Product } from "@/types/product";
import { useState } from "react";
import { Button } from "./button";

const PRODUCT_LENGTH_ZERO = 0;
const INITIAL_PAGE_INDEX = 1;
export function ProductGrid({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [page, setPage] = useState(INITIAL_PAGE_INDEX);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreProducts = async () => {
    try {
      if (hasMoreData) {
        const products = await getMoreProducts(page+1);

        if (products.length === PRODUCT_LENGTH_ZERO) {
          setHasMoreData(false);
        }

        setProducts((prevProducts) => [...prevProducts, ...products]);
        setPage((prevPage) => prevPage + INITIAL_PAGE_INDEX);
      }
    } catch {}
  };

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
      {/* Load more button - For demo implemented a simple pagination */}
      <div className="mt-5 text-center">
        {hasMoreData ? (
          <Button className="" onClick={loadMoreProducts}>
            Load more products
          </Button>
        ) : (
          <p className="...">No more products to load</p>
        )}
      </div>
    </>
  );
}
