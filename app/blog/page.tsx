'use client';

import { useState } from 'react';
import Screen1 from '@/app/ui/blog/screen1';
import Screen2 from '@/app/ui/blog/screen2';
import BlogMenu from '@/app/ui/blog/blogMenu';
import Carousel from '@/app/ui/blog/carousel';
import { PostType } from '@/app/lib/definitions';
import { menu, posts } from '@/app/lib/data';

export default function Page() {
  const [sectionOpened, setSection] = useState<number>(0);
  const handleSwitchSection = (index: number) => () => {
    setSection(index);
  };

  const selectedPosts = (index: number): PostType[] => {
    if (index === 0) return posts;
    return posts.filter((post) => post.section === menu[index].toLowerCase());
  }
  const designPosts = posts.filter((post) => post.section === 'design');

  return (
    <div className=''>
      <Screen1 />
      <BlogMenu sectionOpened={sectionOpened} switchMenu={handleSwitchSection} />
      <Carousel posts={selectedPosts(sectionOpened)} />
      <Screen2 posts={designPosts} />
    </div>
  );
};
