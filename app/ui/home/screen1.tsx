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
    setTimeout(() => {
      document.getElementById('screen1-l')!.classList.remove('opacity-0');
    }, 1000);
    setTimeout(() => {
      document.getElementById('screen1-r')!.classList.remove('opacity-0');
    }, 1500);
    setTimeout(() => {
      document.getElementById('screen1-btns')!.classList.remove('opacity-0');
    }, 2000);
  }, []);

  return (
    <div style={style} className='w-screen h-screen flex justify-center items-stretch'>
      <div className='max-w-7xl grid grid-cols-10 pt-[200px]'>
      <div className='col-span-6 flex flex-col justify-between'>
        <div id='screen1-l' className='opacity-0 animate-[slideRight_linear_0.5s_1_1s]'>
          <div className='text-h1 font-bold text-nowrap mt-12 mb-20'>
            Digitally forward<br/>creative
          </div>
          <div className='grid grid-cols-6'>
            <hr className='col-span-1 border-neutral-100 translate-y-[20px] mr-8' />
            <div className='col-span-4 text-h4 font-semibold'>
              {`When it comes to interactive marketing, we've got you covered.
              Be where the world is going`}
            </div>
          </div>
        </div>
        <form
          id='screen1-btns'
          className='flex flex-row mb-12 opacity-0 animate-[slideRight_linear_0.5s_1_2s]'
          action={tryFree}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className='bg-transparent outline-none' />
          <button className='py-4 px-8 rounded-full bg-neutral-100 text-neutral-10 font-bold'>
            Try for free
          </button>
        </form>
      </div>
      <div id='screen1-r' className='col-span-4 flex flex-col opacity-0 animate-[slideLeft_linear_0.5s_1_1.5s]'>
        <Image
            className='my-12'
            src="/Sales-Graph.png"
            width={550}
            height={500}
            alt="sales graph"
          />
        <div className={`
          bg-neutral-100 rounded-md
          text-start p-6
          grid grid-cols-2
          `}>
          <div className='flex flex-col gap-y-2'>
            <p className='font-medium font-semibold text-neutral-60'>Sales</p>
            <p className='font-h6 font-semibold text-neutral-10'>$31,092</p>
            <p className='font-medium'>
              <span className='font-semibold text-success-hover'>{'\u2191 4.2%'}</span>
              <span className='text-neutral-60 ml-2'>from last year</span>
            </p>
          </div>
          <div className='flex flex-col gap-y-2'>
            <p className='font-medium font-semibold text-neutral-60'>Marketing</p>
            <p className='font-h6 font-semibold text-neutral-10'>$29,128</p>
            <p className='font-medium'>
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
