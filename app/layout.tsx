import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header';


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
      </body>
    </html>
  );
}
