'use client';

import { useEffect, useState } from 'react';
import NavLinks from '@/app/ui/navlinks';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';


export default function Header() {
  useEffect(() => {
    const [logo, navLinks] = [
      document.getElementById('logo')!,
      document.getElementById('navLinks')!
    ];

    logo.classList.remove('opacity-0');
    logo.classList.add('animate-[slideUp_linear_0.5s_1_0s]')
    setTimeout(() => {
      navLinks.classList.remove('opacity-0');
      navLinks.classList.add('animate-[slideRight_linear_0.5s_1_0s]');
    }, 500);
  }, []);

  const [menu, openMenu] = useState('initial');
  const switchMenu = ():void => {
    if (menu === 'initial') {
      openMenu('open')
    } else {
      openMenu(menu === 'open' ? 'close' : 'open');
    }
  }

  return (
    <div className={`
      max-w-7xl grow flex flex-row justify-between items-center mx-4 py-10
      `}>
      <Link id='logo' href={'/'} className='opacity-0'>
        <Image
          className='md:w-[140px] w-[112px] md:h-[66px] h-[52px]'
          src="/logo.png"
          width={140}
          height={66}
          alt="logo Coca"
        />
      </Link>
      <div
        id='navLinks'
        className='md:block opacity-0 hidden'
      >
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
