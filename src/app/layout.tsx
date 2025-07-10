import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ims',
  description: 'super-duper-ims',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="bg-gradient-to-r from-indigo-800 to-indigo-700 text-white p-4 shadow-md">
            <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <Link
                  href="/products"
                  className="flex items-center space-x-2 group"
                  passHref
                >
                  <img
                    src="/blue_logo.png"
                    alt=""
                    className="h-fill w-15 rounded-4xl"
                  ></img>
                  <span className="text-xl font-bold group-hover:text-neutral-300 transition-colors duration-200 whitespace-nowrap">
                    SD Inventory
                  </span>
                </Link>

                <Link
                  href="/products"
                  className="py-2 px-4 rounded-lg bg-blue-700 hover:bg-blue-600 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  passHref
                >
                  Catalog
                </Link>
              </div>

              <div className="flex items-center order-2 md:order-none">
                <Link
                  href="/about"
                  className="py-2 px-4 mx-4 rounded-lg bg-blue-700 hover:bg-blue-600 transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  passHref
                >
                  About
                </Link>
                <span className="text-white hover:text-blue-200 cursor-pointer transition-colors duration-200">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
              </div>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
