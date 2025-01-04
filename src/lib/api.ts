import { API_URL, PRODUCTS_PER_PAGE } from "@/constants/config";

export async function getProducts(page = 1, limit = PRODUCTS_PER_PAGE) {
  try {
    const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`, {
      next: {
        revalidate: 3600 // Revalidate every hour
      }
    });
    
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
    
  } catch {
    return {}
  }
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      next: {
        revalidate: 3600 // Revalidate every hour
      }
    });
    
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
    
  } catch  {
    return {}
  }
}