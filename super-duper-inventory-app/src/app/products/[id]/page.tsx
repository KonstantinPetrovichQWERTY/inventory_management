import { Metadata } from 'next';
import Link from 'next/link';
import { Product } from '@/types/Product';
import DeleteProductButton from '@/components/Buttnos/DeleteButton';
import { getProduct } from '@/services/productService';

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const product: Product = await getProduct(Number(params.id));

  return {
    title: product.title,
    description: product.description.substring(0, 160) + '...',
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getProduct(Number(id));

  return (
    <main className="p-8">
      <Link href="/products" className="mb-4">
        <button className="text-bold text-white bg-blue-600 inline-flex p-3 rounded-xl">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          Back to catalog
        </button>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg border-2 border-neutral-200"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <hr className="border-t border-gray-300"></hr>

          <div className="text-gray-500  text-lg">
            <p>Category: {product.category}</p>
            <p>Rate: {product.rating.rate}</p>
            <p>Count: {product.rating.count}</p>
          </div>
          <hr className="border-t border-gray-300"></hr>

          <div className="mt-6 flex gap-4">
            <Link
              href={`/products/edit/${product.id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Edit product
            </Link>
            <DeleteProductButton productId={product.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
