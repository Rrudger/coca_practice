'use client';

import { useState } from 'react';
import {
  MinusIcon,
  PlusIcon,
 } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import PricePlanCard from '@/app/ui/pricing/pricePlanCard';
import { faq, plans } from '@/app/lib/data';

export default function Screen1() {
  const style = {
    backgroundSize: '100% 100%',
    backgroundPosition: '0px 0px',
    backgroundImage: `radial-gradient(50% 50% at 30% 40%, #E8A574 -20%, #073AFF00 70%),
    radial-gradient(50% 50% at 74% 66%, #E2F8F0B2 51%, #073AFF00 100%)`
  };

  const [annual, setAnnual] = useState<boolean>(false);
  const handleSwitchDuration = () => setAnnual(!annual);
  const [openedQuestion, setOpened] = useState<number>(0);
  const handleSetOpened = (index: number) => () => {
    if (openedQuestion === index + 1) {
      setOpened(0);
    } else {
      setOpened(index + 1);
    }
  }

  return (
    <div  style={style} className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl md:pt-[200px] pt-[150px] md:pb-20 pb-8 md:px-0 px-6 flex flex-col justify-around'>

        <div className='flex flex-col items-center'>
          <div className={`
            md:text-large text-medium text-primary-hover font-semibold
            flex rounded-full bg-primary-hover/10 py-2 px-4`}>
            Pricing plans 🤑
          </div>
          <h1 className={`
            md:w-3/4 md:my-16 my-8
            md:text-[72px] md:leading-[86.4px] text-h4 text-center font-bold
            `}>
            Choose a plan for a more advanced business
          </h1>
          <div className={`
            md:text-largeplus text-medium text-neutral-60 font-medium
            flex flex-row md:mb-20 mb-4
            `}>
            <label className="inline-flex items-center cursor-pointer">
              <input onChange={handleSwitchDuration} type="checkbox" value="" className="sr-only peer" />
                <div className={`
                  relative w-11 h-6 bg-gray-200
                  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
                  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
                  peer-checked:after:translate-x-full
                  rtl:peer-checked:after:-translate-x-full
                  peer-checked:after:border-white after:content-['']
                  after:absolute after:top-[2px] after:start-[2px]
                  after:bg-primary-hover after:border-primary-hover after:border
                  after:rounded-full after:h-5 after:w-5 after:transition-all
                  dark:border-gray-600 peer-checked:bg-primary-hover dark:peer-checked:bg-blue-600
                `}></div>
            </label>

            <span className='ml-4'>
              Annual pricing (save 20%)
            </span>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-x-8'>
          {plans.map((plan, index) => <PricePlanCard key={index} plan={plan} annual={annual} />)}
        </div>

        <div className='md:my-20 my-8 text-center'>
          <h2 className='md:text-h2_5 text-h5 font-semibold md:mb-8 mb-4'>
            Frequently asked questions
          </h2>
          <p className='md:text-extralarge text-large text-neutral-60'>
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className='flex flex-col divide-y divide-neutral-30'>
          {faq.map((question, index) => {
            const active = index + 1 === openedQuestion;
            return (
              <div
                key={index}
                className='md:py-8 py-6'
              >
                <div className='flex flex-row justify-between items-center'>
                  <h5 className='md:text-h5 text-large font-semibold'>
                    {question.question}
                  </h5>
                  <div
                    onClick={handleSetOpened(index)}
                    className='md:size-[24px] size-[16px] cursor-pointer'>
                    {active ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>
                <p className={clsx(
                  'md:text-extralarge text-medium text-neutral-60 font-medium md:mt-8 mt-4 md:w-1/2',
                  {
                    'hidden': !active,
                  },
                )}>
                  {question.answer}
                </p>
              </div>
            )}
          )}
        </div>

      </div>
    </div>
  );
}
