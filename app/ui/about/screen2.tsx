'use client';

import Image from 'next/image';
import Carousel from '@/app/ui/about/carousel';

export default function Screen2({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [carousel, header, text] = [
      document.getElementById('a2carousel')!,
      document.getElementById('a2header')!,
      document.getElementById('a2text')!,
    ];
    carousel.classList.remove('md:opacity-0');
    carousel.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    setTimeout(() => {
      header.classList.remove('md:opacity-0');
      header.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 400);
    setTimeout(() => {
      text.classList.remove('md:opacity-0');
      text.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    }, 800);
  };
  if(animation) launchAnimation();

  return (
    <div id='about2' className='w-screen md:h-screen flex justify-center items-between'>
      <div className='max-w-7xl md:px-0 px-6 md:my-0 my-8'>

        <Carousel />
        <div id='a2image' className='md:hidden'>
          <Image
            id='a2image'
            className='w-full h-[250px]'
            src="/about2/image2.png"
            width={335}
            height={250}
            alt="work meeting in office"
          />
          <div>
            <h2 className='text-h6 font-semibold my-6'>
              What we believe in
            </h2>
            <div className='text-medium text-neutral-60 font-medium'>
              Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...
            </div>
          </div>

          <button className={`
            text-medium text-neutral-10 font-bold
            bg-neutral-100 rounded-full
            py-2 px-8 my-6
            `}>
            {'See Details ->'}
          </button>
        </div>

        <div className='md:grid grid-cols-12 md:mt-16'>
          <h2 id='a2header' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold md:my-0 my-8 col-span-7'>
            Powerful ideas & <br/> sales acceleration
          </h2>
          <div id='a2text' className='md:opacity-0 md:text-h5 text-medium text-neutral-60 font-medium col-span-5'>
            We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.
          </div>
        </div>

      </div>
    </div>
  );
}
