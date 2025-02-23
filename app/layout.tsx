'use client';

import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-neutral-100 relative`}>
        <div className='absolute top-0 z-50 flex justify-center w-screen'>
          <Header />
        </div>
        <div className="flex justify-center w-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
