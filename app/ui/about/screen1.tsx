'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Screen1() {
  useEffect(() => {
    const [header, line, text, image ] = [
      document.getElementById('a1header')!,
      document.getElementById('a1line')!,
      document.getElementById('a1text')!,
      document.getElementById('a1image')!,
    ];
    setTimeout(() => {
      header.classList.remove('opacity-0');
      header.classList.add('animate-[slideUp_linear_0.4s_1_0s]');
    }, 800);
    setTimeout(() => {
      text.classList.remove('opacity-0');
      text.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1200);
    setTimeout(() => {
      line.classList.remove('opacity-0');
      line.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1600);
    setTimeout(() => {
      image.classList.remove('opacity-0');
      image.classList.add('animate-[slideLeft_linear_0.2s_1_0s]');
    }, 2000);
    setTimeout(() => {
      image.classList.remove('animate-[slideLeft_linear_0.2s_1_0s]');
      image.classList.add('animate-[rotate_linear_0.4s_1_0s]');
    }, 2200);
  }, []);

  return (
    <div className='w-screen md:h-screen flex justify-center items-between'>
      <div className='max-w-7xl md:pt-[200px] pt-[150px] md:pb-20 pb-8 md:px-0 px-6 flex flex-col justify-around'>

        <h1 id='a1header' className='opacity-0 md:text-[72px] text-h4 md:leading-[86.4px] font-bold md:w-2/3'>
          Everything you need to get the attention of your audience
        </h1>

        <div className='flex md:flex-row flex-col justify-between items-center md:mt-0 mt-20'>
          <div className={`
            md:text-[32px] text-large md:leading-[42px] font-semibold
            grid grid-cols-6 md:w-3/4
            `}>
            <hr id='a1line' className='opacity-0 col-span-1 border-neutral-100 translate-y-[20px] md:mr-8 mr-4' />
            <div id='a1text' className='text-neutral-60 opacity-0 col-span-5 md:text-h4 text-large font-semibold'>
              Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.
            </div>
          </div>

          <div className='md:w-auto w-full flex justify-end'>
            <Image
              id='a1image'
              className='opacity-0 md:size-[130px] size-[64px]'
              src="/about1/linked_path.png"
              width={130}
              height={130}
              alt="circle with text get in touch"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
