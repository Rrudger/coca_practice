'use client';

import Image from 'next/image';

export default function TeamCard({ person }: { person: { name: string, position: string, photo: string }}) {
  return (
    <div>
      <Image
        className='w-full'
        src={person.photo}
        width={380}
        height={430}
        alt={`${person.name} photo`}
      />

      <div className='flex flex-row justify-between md:mt-6 md:mb-2 my-4'>
        <div className='md:text-h5 text-large font-semibold'>
          {person.name}
        </div>
        <div className='flex flex-row justify-end'>
          {['twitter', 'linkedin', 'instagram'].map((icon) => <Image
              key={icon}
              className='md:size-[32px] size-[20px] p-2 ml-2 bg-neutral-30 rounded-full cursor-pointer'
              src={`/icons/${icon}.svg`}
              width='20'
              height='20'
              alt={`${icon} icon`}
             />
           )}
        </div>
      </div>

      <div className='md:text-extralarge text-medium text-neutral-40 font-medium'>
        {person.position}
      </div>

    </div>
  )
};
