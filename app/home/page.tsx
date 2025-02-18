'use client';

import { useEffect, useState } from 'react';
import Screen1 from '@/app/ui/home/screen1';
import Screen2 from '@/app/ui/home/screen2';
import Screen3 from '@/app/ui/home/screen3';
import Screen4 from '@/app/ui/home/screen4';
import Screen5 from '@/app/ui/home/screen5';
import Screen6 from '@/app/ui/home/screen6';
import Screen7 from '@/app/ui/home/screen7';

export default function Page() {
  const [s2animation, set2] = useState<boolean>(false);
  const [s3animation, set3] = useState<boolean>(false);
  const [s4animation, set4] = useState<boolean>(false);
  const [s5animation, set5] = useState<boolean>(false);
  const [s6animation, set6] = useState<boolean>(false);
  const [s7animation, set7] = useState<boolean>(false);

  const handleScroll = () => {
    const viewPortHeight = document.documentElement.clientHeight;
    const top = Math.abs(document.documentElement.getBoundingClientRect().top);
    if (top > Math.round(viewPortHeight / 2)) set2(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight)) set3(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight * 2)) set4(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight * 3)) set5(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight * 4)) set6(true);
    if (top > Math.round(viewPortHeight / 2 + viewPortHeight * 5)) set7(true);
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
      <Screen5 animation={s5animation}/>
      <Screen6 animation={s6animation}/>
      <Screen7 animation={s7animation}/>
    </div>
  );
};
