'use client';

export default function Screen1() {
  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl md:pt-[200px] pt-[150px] md:pb-20 pb-8 md:px-0 px-6 flex flex-col justify-around'>

        <h1 className='md:text-[72px] text-h4 md:leading-[86.4px] font-bold md:w-2/3'>
          Activity & Updates
        </h1>
        <div className='flex md:flex-row flex-col justify-between items-center mt-0'>
          <div className={`
            md:text-[32px] text-large md:leading-[42px] font-semibold
            md:my-20 my-8
            grid grid-cols-6 md:w-3/4
            `}>
            <hr className='col-span-1 border-neutral-100 translate-y-[20px] md:mr-8 mr-4' />
            <div className='text-neutral-60 col-span-5 md:text-h4 text-large font-semibold'>
              Our biggest challenge is making sure we&apos;re always designing and building products that will help you run your business better.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
