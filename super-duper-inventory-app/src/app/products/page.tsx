import { getProducts } from '@/services/productService';
import { Product } from '@/types/Product';
import Link from 'next/link';


export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-6">Products list</h1>
        <Link href="/products/new" className="bg-indigo-800 text-white px-4 py-2 rounded-xl mb-6 inline-block">
          Add new product
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className='border p-4 rounded-lg shadow-md flex flex-col h-full'>
            <Link href={`/products/${product.id}`}>
              <div className='w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-lg mb-4 flex-shrink-0'>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover mb-4 rounded-lg" />
              </div>
            </Link>
              
            <div className="flex-grow flex flex-col justify-end mt-4">
              <Link href={`/products/${product.id}`}>
                <h2 className="text-xl font-semibold">{product.title}</h2>
                
                <div className='flex gap-4 mt-4 text-center text-black justify-between'>
                  <p className="text-4xl text-green-700">${product.price.toFixed(2)}</p>
                </div>
              </Link>

              <div className='flex gap-4 mt-4 text-center text-white justify-between'>
                <Link href={`/products/${product.id}`} className='w-1/2 bg-indigo-800 py-2 rounded-xl'>
                  Explore
                </Link>
                <Link href={`/products/edit/${product.id}`} className='w-1/2 bg-indigo-800 py-2 rounded-xl'>
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}