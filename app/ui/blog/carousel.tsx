'use client';

import { useState } from 'react';
import CarouselPost from '@/app/ui/blog/carouselPost';
import { PostSkeleton } from '@/app/ui/skeletons';
import { PostType } from '@/app/lib/definitions';

export default function Carousel({ posts }: { posts: PostType[] }) {
  const [first, setFirst] = useState<number>(0);
  const handleNext = (e: React.MouseEvent):void => {
    e.preventDefault();
    e.stopPropagation();
    setFirst(first === 0 ? posts.length - 1 : first - 1);
    const [image1, image2, image3] = [
      document.getElementById('carouselPost0')!,
      document.getElementById('carouselPost1')!,
      document.getElementById('carouselPost2')!,
    ];
    image1.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      image2.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    }, 200);
    setTimeout(() => {
      image3.classList.add('animate-[slideLeftSl_linear_0.4s_1_0s]');
    }, 400);
    setTimeout(() => {
      image1.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
      image2.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
      image3.classList.remove('animate-[slideLeftSl_linear_0.4s_1_0s]');
    }, 800);
  };
  const handlePrev = (e: React.MouseEvent):void => {
    e.preventDefault();
    e.stopPropagation();
    setFirst(first === posts.length - 1 ? 0 : first + 1);
    const [image1, image2, image3] = [
      document.getElementById('carouselPost0')!,
      document.getElementById('carouselPost1')!,
      document.getElementById('carouselPost2')!,
    ];
    image1.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    setTimeout(() => {
      image2.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    }, 200);
    setTimeout(() => {
      image3.classList.add('animate-[slideRightSl_linear_0.4s_1_0s]');
    }, 400);
    setTimeout(() => {
      image1.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
      image2.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
      image3.classList.remove('animate-[slideRightSl_linear_0.4s_1_0s]');
    }, 800);
  };

  if (posts.length === 0) return (
    <div className='w-screen flex justify-center items-between'>
      <div id='b1carousel' className='relative max-w-7xl md:px-0 px-6 md:grid grid-cols-3 flex flex-row gap-x-8 md:mb-16 mb-8'>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  );

  return (
      <div className='w-screen flex justify-center items-between'>
    <div id='b1carousel' className='relative max-w-7xl md:px-0 px-6 md:grid grid-cols-3 flex flex-row gap-x-8 md:mb-16 mb-8'>
      <CarouselPost
        post={posts[first]}
        index={0}
        next={handleNext}
        prev={handlePrev}
        visibleMobile={true}
      />
      <CarouselPost
        post={first === posts.length - 1 ? posts[0] : posts[first+1]}
        index={1}
        next={handleNext}
        prev={handlePrev}
        visibleMobile={false}
      />
      <CarouselPost
        post={first === posts.length - 1 ? posts[1] : first + 1 === posts.length - 1 ? posts[0] : posts[first+2]}
        index={2}
        next={handleNext}
        prev={handlePrev}
        visibleMobile={false}
      />
    </div>
    </div>
  )
};
