'use client';

import { usePathname } from 'next/navigation';
import { posts } from '@/app/lib/data';
import PostPage from '@/app/ui/blog/postPage';

export default function Page() {
  const id = usePathname().slice(-1);
  const post = posts.filter((post) => post.id === id)[0];

  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl md:pt-[200px] pt-[150px] md:pb-20 pb-8 md:px-0 px-6 flex flex-col justify-around'>
        <PostPage post={post}/>
      </div>
    </div>
  );
};
