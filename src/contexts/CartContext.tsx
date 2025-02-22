"use client";
import React, { createContext, useState } from "react";
import { type Product } from "@/types/product";

const useCartState = () =>
  useState<Record<string, Product>>({});

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
	const cart = React.useContext(CartContext);
	if (!cart) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return cart;
};


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useCartState();

	return (
		<CartContext.Provider value={[cart, setCart]}>
			{children}
		</CartContext.Provider>
	);
};