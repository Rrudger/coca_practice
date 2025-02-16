import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { blogPosts } from '@/app/lib/data';

export default function CarouselBlog() {
  const [first, setFirst] = useState<number>(0);
  const handlePrev = () => {
    setFirst(first === 0 ? blogPosts.length - 1 : first - 1);
    const carousel = document.getElementById('carouselBlog')!;
    carousel.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      carousel.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
    }, 400);
  };
  const handleNext = () => {
    setFirst(first === blogPosts.length - 1 ? 0 : first + 1);
    const carousel = document.getElementById('carouselBlog')!;
    carousel.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      carousel.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
    }, 400);
  };

  return (
    <div id='s6carousel' className='relative opacity-0'>

      <div id='carouselBlog' className='grid grid-cols-2 gap-x-8 overflow-hidden'>
        {blogPosts.map((post, index) => {
          const second = first === blogPosts.length - 1 ? 0 : first + 1;
          return (
            <div
              key={index}
              className={clsx(
                'h-fit',
                {
                  'order-first': index === first,
                  'hidden': index !== first && index !== second,
                  'md:w-auto w-screen': index === first,
                  'md:translate-x-0 translate-x-full': index === second,
                },
              )}>
              <Image
                className='w-full md:h-[330px] h-[190px]'
                src={post.image}
                width='580'
                height='330'
                alt={`slide ${index}`}
              />
              <div className='flex flex-row justify-between text-neutral-60 md:my-8 my-4'>
                <p className='md:text-medium text-[12px] leading-[20px]'>
                  {`Published in Insight ${post.date}`}
                </p>
                <p className='md:text-medium text-[12px] leading-[18px] md:pr-0 pr-12'>
                  {`by : ${post.author}`}
                </p>
              </div>

              <h4 className={clsx(
                'md:text-h4_5 text-large font-semibold md:pr-0 pr-12',
                {
                  'md:h-auto h-[1px]': index === second,
                },
              )}>
                {post.title}
              </h4>
            </div>)}
          )}
        </div>
        <div className={`
          absolute md:top-[165px] top-[95px] md:left-1/2 right-0 md:-translate-x-1/2 translate-x-1/2 -translate-y-1/2
          flex flex-row justify-center
          rounded-full md:w-[80px] w-[40px] md:h-[80px] h-[40px]
          md:p-4 p-2 flex flex-row items-center
          bg-neutral-10 text-neutral-60
        `}>
          <Image
            onClick={handlePrev}
            className='md:h-[40px] h-[12px] md:w-[24px] w-[8px] cursor-pointer'
            src="/icons/chevronLeft.svg"
            width='24'
            height='40'
            alt="chevron left svg"
          />
          <Image
            onClick={handleNext}
            className='md:h-[40px] h-[12px] md:w-[24px] w-[8px] cursor-pointer'
            src="/icons/chevronRight.svg"
            width='24'
            height='40'
            alt="chevron right svg"
          />
        </div>
    </div>
  )
};
