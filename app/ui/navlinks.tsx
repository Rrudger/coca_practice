'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: './pricing'},
  { name: 'Contact Us', href: './contact'},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className='md:flex hidden w-[400px] flex-row justify-between items-center'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className='group'
          >
            <div className={`mx-2 relative hover:font-bold
              transition-all ease-in-out before:transition-[width]
              before:ease-in-out before:duration-300 before:absolute
              before:bg-black before:origin-bottom-left before:h-[1px] before:w-0
              hover:before:w-[100%] before:bottom-[-6px]
              `}>
                <p className='group-hover:hidden'>{link.name}</p>
                <p className='hidden group-hover:block'>{`${link.name} ->`}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
