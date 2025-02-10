'use client';

import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
 } from '@heroicons/react/24/outline';

export default function Screen2({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [header, headerText, div1, div2, div3, div4] = [
      document.getElementById('screen2header')!,
      document.getElementById('screen2headertext')!,
      document.getElementById('screen2div1')!,
      document.getElementById('screen2div2')!,
      document.getElementById('screen2div3')!,
      document.getElementById('screen2div4')!,
    ];
    header.classList.remove('opacity-0');
    header.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    setTimeout(() => {
      headerText.classList.remove('opacity-0');
      headerText.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 400);
    setTimeout(() => {
      div1.classList.remove('opacity-0');
      div1.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 800);
    setTimeout(() => {
      div2.classList.remove('opacity-0');
      div2.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    }, 1200);
    setTimeout(() => {
      div3.classList.remove('opacity-0');
      div3.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1600);
    setTimeout(() => {
      div4.classList.remove('opacity-0');
      div4.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    }, 2000);
  };
  if(animation) launchAnimation();

  return (
    <div
      className={`
      w-screen h-screen flex justify-center items-stretch
      bg-neutral-100 md:text-large text-medium text-neutral-60 text-start
      `}>
      <div className='max-w-7xl md:my-12 mt-6 md:px-0 px-4'>
        <div className='md:w-2/3'>
          <h5
            id='screen2header'
            className={`
              opacity-0
              md:mb-8 mb-6 md:text-h2_5 text-h5 font-semibold text-neutral-10
            `}>

            Coca help our client solve complex customer problems with date that does more.
          </h5>
          <p id='screen2headertext' className='md:text-lg opacity-0'>
            Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
          </p>
        </div>

        <div className='md:my-12 my-6 grid md:grid-cols-2 grid-cols-1'>
          <div id='screen2div1' className='md:w-3/4 opacity-0'>
            <CalendarDaysIcon className='md:w-[40px] w-[24px] text-neutral-10' />

            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>Build your date fundamental</h6>
            <p>
              Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.
            </p>
          </div>
          <div id='screen2div2' className='md:w-3/4 md:mt-0 mt-6 opacity-0'>
            <ClipboardDocumentCheckIcon className='md:w-[40px] w-[24px] text-neutral-10' />
            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>
              Measure more effective
            </h6>
            <p>
              Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.
            </p>
          </div>
          </div>

          <div className='md:my-12 my-6 grid md:grid-cols-2 grid-cols-1'>
          <div id='screen2div3' className='md:w-3/4 opacity-0'>
            <ClipboardDocumentListIcon className='md:w-[40px] w-[24px] text-neutral-10' />
            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>
              Activate your date
            </h6>
            <p>
              Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.
            </p>
          </div>
          <div id='screen2div4' className='md:w-3/4 md:mt-0 mt-6 opacity-0'>
            <ShieldCheckIcon className='md:w-[40px] w-[24px] text-neutral-10' />
            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>
              Strengthen consumer privacy
            </h6>
            <p>
              Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
