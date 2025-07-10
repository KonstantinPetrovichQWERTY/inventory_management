import { Product } from '@/types/Product';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export async function getProducts(): Promise<Product[]> {
    const url = `${API_BASE_URL}/products`;

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export async function createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to create product: ${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export async function updateProduct(id: number, productData: Product): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to update product: ${res.status} ${res.statusText} - ${errorText}`);
  }
  return res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to delete product: ${res.status} ${res.statusText} - ${errorText}`);
  }
}