'use client';

import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '@/app/lib/definitions';

export default function CarouselPost({ post, index, next, prev, visibleMobile }: {
  post: PostType,
  index: number,
  next?(e: React.MouseEvent): void,
  prev?(e: React.MouseEvent): void,
  visibleMobile: boolean,
}) {

  const date = new Date(post.date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <Link
      id={`carouselPost${index}`}
      href={`${usePathname()}/${post.id}`}
      className={visibleMobile ? 'relative' : 'md:block hidden'}>
      <div className='relative'>
        <Image
          className='w-full shrink-0 object-cover object-top'
          src={post.photo}
          width={500}
          height={430}
          alt="image for section blog"
        />
        {index === 0 && <div id='blogBtnArrows' className={`
            absolute z-50 md:size-[100px] size-[50px] bg-neutral-10 rounded-full
            p-4 flex flex-row items-center justify-center
            top-1/2 left-full -translate-x-1/3 -translate-y-1/2
            `}>
            <Image
              onClick={next}
              className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
              src="/icons/chevronLeft.svg"
              width='24'
              height='40'
              alt="chevron left svg"
            />
            <Image
              onClick={prev}
              className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
              src="/icons/chevronRight.svg"
              width='24'
              height='40'
              alt="chevron right svg"
            />
        </div>}
      </div>
      <div className='md:block hidden text-medium text-neutral-60 md:mt-6 mt-4'>
        {`Published in Insight ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
      </div>
      <h4 className='md:text-h4 text-large font-bold md:my-8 my-4'>
        {post.title}
      </h4>
      <p className='md:text-[20px] md:leading-[30px] text-medium text-neutral-60 font-medium'>
        {post.description}
      </p>

    </Link>
  );
};
