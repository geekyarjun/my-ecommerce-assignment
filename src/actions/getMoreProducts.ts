"use server";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

export const getMoreProducts = async (
  page: number
): Promise<Product[]> => {
  try {
    const response = await getProducts(page);
    if (response.status !== 'SUCCESS') {
      throw new Error(`Failed to fetch products`);
    }

    const products = response.products as Product[];
    
    return products;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`An error occurred: ${error}`);
  }
};