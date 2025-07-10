'use client';

import { deleteProduct } from '@/services/productService';
import { ProductIdProps } from '@/types/ProductIdProps';
import { useRouter } from 'next/navigation';


export default function DeleteProductButton({productId}: ProductIdProps) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('Are you sure?')) {
      return;
    }
    try {
      await deleteProduct(productId)
      alert('Product is deleted!');

      router.push('/products');
      router.refresh();
    } catch (error) {
      alert(`Something goes wrong: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}