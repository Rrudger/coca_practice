'use client';

import { useEffect } from 'react';
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

  const handleScrollFooter = () => {
    const halfVP = Math.round(document.documentElement.clientHeight / 2);
    const top = Math.abs(document.documentElement.getBoundingClientRect().top);
    const footer = document.getElementById("footer")!;
    if (top > footer.offsetTop - halfVP) {
      const [
        header,
        line1,
        text1,
        btn,
        logo,
        text2,
        line2,
        logos,
        copyright,
      ] = [
        document.getElementById('fHeader')!,
        document.getElementById('fLine1')!,
        document.getElementById('fText')!,
        document.getElementById('fBtn')!,
        document.getElementById('fLogo')!,
        document.getElementById('fText2')!,
        document.getElementById('fLine2')!,
        document.getElementById('fLogos')!,
        document.getElementById('fCopyright')!,
      ];
      header.classList.remove('md:opacity-0');
      header.classList.add('animate-[slideRight_linear_0.3s_1_0s]');
      setTimeout(() => {
        line1.classList.remove('md:opacity-0');
        line1.classList.add('animate-[slideRight_linear_0.2s_1_0s]');
      }, 300);
      setTimeout(() => {
        text1.classList.remove('md:opacity-0');
        text1.classList.add('animate-[slideRight_linear_0.2s_1_0s]');
      }, 500);
      setTimeout(() => {
        btn.classList.remove('md:opacity-0');
        btn.classList.add('animate-[slideRight_linear_0.2s_1_0s]');
      }, 700);
      setTimeout(() => {
        logo.classList.remove('md:opacity-0');
        logo.classList.add('animate-[slideUp_linear_0.2s_1_0s]');
      }, 900);
      setTimeout(() => {
        text2.classList.remove('md:opacity-0');
        text2.classList.add('animate-[slideUp_linear_0.2s_1_0s]');
      }, 1100);
      menu.forEach((col, index) => {
        const delay = 1300 + 500 * index;
        col.forEach((row, index) => {
          const link = document.getElementById(`f${row}`)!;
          setTimeout(() => {
            link.classList.remove('md:opacity-0');
            link.classList.add('animate-[slideUp_linear_0.1s_1_0s]');
          }, delay + index * 100);
        })
      });
      setTimeout(() => {
        line2.classList.remove('md:opacity-0');
        line2.classList.add('animate-[slideUp_linear_0.1s_1_0s]');
      }, 3300);
      setTimeout(() => {
        logos.classList.remove('md:opacity-0');
        logos.classList.add('animate-[slideUp_linear_0.1s_1_0s]');
      }, 3400);
      setTimeout(() => {
        copyright.classList.remove('md:opacity-0');
        copyright.classList.add('animate-[slideUp_linear_0.1s_1_0s]');
      }, 3500);
    };
  };
  useEffect(() => {
    document.addEventListener(('scroll'), handleScrollFooter);
  });

  return (
    <div
      id='footer'
      style={dark ? {} : style}
      className={clsx(
        'w-screen md:h-screen flex justify-center items-center',
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
            <h1 id='fHeader' className='md:opacity-0 md:text-h1_5 text-h5 font-semibold'>
              Think beyond the wave
            </h1>
            <div className='grid grid-cols-6 md:my-16 my-8 md:w-2/3'>
              <hr id='fLine1' className={clsx(
                'md:opacity-0 col-span-1 translate-y-[20px] md:mr-8 mr-4',
                {
                  'border-neutral-100': !dark,
                  'border-neutral-10': dark,
                },
              )}/>
              <div id='fText' className='md:opacity-0 col-span-5 md:text-h5 text-large font-semibold'>
                Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
              </div>
            </div>
          </div>
          <div className='grid grid-cols-6'>
            <div className='md:hidden col-span-1'></div>
            <div className='md:col-span-6 col-span-5'>
            <button id='fBtn' className={clsx(
              'md:opacity-0 md:mr-0 mr-4 text-nowrap md:text-large text-medium font-bold rounded-full md:py-4 py-[12px] md:px-12 px-8',
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
          <div className='md:col-span-3 col-span-12 md:my-0 my-8'>
            <Image
              id='fLogo'
              className='md:opacity-0 md:w-[140px] w-[95px] md:h-[66px] h-[44px] md:mb-0 mb-4'
              src={dark ? '/logoLight.png' : "/logo.png"}
              width={140}
              height={66}
              alt="logo Coca"
            />
            <div id='fText2' className={clsx(
              'md:opacity-0 md:text-largeplus text-large font-medium md:w-auto w-3/4',
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
                  id={`f${link}`}
                  href={`/${link.split(' ').join('').toLowerCase()}`}
                  className={index === 0 ? 'md:opacity-0 font-bold' : 'md:opacity-0'}>
                  {link}
                </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='text-center text-neutral-60 md:text-large text-medium'>
          <hr id='fLine2' className={clsx(
            'md:opacity-0 md:my-16',
            {
              'bg-neutral-40': !dark,
              'bg-neutral-70': dark,
            },
          )}/>
          <div id='fLogos' className='md:opacity-0 md:hidden flex flex-row justify-center my-6 gap-x-4'>
            {icons.map((name) => <Image
              key={name}
              className={dark ? 'invert cursor-pointer' : 'cursor-pointer'}
              src={`/icons/${name}.svg`}
              width='24'
              height='24'
              alt={`${name} icon`}
               />)}
          </div>

          <div id='fCopyright' className='md:opacity-0'>
            <div className='md:hidden text-[14px] leading-[24px] flex flex-row justify-between my-6'>
              <p className='cursor-pointer'>Privacy Policy</p>
              <p className='cursor-pointer'>Terms & Conditions</p>
              <p className='cursor-pointer'>Support</p>
            </div>
            © Copyright 2023 All Rights Reserved
          </div>

        </div>

      </div>
    </div>
  )
};
