'use client';

import { usePathname } from 'next/navigation';

export default function Page() {

  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl md:pt-[200px] pt-[150px] md:pb-20 pb-8 md:px-0 px-6 flex flex-col justify-around'>
        {`post ${usePathname().slice(-1)}`}
      </div>
    </div>
  );
};
