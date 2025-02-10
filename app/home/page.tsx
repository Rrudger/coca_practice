'use client';

import { useEffect, useState } from 'react';
import Screen1 from '@/app/ui/home/screen1';
import Screen2 from '@/app/ui/home/screen2';
import Screen3 from '@/app/ui/home/screen3';
import Screen4 from '@/app/ui/home/screen4';

export default function Page() {
  const [s2animation, set2] = useState<boolean>(false);
  const [s3animation, set3] = useState<boolean>(false);
  const [s4animation, set4] = useState<boolean>(false);

  const handleScroll = () => {
    const viewPortHeight = document.documentElement.clientHeight;
    const top = Math.abs(document.documentElement.getBoundingClientRect().top);
    if (top > Math.round(viewPortHeight / 2)) set2(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight)) set3(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight * 2)) set4(true);
  };
  useEffect(() => {
    document.addEventListener(('scroll'), handleScroll);
  });

  return (
    <div className=''>
      <Screen1 />
      <Screen2 animation={s2animation}/>
      <Screen3 animation={s3animation}/>
      <Screen4 animation={s4animation}/>
    </div>
  );
};
