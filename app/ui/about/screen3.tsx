import Link from 'next/link';
import CarouselTeam from '@/app/ui/about/carouselTeam';

export default function Screen3({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [header1, header2, text1, text2, link, image1, image2, image3, arrows] = [
      document.getElementById('a3header1')!,
      document.getElementById('a3header2')!,
      document.getElementById('a3text1')!,
      document.getElementById('a3text2')!,
      document.getElementById('a3link')!,
      document.getElementById('a3card0')!,
      document.getElementById('a3card1')!,
      document.getElementById('a3card2')!,
      document.getElementById('a3arrows')!,
    ];
    header1.classList.remove('md:opacity-0');
    header1.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    setTimeout(() => {
      text1.classList.remove('md:opacity-0');
      text1.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 400);
    setTimeout(() => {
      image1.classList.remove('md:opacity-0');
      image1.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 800);
    setTimeout(() => {
      image2.classList.remove('md:opacity-0');
      image2.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1200);
    setTimeout(() => {
      image3.classList.remove('md:opacity-0');
      image3.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 1600);
    setTimeout(() => {
      arrows.classList.remove('md:opacity-0');
      header2.classList.remove('md:opacity-0');
      header2.classList.add('animate-[slideRight_linear_0.4s_1_0s]');
    }, 2000);
    setTimeout(() => {
      text2.classList.remove('md:opacity-0');
      text2.classList.add('animate-[slideLeft_linear_0.4s_1_0s]');
    }, 2400);
    setTimeout(() => {
      link.classList.remove('md:opacity-0');
      link.classList.add('animate-[slideDown_linear_0.4s_1_0s]');
    }, 2400);
  };
  if(animation) launchAnimation();

  return (
    <div id='about3' className='w-screen flex justify-center items-between'>
      <div className='md:max-w-7xl w-screen md:px-0 px-6 md:mb-24 my-8'>

        <div className='md:w-2/3 md:my-16 my-8'>
          <h2 id='a3header1' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold md:mb-8 mb-6'>
            Meet our team of creators, designers, and world-class problem solvers
          </h2>
          <p id='a3text1' className='md:opacity-0 md:w-2/3 md:text-extralarge text-medium text-neutral-60 font-medium'>
            To become the company that customers want, it takes a group of passionate people. Get to know the people who lead
          </p>
        </div>

        <CarouselTeam />

        <div id='a3header2' className='md:opacity-0 flex md:flex-row flex-col'>
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
            <p id='a3text2' className='md:opacity-0 md:mb-8 mb-6'>
              We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.
            </p>
            <Link
              id='a3link'
              href='/openPositions'
              className='md:opacity-0 text-neutral-100 font-semibold'>
                {'See Open Position ->'}
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
};
