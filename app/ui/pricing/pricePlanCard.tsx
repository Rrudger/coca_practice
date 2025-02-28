import Image from 'next/image';
import {
  CheckIcon,
 } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { plansFeatures } from '@/app/lib/data';

export default function Card({ plan, annual }: {
  plan: { name: string, text: string, icon: string, price: number, features: number[]  },
  annual: boolean,
}) {
  const price = annual ? (plan.price * 12) * 0.8 : plan.price;
  return (
    <div className={`
      group rounded-xl border border-neutral-30 hover:bg-neutral-90
      text-neutral-100 hover:text-neutral-10 font-medium
      transition-all duration-200 hover:-translate-y-8
      md:p-6 p-4 md:mt-0 mt-6 shadow-lg
      `}>

      <div className='flex flex-row justify-between'>
        <div className='rounded-full p-2 size-[40px] group-hover:bg-primary-hover'>
          <Image
            className='size-[24px] group-hover:invert'
            src={`/icons/${plan.icon}`}
            width={24}
            height={24}
            alt={`${plan.icon} icon`}
          />
        </div>
        {plan.name === 'Popular' && <div
          className='text-medium flex items-center rounded-full group-hover:bg-primary-hover border border-neutral-30 group-hover:border-primary-hover px-4 py-2'>
            Best Offers 🔥
          </div>}
      </div>

      <h5 className='text-h5 font-semibold md:my-8 my-4'>
        {plan.name}
      </h5>

      <div className='md:text-largeplus text-medium text-neutral-60'>
        {plan.text}
      </div>

      <div className='md:text-h2_5 text-h4 font-semibold md:my-12 my-4'>
        {`$${price} `}
        <span className='text-largeplus text-neutral-60'>
          {annual ? '/ye' : '/mo'}
        </span>
      </div>

      <div>
        <div className='text-large font-bold'>
          What’s included:
        </div>
        {plansFeatures.map((feature, index) => <div key={index}
          className={clsx(
            'my-4 flex flex-row justify-start items-center',
            {
              'line-through text-neutral-60': !plan.features.includes(index),
            },
          )}>
            <CheckIcon className={clsx(
              'size-[20px] p-[3px] mr-4 rounded-full stroke-[3px] text-neutral-10 group-hover:text-neutral-90',
              {
                'bg-success-hover ': plan.features.includes(index),
                'bg-neutral-60': !plan.features.includes(index),
              },
            )} />
            {feature}
          </div>
        )}
      </div>

      <div className='flex flex-row justify-center'>
        <button className='shadow-md md:text-large py-4 px-10 md:mt-8 mt-4 bg-neutral-10 group-hover:text-neutral-100 text-medium rounded-full border border-neutral-30 '>
          Chose Plan
        </button>
      </div>

    </div>
  );
};
