'use client';

import { useState } from 'react';
import NavLinks from '@/app/ui/navlinks';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';


export default function Header() {

  const [menu, openMenu] = useState('initial');
  const switchMenu = ():void => {
    if (menu === 'initial') {
      openMenu('open')
    } else {
      openMenu(menu === 'open' ? 'close' : 'open');
    }
  }

  return (
    <div className='flex flex-row justify-between mx-4 my-10'>
      <Link href={'/'} className='animate-slide-up'>
        <Image
          src="/logo.png"
          width={140}
          height={66}
          alt="logo Coca"
        />
      </Link>
      <div className='md:block hidden animate-slide-right delay-500'>
        <NavLinks mobile={false} />
      </div>
      <div className='md:hidden flex flex-col justify-center relative'>
        <Bars3BottomRightIcon
          className={`
            w-[24px] cursor-pointer self-center

            `}
          onClick={switchMenu}
        />
        <div
          className={clsx(
            'shadow-xl absolute -bottom-[200px]',
            {
              '-right-[400px]': menu === 'initial',
              'animate-slide-out-menu -right-[400px]': menu === 'close',
              'animate-slide-in-menu right-0': menu === 'open',
            },
          )}
        >
          <NavLinks mobile={true} openMenu={openMenu} />
        </div>
      </div>
    </div>
  );
};
