'use client';

import { useState } from 'react';
import Image from 'next/image';
import TeamCard from '@/app/ui/about/teamCard';
import { team } from '@/app/lib/data';

export default function CarouselTeam() {
  const [first, setFirst] = useState<number>(0);

  const handlePrev = () => {
    const [card0, card1, card2] = [
      document.getElementById('a3card0')!,
      document.getElementById('a3card1')!,
      document.getElementById('a3card2')!,
    ];
    card0.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
    card0.classList.add('opacity-0');
    setTimeout(() => {
      card0.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card1.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
      card1.classList.add('opacity-0');
    }, 200);
    setTimeout(() => {
      setFirst(first === team.length - 1 ? 0 : first + 1);
      card1.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card2.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
      card2.classList.add('opacity-0');
    }, 600);
    setTimeout(() => {
      card2.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card0.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card0.classList.remove('opacity-0')
    }, 600);
    setTimeout(() => {
      card0.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]');
      card1.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card1.classList.remove('opacity-0')
    }, 800);
    setTimeout(() => {
      card1.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]')
      card2.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card2.classList.remove('opacity-0')
    }, 1000);
    setTimeout(() => {
      card2.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]');
    }, 2400);
  };
  const handleNext = () => {
    const [card0, card1, card2] = [
      document.getElementById('a3card0')!,
      document.getElementById('a3card1')!,
      document.getElementById('a3card2')!,
    ];
    card2.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
    card2.classList.add('opacity-0');
    setTimeout(() => {
      card2.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card1.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
      card1.classList.add('opacity-0');
    }, 200);
    setTimeout(() => {
      setFirst(first === 0 ? team.length - 1 : first - 1);
      card1.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card0.classList.add('animate-[fadeIn_linear_0.4s_1_0s]');
      card0.classList.add('opacity-0');
    }, 600);
    setTimeout(() => {
      card0.classList.remove('animate-[fadeIn_linear_0.4s_1_0s]');
      card2.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card2.classList.remove('opacity-0')
    }, 600);
    setTimeout(() => {
      card2.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]');
      card1.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card1.classList.remove('opacity-0')
    }, 800);
    setTimeout(() => {
      card1.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]')
      card0.classList.add('animate-[fadeOut_linear_0.4s_1_0s]');
      card0.classList.remove('opacity-0')
    }, 1000);
    setTimeout(() => {
      card0.classList.remove('animate-[fadeOut_linear_0.4s_1_0s]');
    }, 2400);

  };

  return (
    <div className='relative md:my-20 my-8 md:w-auto'>
      <div id='about2cards' className='md:grid grid-cols-3 flex flex-row md:gap-x-[30px] gap-x-4'>
        <TeamCard
          person={team[first]}
          id='a3card0'
          visible={true}
        />
        <TeamCard
          person={first === team.length - 1 ? team[0] : team[first+1]}
          id='a3card1'
          visible={true}
        />
        <TeamCard
          person={first === team.length - 1 ? team[1] : first + 1 === team.length - 1 ? team[0] : team[first+2]}
          id='a3card2'
          visible={false}
        />
      </div>
      <div id='a3arrows' className={`
        md:opacity-0
        absolute md:size-[100px] size-[50px] bg-neutral-10 rounded-full
        md:p-4 p-2 flex flex-row items-center justify-center
        top-1/2 md:left-1/3 left-0 md:-translate-x-[56px] -translate-x-1/2 -translate-y-3/4
        `}>
        <Image
          onClick={handlePrev}
          className='md:h-[40px] h-[16px] md:w-[24px] w-[12px] cursor-pointer hover:scale-110'
          src="/icons/chevronLeft.svg"
          width='24'
          height='40'
          alt="chevron left svg"
        />
        <Image
          onClick={handleNext}
          className='md:h-[40px] h-[16px] md:w-[24px] w-[12px] cursor-pointer hover:scale-110'
          src="/icons/chevronRight.svg"
          width='24'
          height='40'
          alt="chevron right svg"
        />
      </div>
    </div>
  );
};
