'use client';

import Image from 'next/image';

export default function Screen1() {
  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl w-full md:pt-[200px] pt-[150px] md:px-0 px-6'>
        <h1 className='md:text-[72px] md:leading-[86.4px] text-h4 font-bold text-start'>
          Contact our team to <br/> find out more
        </h1>

        <div className='flex md:flex-row flex-col md:my-20 my-8'>
          <div className='relative'>
            <Image
              className='md:w-[985px] md:h-[545px] w-full h-[170px]'
              src="/contact1/map.png"
              width={985}
              height={545}
              alt="world map"
            />
            <Image
              className='absolute right-[120px] bottom-[100px] md:size-[55px] md:block hidden'
              src="/contact1/pin.png"
              width={55}
              height={55}
              alt="pin on map"
            />
            <div className='absolute md:right-[70px] right-0 md:bottom-[160px] bottom-[50px] bg-neutral-10 md:p-4 p-2 shadow-md'>
              <p className='mb-2 md:text-medium text-[8.6px] leading-[12px] font-semibold'>
                Yogja, INA
              </p>
              <p className='md:text-small md:leading-[18px] text-[7px] leading-[11px] text-neutral-60'>
                100 Smith Street<br/> Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
          <div>
            contacts
          </div>
        </div>

      </div>
    </div>
  );
};
