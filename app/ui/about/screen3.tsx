import Link from 'next/link';
import CarouselTeam from '@/app/ui/about/carouselTeam';

export default function Screen3({ animation }: { animation: boolean }) {
  console.log(animation);
  return (
    <div id='about3' className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl md:px-0 px-6 md:mb-24 my-8'>

        <div className='md:w-2/3 md:my-16 my-8'>
          <h2 className='md:text-h2_5 text-h5 font-semibold md:mb-8 mb-6'>
            Meet our team of creators, designers, and world-class problem solvers
          </h2>
          <p className='md:w-2/3 md:text-extralarge text-medium text-neutral-60 font-medium'>
            To become the company that customers want, it takes a group of passionate people. Get to know the people who lead
          </p>
        </div>

        <CarouselTeam />

        <div className='flex md:flex-row flex-col'>
          <h2 className='md:block hidden w-1/2 text-h2_5 font-semibold'>
            Join our team, The one with the master touch
          </h2>
          <h2 className='md:hidden text-h5 font-semibold mb-6'>
            Join our team
          </h2>

          <div className={`
            md:w-1/2 md:pl-24
            md:text-extralarge text-medium text-neutral-60 font-medium
            `}>
            <p className='md:mb-8 mb-6'>
              We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.
            </p>
            <Link
              href='/openPositions'
              className='text-neutral-100 font-semibold'>
                {'See Open Position ->'}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
};
