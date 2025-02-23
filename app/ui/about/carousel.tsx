'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [first, setFirst] = useState<number>(0);
  const galleryLength = 9;
  const handleNext = () => {
    setFirst(first === galleryLength - 3 ? 0 : first + 3);
    const [image1, image2, image3] = [
      document.getElementById('carouselAboutImage1')!,
      document.getElementById('carouselAboutImage2')!,
      document.getElementById('carouselAboutImage3')!,
    ];
    image1.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    image2.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    image3.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      image1.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
      image2.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
      image3.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
    }, 400);
  };
  const handlePrev = () => {
    setFirst(first === 0 ? galleryLength - 3 : first - 3);
    const [image1, image2, image3] = [
      document.getElementById('carouselAboutImage1')!,
      document.getElementById('carouselAboutImage2')!,
      document.getElementById('carouselAboutImage3')!,
    ];
    image1.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    image2.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    image3.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      image1.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
      image2.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
      image3.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
    }, 400);
  };

  return (
    <div id='a2carousel' className='md:opacity-0 md:grid hidden grid-cols-12'>

      <div className='relative flex flex-row col-span-8'>
        <div className='w-1/2 h-full overflow-hidden'>
          <Image
            id='carouselAboutImage1'
            className='w-full h-full'
            src={`/about2/image${first}.png`}
            width={500}
            height={630}
            alt="image for section about company"
          />
        </div>
        <div className='w-1/2 ml-6'>
          <div className='w-full h-[300px] overflow-hiddend'>
            <Image
              id='carouselAboutImage2'
              className='w-full h-[300px]'
              src={`/about2/image${first+1}.png`}
              width={500}
              height={370}
              alt="image for section about company"
            />
          </div>
          <div className='relative z-50'>
            <h4 className='text-h4_5 font-semibold my-8'>
              What we believe in
            </h4>
            <p className='text-extralarge text-neutral-60 font-medium'>
              Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...
            </p>
            <button className={`
              rounded-full bg-neutral-100
              py-4 px-8
              text-large text-neutral-10 font-bold mt-8
            `}>
              {'See Details ->'}
            </button>
          </div>
        </div>
        <div className={`
          absolute size-[100px] bg-neutral-10 rounded-full
          p-4 flex flex-row items-center justify-center
          top-[165px] left-1/2 -translate-x-1/2 -translate-y-1/2
          `}>
          <Image
            onClick={handlePrev}
            className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
            src="/icons/chevronLeft.svg"
            width='24'
            height='40'
            alt="chevron left svg"
          />
          <Image
            onClick={handleNext}
            className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
            src="/icons/chevronRight.svg"
            width='24'
            height='40'
            alt="chevron right svg"
          />
        </div>
      </div>

      <div className='col-span-4 overflow-hidden ml-6'>
        <Image
          id='carouselAboutImage3'
          className='min-w-[500px] min-h-[400px]'
          src={`/about2/image${first+2}.png`}
          width={500}
          height={460}
          alt="image for section about company"
        />
      </div>

    </div>
  )
};
