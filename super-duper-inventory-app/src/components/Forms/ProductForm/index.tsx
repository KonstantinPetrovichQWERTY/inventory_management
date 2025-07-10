'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ProductFormInputs, productSchema } from '@/schemas/productSchema';
import { createProduct, updateProduct } from '@/services/productService';
import { ProductFormProps } from '@/types/ProductFormProps';


export default function ProductForm({ initialData, productId }: ProductFormProps) {
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: ProductFormInputs) => {
    try {
      if (productId) {
        await updateProduct(productId, {"id": productId, ...data});
      } else {
        await createProduct(data);
      }

      router.push('/products');
      router.refresh();
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto p-6 border rounded-lg shadow-lg">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          id="title"
          {...register('title')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
        <input
          type="number"
          id="price"
          step="0.01"
          {...register('price', { valueAsNumber: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          id="description"
          {...register('description')}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
        <input
          type="text"
          id="category"
          {...register('category')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL:</label>
        <input
          type="url"
          id="image"
          {...register('image')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
      </div>

      <div>
        <label htmlFor="rating.rate" className="block text-sm font-medium text-gray-700">Rate:</label>
        <input
          type="number"
          id="rating.rate"
          step="0.1"
          {...register('rating.rate', { valueAsNumber: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.rating?.rate && <p className="text-red-500 text-xs mt-1">{errors.rating.rate.message}</p>}
      </div>

      <div>
        <label htmlFor="count" className="block text-sm font-medium text-gray-700">Count:</label>
        <input
          type="number"
          id="rating.count"
          step="1"
          {...register('rating.count', { valueAsNumber: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.rating?.count && <p className="text-red-500 text-xs mt-1">{errors.rating.count.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? 'Creating...' : (productId ? 'Edit product' : 'Create product')}
      </button>
    </form>
  );
}