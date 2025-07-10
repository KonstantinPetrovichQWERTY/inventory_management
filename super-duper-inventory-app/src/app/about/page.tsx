import ImageCarousel from '@/components/ImageCarousel';

export default function AboutPage() {

  const carouselImages = [
    '/blue_logo.png',
    '/nice_logo.png',
    '/shop.jpg',
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        About us
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
        The beginning, or first act of Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum accusamus aperiam delectus tenetur ratione in sequi cupiditate recusandae cum tempore maxime, asperiores, perspiciatis sed. Itaque nostrum maxime iusto corporis?
      </p>

      <ImageCarousel images={carouselImages} />

      <div className="mt-12 text-gray-700 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our best Lorem ipsum:</h2>
        <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto text-left">
          <li>Firstly, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi porro reprehenderit error ratione</li>
          <li>dolores illum aspernatur non perspiciatis suscipit, veniam nam voluptates provident tempora aliquid!</li>
          <li>Error neque ad velit inventore!</li>
        </ul>
        <p className="mt-8 text-lg">
          We are happy to share Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum voluptates delectus rem dicta assumenda nesciunt dolor excepturi quas, corrupti deserunt accusantium, itaque eius, fugit unde sit distinctio modi sequi! Stay in touch!
        </p>
      </div>
    </div>
  );
}