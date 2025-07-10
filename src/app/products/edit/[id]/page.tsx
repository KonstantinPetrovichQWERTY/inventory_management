import ProductForm from '@/components/Forms/ProductForm';
import { getProduct } from '@/services/productService';
import { Product } from '@/types/Product';

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product: Product = await getProduct(Number(id));

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit product:</h1>
      <ProductForm initialData={product} productId={product.id} />
    </main>
  );
}
