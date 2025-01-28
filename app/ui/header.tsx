'use client';

import { useState } from 'react';
import NavLinks from '@/app/ui/navlinks';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

export default function Header() {
  const [toggleMenu, setToggle] = useState(false);

  return (
    <div className='flex flex-row justify-between mx-4 my-10'>
      <Link href={'/'}>
        <Image
          src="/logo.png"
          width={140}
          height={66}
          alt="logo Coca"
        />
      </Link>
      <NavLinks />
      <div className='md:hidden flex flex-col justify-center relative'>
        <Bars3BottomRightIcon
          className={`
            w-[24px] cursor-pointer self-center

            `}
          onClick={() => setToggle(!toggleMenu)}
        />
        <div
          className={clsx(
            `bg-primary-main w-[50px] h-[50px]
            absolute -bottom-full
            `,
            {
              'animation-slide-out opacity-0': !toggleMenu,
              'animate-slide-in opacity-1 right-0': toggleMenu,
            },
          )}
        >
        </div>
      </div>
    </div>
  );
};
