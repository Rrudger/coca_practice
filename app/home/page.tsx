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
  const [s3animationStat, set3stat] = useState<boolean>(false);
  const [s4animationImage, set4image] = useState<boolean>(false);
  const [s4animationText, set4text] = useState<boolean>(false);
  const [s5animation, set5] = useState<boolean>(false);
  const [s5animationCards, set5cards] = useState<boolean>(false);
  const [s6animation, set6] = useState<boolean>(false);
  const [s7animation, set7] = useState<boolean>(false);

  const handleScroll = () => {
    const halfVP = Math.round(document.documentElement.clientHeight / 2);
    const top = Math.abs(document.documentElement.getBoundingClientRect().top);
    const [
      screen2,
      screen3,
      screen3stat,
      screen4image,
      screen4text,
      screen5,
      screen5cards,
      screen6,
      screen7
    ] = [
      document.getElementById("screen2")!,
      document.getElementById("screen3")!,
      document.getElementById("screen3stat")!,
      document.getElementById("s4image")!,
      document.getElementById("s4text")!,
      document.getElementById("screen5")!,
      document.getElementById("screen5cards")!,
      document.getElementById("screen6")!,
      document.getElementById("screen7")!
    ];
    if (top > screen2.offsetTop - halfVP) set2(true);
    if (top > screen3.offsetTop - halfVP) set3(true);
    if (top > screen3stat.offsetTop - halfVP * 2) set3stat(true);
    if (top > screen4image.offsetTop - halfVP) set4image(true);
    if (top > screen4text.offsetTop - halfVP) set4text(true);
    if (top > screen5.offsetTop - halfVP) set5(true);
    if (top > screen5cards.offsetTop - halfVP) set5cards(true);
    if (top > screen6.offsetTop - halfVP) set6(true);
    if (top > screen7.offsetTop - halfVP) set7(true);
  };
  useEffect(() => {
    document.addEventListener(('scroll'), handleScroll);
  });

  return (
    <div className=''>
      <Screen1 />
      <Screen2 animation={s2animation} />
      <Screen3 animation1={s3animation} animation2={s3animationStat} />
      <Screen4 animation1={s4animationImage} animation2={s4animationText} />
      <Screen5 animation1={s5animation} animation2={s5animationCards} />
      <Screen6 animation={s6animation} />
      <Screen7 animation={s7animation} />
    </div>
  );
};
