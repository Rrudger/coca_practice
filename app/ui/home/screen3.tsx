import Image from 'next/image';
import {
  CheckCircleIcon,
 } from '@heroicons/react/24/outline';

export default function Screen3({ animation1, animation2 }: { animation1: boolean, animation2: boolean }) {
  const launchAnimation1 = () => {
    const [image, header, text, list] = [
      document.getElementById('s3image')!,
      document.getElementById('s3header')!,
      document.getElementById('s3text')!,
      document.getElementById('s3list')!,
    ];
    image.classList.remove('md:opacity-0');
    image.classList.add('animate-[slideRight_linear_0.3s_1_0s]');
    setTimeout(() => {
      list.classList.remove('md:opacity-0');
      list.classList.add('animate-[slideLeft_linear_0.3s_1_0s]');
    }, 300);
    setTimeout(() => {
      text.classList.remove('md:opacity-0');
      text.classList.add('animate-[slideLeft_linear_0.3s_1_0s]');
    }, 600);
    setTimeout(() => {
      header.classList.remove('md:opacity-0');
      header.classList.add('animate-[slideLeft_linear_0.3s_1_0s]');
    }, 900);
  };
  const launchAnimation2 = () => {
    const [stat1, stat2, stat3, stat4] = [
      document.getElementById('s3stat1')!,
      document.getElementById('s3stat2')!,
      document.getElementById('s3stat3')!,
      document.getElementById('s3stat4')!,
    ];
    stat1.classList.remove('md:opacity-0');
    stat1.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    setTimeout(() => {
      stat2.classList.remove('md:opacity-0');
      stat2.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 100);
    setTimeout(() => {
      stat3.classList.remove('md:opacity-0');
      stat3.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 200);
    setTimeout(() => {
      stat4.classList.remove('md:opacity-0');
      stat4.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 300);
  };
  if (animation1) launchAnimation1();
  if (animation2) launchAnimation2();

  return (
    <div id='screen3' className='w-screen flex justify-center items-stretch'>
      <div className={`
        max-w-7xl w-full md:pt-24 pt-12 md:mx-0 mx-6
        grid md:grid-cols-2 grid-cols-1 gap-x-12 md:gap-y-0 gap-y-4
        `}>

        <div id='s3image' className={`
          md:opacity-0
          bg-[url(/home3/home3bg.png)] bg-cover
          grid justify-end content-end
          md:h-[650px] h-[380px]
          `}>
        <Image
            className='mr-8 mb-8 md:w-[300px] w-[180px]'
            src="/home3/home3chart.png"
            width={300}
            height={300}
            alt="sales chart"
          />
        </div>

        <div className={`
          grid grid-cols-1 gap-y-4
          text-neutral-100 md:text-extralarge text-medium font-medium
          `}>
          <h2 id='s3header' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold'>
            Passion to increase company revenue up to 85%
          </h2>
          <p id='s3text' className='md:opacity-0 md:w-2/3 text-neutral-60'>
            Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging
          </p>
          <div id='s3list' className='md:opacity-0'>
          <div className='md:w-2/3 flex flex-row gap-x-4 items-center'>
            <CheckCircleIcon className='size-[24px] min-w-[24px] text-success-hover' />
            <p>
              Close more deals with single - page contact managment
            </p>
          </div>
          <div className='md:w-2/3 flex flex-row gap-x-4 items-center'>
            <CheckCircleIcon className='size-[24px] min-w-[24px] text-success-hover' />
            <p>
              Enjoy one-click calling, call scripts and voicemail automation
            </p>
          </div>
          <div className='md:w-2/3 flex flex-row gap-x-4 items-center'>
            <CheckCircleIcon className='size-[24px] min-w-[24px] text-success-hover' />
            <p>
              Take stages and milestones of your deals to keep the sales process an track
            </p>
          </div>
          </div>
        </div>

        <div id='screen3stat' className={`
          md:col-span-2 col-span-1
          flex md:flex-row flex-col gap-x-8 gap-y-4 md:mb-12 mb-8 md:mt-20 mt-0
          text-neutral-100
          `}>
          <div className='md:flex flex-row md:gap-x-8 gap-x-4 grid grid-cols-2'>
            <div id='s3stat1' className='md:opacity-0 flex flex-row'>
              <div className='grow grid content-center md:mr-8'>
                <p className='md:text-h1_5 text-h4 font-semibold'>17k</p>
                <p className='md:text-extralarge text-large text-neutral-60 font-medium'>
                  Happy customers on worldwide
                </p>
              </div>
              <div className='border-r border-neutral-40 md:my-8 my-4'></div>
            </div>

            <div id='s3stat2' className='md:opacity-0 flex flex-row'>
              <div className='md:pl-8 grid content-center mr-8'>
                <p className='md:text-h1_5 text-h4 font-semibold'>15+</p>
                <p className='md:text-extralarge text-large text-neutral-60 font-medium'>
                  Hours of work experience
                </p>
              </div>
              <div className='md:block hidden border-r border-neutral-40 my-8'></div>
            </div>
          </div>

          <div className='md:flex flex-row md:gap-x-8  gap-x-4 grid grid-cols-2'>
            <div id='s3stat3' className='md:opacity-0 flex flex-row'>
              <div className='md:pl-8 grow grid content-center md:mr-8'>
                <p className='md:text-h1_5 text-h4 font-semibold'>50+</p>
                <p className='md:text-extralarge text-large text-neutral-60 font-medium text-nowrap'>
                  Creativity &<br/> passionate members
                </p>
              </div>
              <div className='border-r border-neutral-40 md:my-8 my-4'></div>
            </div>

            <div id='s3stat4' className='md:opacity-0 md:pl-8 grid content-center'>
              <p className='md:text-h1_5 text-h4 font-semibold'>100+</p>
              <p className='md:text-extralarge text-large text-neutral-60 font-medium'>
                Integrations lorem ipsum integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
