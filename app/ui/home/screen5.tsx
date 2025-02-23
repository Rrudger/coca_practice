import Image from 'next/image';
import {
  ArrowTrendingUpIcon,
  FaceSmileIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export default function Screen5({ animation1, animation2 }: { animation1: boolean, animation2: boolean }) {
  const launchAnimation1 = () => {
    const [
      header,
      text,
    ] = [
      document.getElementById('s5header')!,
      document.getElementById('s5text')!,
    ];
    header.classList.remove('md:opacity-0');
    header.classList.add('animate-[slideDownSl_linear_0.3s_1_0s]');
    setTimeout(() => {
      text.classList.remove('md:opacity-0');
      text.classList.add('animate-[slideUp_linear_0.3s_1_0s]');
    }, 300);
  };
  const launchAnimation2 = () => {
    const [
      div1,
      div2,
      div3,
      div4
    ] = [
      document.getElementById('s5div1')!,
      document.getElementById('s5div2')!,
      document.getElementById('s5div3')!,
      document.getElementById('s5div4')!,
    ];
    div1.classList.remove('md:opacity-0');
    div1.classList.add('animate-[slideRight_linear_0.3s_1_0s]');
    setTimeout(() => {
      div2.classList.remove('md:opacity-0');
      div2.classList.add('animate-[slideLeft_linear_0.3s_1_0s]');
    }, 300);
    setTimeout(() => {
      div3.classList.remove('md:opacity-0');
      div3.classList.add('animate-[slideRight_linear_0.3s_1_0s]');
    }, 600);
    setTimeout(() => {
      div4.classList.remove('md:opacity-0');
      div4.classList.add('animate-[slideLeft_linear_0.3s_1_0s]');
    }, 900);
  };
  if (animation1) launchAnimation1();
  if (animation2) launchAnimation2();

  return (
    <div className='w-screen flex justify-center items-stretch'>
      <div className='max-w-7xl w-full md:px-0 px-6'>
        <div id='screen5' className='md:w-1/2 w-full md:mb-12 mb-6'>
          <h2 id='s5header' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold md:my-12 my-4'>
            Advertise, analyze, and optimize! We do it all for you
          </h2>
          <p id='s5text' className='md:opacity-0 md:text-extralarge font-medium text-medium text-neutral-60 md:w-2/3 w-full'>
            Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
          </p>
        </div>

        <div id='screen5cards' className='grid md:grid-cols-2 grid-cols-1 md:gap-y-12 gap-y-4 md:my-8 my-4'>
          <div id='s5div1' className='md:opacity-0 flex cursor-pointer'>
            <div className='relative md:w-[240px] w-[160px] md:h-[273px] h-[216px]'>
              <Image
                className='md:w-[240px] w-[160px] md:h-[273px] h-[216px]'
                src="/home5/image1.png"
                width='240'
                height='273'
                alt="photo people"
              />
              <div className='absolute top-0 right-0 rounded-full p-4 m-2 bg-neutral-60'>
                <FaceSmileIcon className='w-[24px] text-neutral-10'/>
              </div>
            </div>
            <div className='w-1/2 md:ml-12 ml-4'>
              <h4 className='md:text-h4 text-large font-semibold md:my-8 my-4'>
                Lead happiness for customers
              </h4>
              <p className='md:text-largeplus text-medium font-medium text-neutral-60'>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
              </p>
            </div>
          </div>

          <div id='s5div2' className='md:opacity-0 flex cursor-pointer'>
            <div className='relative md:w-[240px] w-[160px] md:h-[273px] h-[216px]'>
              <Image
                className='md:w-[240px] w-[160px] md:h-[273px] h-[216px]'
                src="/home5/image2.png"
                width='240'
                height='273'
                alt="photo people"
              />
              <div className='absolute top-0 right-0 rounded-full p-4 m-2 bg-neutral-60'>
                <ArrowTrendingUpIcon className='w-[24px] text-neutral-10'/>
              </div>
            </div>
            <div className='w-1/2 md:ml-12 ml-4'>
              <h4 className='md:text-h4 text-large font-semibold md:my-8 my-4'>
                Mutually support each other
              </h4>
              <p className='md:text-largeplus text-medium font-medium text-neutral-60'>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
              </p>
            </div>
          </div>

          <div id='s5div3' className='md:opacity-0 flex cursor-pointer'>
            <div className='relative md:w-[240px] w-[160px] md:h-[273px] h-[216px]'>
              <Image
                className='md:w-[240px] w-[160px] md:h-[273px] h-[216px]'
                src="/home5/image3.png"
                width='240'
                height='273'
                alt="photo people"
              />
              <div className='absolute top-0 right-0 rounded-full p-4 m-2 bg-neutral-60'>
                <UserGroupIcon className='w-[24px] text-neutral-10'/>
              </div>
            </div>
            <div className='w-1/2 md:ml-12 ml-4'>
              <h4 className='md:text-h4 text-large font-semibold md:my-8 my-4'>
                Have fun growing together
              </h4>
              <p className='md:text-largeplus text-medium font-medium text-neutral-60'>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
              </p>
            </div>
          </div>

          <div id='s5div4' className='md:opacity-0 flex cursor-pointer'>
            <div className='relative md:w-[240px] w-[160px] md:h-[273px] h-[216px]'>
              <Image
                className='md:w-[240px] w-[160px] md:h-[273px] h-[216px]'
                src="/home5/image4.png"
                width='240'
                height='273'
                alt="photo people"
              />
              <div className='absolute top-0 right-0 rounded-full p-4 m-2 bg-neutral-60'>
                <PresentationChartLineIcon className='w-[24px] text-neutral-10'/>
              </div>
            </div>
            <div className='w-1/2 md:ml-12 ml-4'>
              <h4 className='md:text-h4 text-large font-semibold md:my-8 my-4'>
                Make Your Business Grow
              </h4>
              <p className='md:text-largeplus text-medium font-medium text-neutral-60'>
                Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};
