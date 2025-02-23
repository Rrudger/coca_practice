import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { reviews } from '@/app/lib/data';

export default function CarouselReviews() {
  const [cur, setCur] = useState<number>(0);
  const [direction, setDirection] = useState<'left' |'right'>('right');
  const handleNext = () => {
    setCur(cur === reviews.length - 1 ? 0 : cur + 1);
    setDirection('right');
  };
  const handlePrev = () => {
    setCur(cur === 0 ? reviews.length - 1 : cur - 1);
    setDirection('left');
  };

  return (
    <div id='s7carousel' className='md:opacity-0 flex flex-col'>
      <Image
        className='md:h-[77px] h-[22px] md:w-[115px] w-[32px]'
        src="/home6/quotes.png"
        width='115'
        height='77'
        alt="quotes"
      />

      <div className='relative md:ml-[115px] ml-[32px]'>
        {reviews.map((review, index) => {
          const integer = Math.floor(review.rating);
          const decimal = Number((review.rating  + "").split(".")[1]) || 0;
          return (
            <div key={index} className={clsx(
              '',
              {
                'hidden': index !== cur,
                'animate-[slideRightSl_linear_0.4s_1_0s]': direction === 'right' && index === cur,
                'animate-[slideLeftSl_linear_0.4s_1_0s]': direction === 'left' && index === cur,
              },
            )}>
              <div className='md:text-largeplus text-medium font-medium flex flex-row justify-start md:gap-x-4 gap-x-2'>
                {[1,2,3,4,5].map((star, index) => {
                  const starIcon = integer >= star ? '/icons/star-fill.svg' : (decimal && (integer + 1 === star)) ? '/icons/star-half.svg' :'/icons/star.svg';
                  return (
                    <Image
                      key={index}
                      className='md:h-[20px] h-[16px] md:w-[20px] w-[16px]'
                      src={starIcon}
                      width='20'
                      height='20'
                      alt="rating star"
                    />
                  )}
                )}
                {review.rating}
              </div>

              <div className='md:text-h3_5 text-largeplus font-semibold md:my-12 my-8'>
                {review.text}
              </div>

              <div className='flex flex-row justify-start items-center md:mt-8 mt-4'>
                <Image
                  className='md:h-[56px] h-[40px] md:w-[56px] w-[40px] rounded-full'
                  src={review.photo}
                  width='56'
                  height='56'
                  alt="review author photo"
                />
                <div className='md:ml-8 ml-4'>
                  <div className='md:text-[18px] leading-[26px] text-medium font-semibold'>
                    {review.author}
                  </div>
                  <div className='md:text-largeplus text-[12px] leading-[26px] text-neutral-60 font-medium'>
                    {review.position}
                  </div>
                </div>
              </div>

            </div>
      )})}

        <div className={`
          absolute bottom-0 right-0
          flex flex-row items-center md:gap-x-4 gap-x-2
          md:h-[56px] h-[50px]
          `}>
          <ArrowLeftIcon
            onClick={handlePrev}
            className='cursor-pointer md:size-[50px] size-[28px] text-neutral-40 border border-neutral-40 rounded-full md:p-4 p-2' />
          <ArrowRightIcon
            onClick={handleNext}
            className='cursor-pointer md:size-[50px] size-[28px] text-neutral-10 border border-neutral-100 rounded-full bg-neutral-100 md:p-4 p-2'/>
        </div>
      </div>
    </div>
  )
};
