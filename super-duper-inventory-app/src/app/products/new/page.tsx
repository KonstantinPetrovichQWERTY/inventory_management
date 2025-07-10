import ProductForm from '@/components/Forms/ProductForm';

export default function NewProductPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Create new product</h1>
      <ProductForm />
    </main>
  );
}