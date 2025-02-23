'use client';

//import { useState } from 'react';
import Image from 'next/image';
import TeamCard from '@/app/ui/about/teamCard';
import { team } from '@/app/lib/data';

export default function CarouselTeam() {
  //const [first, setFirst] = useState<number>(3);
  const first = 0;

  const handleNext = () => {
    console.log('next')
  };
  const handlePrev = () => {
    console.log('previous')
  };

  return (
    <div className='relative md:my-20 my-8 grid grid-cols-3 md:gap-x-[30px]'>
      <TeamCard person={team[first]} />
      <TeamCard person={team[first+1]} />
      <TeamCard person={team[first+2]} />
      <div className={`
        absolute size-[100px] bg-neutral-10 rounded-full
        p-4 flex flex-row items-center justify-center
        top-1/2 left-1/3 -translate-x-[56px] -translate-y-3/4
        `}>
        <Image
          onClick={handlePrev}
          className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
          src="/icons/chevronLeft.svg"
          width='24'
          height='40'
          alt="chevron left svg"
        />
        <Image
          onClick={handleNext}
          className='h-[40px] w-[24px] cursor-pointer hover:scale-110'
          src="/icons/chevronRight.svg"
          width='24'
          height='40'
          alt="chevron right svg"
        />
      </div>
    </div>
  );
};
