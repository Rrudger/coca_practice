'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const style = {
    backgroundSize: '100% 100%',
    backgroundPosition: '0px 0px',
    backgroundImage: `radial-gradient(50% 50% at 30% 40%, #E8A574 -20%, #073AFF00 100%),
    radial-gradient(50% 50% at 74% 66%, #E2F8F0B2 51%, #073AFF00 100%)`
  };
  const pathname = usePathname();
  const dark = !['/home', '/blog'].includes(pathname);
  const icons = ['facebook', 'twitter', 'instagram', 'linkedin'];
  const menu = [
    ['Company', 'About', 'Pricing', 'Jobs', 'Blog'],
    ['Product', 'Sales Software', 'Marketplace', 'Terms & Conditions', 'Privacy Policy'],
    ['Discover', 'CRM Comparision', 'Partner Program', 'What is CRM', 'Resource'],
    ['Help Center', 'Community', 'Knowledge Base', 'Academy', 'Support']
  ];
  console.log(menu[1][1].split(' ').join('').toLowerCase())

  return (
    <div
      style={dark ? {} : style}
      className={clsx(
        'w-screen flex justify-center items-stretch',
        {
          'bg-neutral-100': dark,
        },
      )}>
      <div className={clsx(
        'max-w-7xl w-full md:px-0 px-6 py-20',
        {
          'text-neutral-10': dark,
          'text-neutral-100': !dark,
        },
      )}>
        <div className='md:flex md:flex-row justify-between items-center md:mb-0 mb-8'>
          <div className='md:mb-12'>
            <h1 className='md:text-h1_5 text-h5 font-semibold'>
              Think beyond the wave
            </h1>
            <div className='grid grid-cols-6 md:my-16 my-8 md:w-2/3'>
              <hr className={clsx(
                'col-span-1 translate-y-[20px] md:mr-8 mr-4',
                {
                  'border-neutral-100': !dark,
                  'border-neutral-10': dark,
                },
              )}/>
              <div className='col-span-5 md:text-h5 text-large font-semibold'>
                Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
              </div>
            </div>
          </div>
          <div className='grid grid-cols-6'>
            <div className='md:hidden col-span-1'></div>
            <div className='md:col-span-6 col-span-5'>
            <button className={clsx(
              'md:mr-0 mr-4 text-nowrap md:text-large text-medium font-bold rounded-full md:py-4 py-[12px] md:px-12 px-8',
              {
                'bg-neutral-100 text-neutral-10': !dark,
                'bg-neutral-10 text-neutral-100': dark,
              },
            )}>
              Try for free
            </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 md:mb-12 items-center'>
          <div className='md:col-span-3 col-span-1 md:my-0 my-8'>
            <Image
              className='md:w-[140px] w-[95px] md:h-[66px] h-[44px] md:mb-0 mb-4'
              src={dark ? '/logoLight.png' : "/logo.png"}
              width={140}
              height={66}
              alt="logo Coca"
            />
            <div className={clsx(
              'md:text-largeplus text-large font-medium md:w-auto w-3/4',
              {
                'md:text-neutral-100 text-neutral-60': !dark,
                'text-neutral-60': dark,
              },
            )}>
              We built an elegant solution. Our team created a fully integrated sales and marketing solution for SMBs
            </div>
          </div>

          <div className='ml-16 md:flex hidden col-span-9 flex-row justify-between'>
            {menu.map((col, index) => <div
              key={`menu col ${index}`}
              className='text-nowrap text-large grid grid-cols-1 gap-y-4'
              >
                {col.map((link, index) => <Link
                  key={index}
                  href={`/${link.split(' ').join('').toLowerCase()}`}
                  className={index === 0 ? 'font-bold' : ''}>
                  {link}
                </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='text-center text-neutral-60 md:text-large text-medium'>
          <hr className={clsx(
            ' md:my-16',
            {
              'bg-neutral-40': !dark,
              'bg-neutral-70': dark,
            },
          )}/>
          <div className='md:hidden flex flex-row justify-center my-6 gap-x-4'>
            {icons.map((name) => <Image
              key={name}
              className={dark ? 'invert cursor-pointer' : 'cursor-pointer'}
              src={`/icons/${name}.svg`}
              width='24'
              height='24'
              alt={`${name} icon`}
               />)}
          </div>
          <div className='md:hidden text-[14px] leading-[24px] flex flex-row justify-between my-6'>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Terms & Conditions</p>
            <p className='cursor-pointer'>Support</p>
          </div>
          © Copyright 2023 All Rights Reserved
        </div>

      </div>
    </div>
  )
};
