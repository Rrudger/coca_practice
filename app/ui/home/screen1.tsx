'use client';

import { useEffect } from 'react';
import { tryFree } from '@/app/lib/actions';
import Image from 'next/image';

export default function Screen1() {
  const style = {
    backgroundSize: '100% 100%',
    backgroundPosition: '0px 0px',
    backgroundImage: `radial-gradient(50% 50% at 30% 40%, #E8A574 -20%, #073AFF00 100%),
    radial-gradient(50% 50% at 74% 66%, #E2F8F0B2 51%, #073AFF00 100%)`
  };

  useEffect(() => {
    const [right, left, btns ] = [
      document.getElementById('screen1-l')!,
      document.getElementById('screen1-r')!,
      document.getElementById('screen1-btns')!
    ];
    setTimeout(() => {
      right.classList.remove('opacity-0');
      right.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1000);
    setTimeout(() => {
      left.classList.remove('opacity-0');
      left.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    }, 1400);
    setTimeout(() => {
      btns.classList.remove('opacity-0');
      btns.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1800);
  }, []);

  return (
    <div style={style} className='w-screen h-screen flex justify-center items-stretch'>
      <div className='max-w-7xl grid md:grid-cols-10 grid-cols-1 md:pt-[200px] pt-[150px] md:px-0 px-6'>
        <div className='md:col-span-6 flex flex-col md:justify-between justify-center'>
          <div id='screen1-l' className='opacity-0'>
            <div className={`
              md:text-h1 text-h4 font-bold text-nowrap
              md:mt-12 mt-0 md:mb-20 mb-8
              `}>
              Digitally forward<br/>creative
            </div>
            <div className='grid grid-cols-6'>
              <hr className='col-span-1 border-neutral-100 translate-y-[20px] mr-8' />
              <div className='col-span-4 md:text-h4 text-large font-semibold'>
                {`When it comes to interactive marketing, we've got you covered.
                Be where the world is going`}
              </div>
            </div>
          </div>
          <form
            id='screen1-btns'
            className='flex flex-row md:mt-0 mt-8 md:mb-12 mb-4 opacity-0'
            action={tryFree}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className='text-medium md:text-large bg-transparent outline-none' />
            <button className='text-small md:text-large py-4 px-8 rounded-full bg-neutral-100 text-neutral-10 font-bold'>
              Try for free
            </button>
          </form>
        </div>
      <div id='screen1-r' className='md:col-span-4 flex flex-col opacity-0'>
        <Image
            className='md:my-12 my-4'
            src="/Sales-Graph.png"
            width={550}
            height={500}
            alt="sales graph"
          />
        <div className={`
          bg-neutral-100 rounded-md
          text-start md:p-6 p-4 md:mt-0 mt-4
          grid grid-cols-2
          `}>
          <div className='flex flex-col gap-y-2'>
            <p className='md:text-medium text-xs font-semibold text-neutral-60'>Sales</p>
            <p className='md:text-h6 text-medium font-semibold text-neutral-10'>$31,092</p>
            <p className='md:text-medium text-xs'>
              <span className='font-semibold text-success-hover'>{'\u2191 4.2%'}</span>
              <span className='text-neutral-60 ml-2'>from last year</span>
            </p>
          </div>
          <div className='flex flex-col gap-y-2'>
            <p className='md:text-medium text-xs font-semibold text-neutral-60'>Marketing</p>
            <p className='md:text-h6 text-medium font-semibold text-neutral-10'>$29,128</p>
            <p className='md:text-medium text-xs'>
              <span className='font-semibold text-error-hover'>{'\u2193 1.2%'}</span>
              <span className='text-neutral-60 ml-2'>from last year</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
};
