'use client';

import Link from 'next/link';
import clsx from 'clsx';
//import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: './pricing'},
  { name: 'Contact Us', href: './contact'},
];

interface MyComponentProps {
  mobile: boolean;
  openMenu(arg: string): void
}

export default function NavLinks({ mobile, openMenu}: MyComponentProps ) {
  //const pathname = usePathname();

  const handleClose = () => {
    if (mobile) openMenu('close');
  }

  return (
    <div className={clsx(
      'flex text-nowrap',
      {
        'w-[400px] flex-row justify-between items-center': !mobile,
        'bg-neutral-20 rounded-lg p-4 flex-col gap-4': mobile,
      },
    )}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className='group'
            onClick={handleClose}
          >
            <div className={`relative hover:font-bold
              transition-all ease-in-out before:transition-[width]
              before:ease-in-out before:duration-300 before:absolute
              before:bg-black before:origin-bottom-left before:h-[1px] before:w-0
              hover:before:w-[100%] before:bottom-[-6px]
              `}>
                <p className=''>
                  {link.name}
                  <span className='invisible group-hover:visible'>{' ->'}</span>
                </p>

            </div>
          </Link>
        );
      })}
    </div>
  );
}
