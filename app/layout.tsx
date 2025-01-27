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
      <body className={`${inter.className} antialiased w-screen flex justify-center`}>

        <div className='flex grow flex-col max-w-7xl'>
          <Header />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
