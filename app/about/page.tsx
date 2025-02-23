'use client';

import { useEffect, useState } from 'react';

import Screen1 from '@/app/ui/about/screen1';
import Screen2 from '@/app/ui/about/screen2';
import Screen3 from '@/app/ui/about/screen3';

export default function Page() {
  const [a2animation, set2] = useState<boolean>(false);
  const [a3animation, set3] = useState<boolean>(false);

  const handleScrollAbout = () => {
    const halfVP = Math.round(document.documentElement.clientHeight / 2);
    const top = Math.abs(document.documentElement.getBoundingClientRect().top);
    const [screen2, screen3] = [
      document.getElementById("about2")!,
      document.getElementById('about3')!
    ];
    if (screen2) {
      if (top > screen2.offsetTop - halfVP) set2(true);
      if (top > screen3.offsetTop - halfVP) set3(true);
    }
  };
  useEffect(() => {
    document.addEventListener(('scroll'), handleScrollAbout);
  });

  return (
    <div>
      <Screen1 />
      <Screen2 animation={a2animation} />
      <Screen3 animation={a3animation} />
    </div>
  );
};
