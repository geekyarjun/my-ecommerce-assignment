"use client";

import { useCart } from "@/contexts/CartContext";
import { Button, ButtonProps } from "./button";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
    product: Product
}

export const AddToCartButton = ({ product, className, ...rest }: Props) => {
  const [cart, setCart] = useCart();
  const isAdded = cart[product?.id] !== undefined;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setCart((prevCart) => {
      const productId = product?.id;
      if (!productId) return prevCart;

      const newProduct = {
        [productId]: { ...product },
      };

      return {
        ...prevCart,
        ...newProduct,
      };
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={cn(
        "w-full transition-colors",
        className,
        isAdded && "bg-green-600 hover:bg-green-700"
      )}
      {...rest}
    >
      {isAdded ? "Added!" : "Add to Cart"}
    </Button>
  );
};
