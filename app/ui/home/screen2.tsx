'use client';

//import { useEffect } from 'react';
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
 } from '@heroicons/react/24/outline';

export default function Screen2() {
  return (
    <div className={`
      w-screen h-screen flex justify-center items-stretch
      bg-neutral-100 md:text-large text-medium text-neutral-60 text-start
      `}>
      <div className='max-w-7xl md:my-12 mt-6 md:px-0 px-4'>
        <div className='md:w-2/3'>
          <h5 className={`
            md:mb-8 mb-6 md:text-h2_5 text-h5 font-semibold text-neutral-10
            `}>
            Coca help our client solve complex customer problems with date that does more.
          </h5>
          <p className='md:text-lg'>
            Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration
          </p>
        </div>

        <div className='md:my-12 my-6 grid md:grid-cols-2 grid-cols-1'>
          <div className='md:w-3/4'>
            <CalendarDaysIcon className='md:w-[40px] w-[24px] text-neutral-10' />

            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>Build your date fundamental</h6>
            <p>
              Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.
            </p>
          </div>
          <div className='md:w-3/4 md:mt-0 mt-6'>
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
          <div className='md:w-3/4'>
            <ClipboardDocumentListIcon className='md:w-[40px] w-[24px] text-neutral-10' />
            <h6 className='md:my-6 my-2 text-neutral-10 md:text-h4 text-lg font-semibold'>
              Activate your date
            </h6>
            <p>
              Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.
            </p>
          </div>
          <div className='md:w-3/4 md:mt-0 mt-6'>
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
