import LoginForm from '@/components/Forms/LoginForm';

export default function HomePage() {
  return (
    <main className="flex min-h-screen">
      <div className="hidden md:flex flex-1 items-center justify-center p-8 bg-blue-100 relative overflow-hidden">
        <img
          src="/shop.jpg"
          className="w-full h-1/2 rounded-2xl object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-8 text-center shadow-2xl max-w-lg mx-auto">
            <h2 className="text-4xl sm:text-2xl font-bold text-blue-50 mb-4 drop-shadow-lg">
              Welcome to<br/>
              Super-Duper Grocery!
            </h2>
            <p className="text-lg sm:text-xl text-blue-50 drop-shadow-md">
              94-4 Merrick Blvd, NY 11433
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md border-1 border-neutral-300 shadow-2xl rounded-4xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center md:hidden">
            Welcome to<br/>
            Super-Duper Grocery!
          </h1>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}