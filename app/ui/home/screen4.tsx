'use client';

import Image from 'next/image';

export default function Screen4({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [
      image,
      header,
      text,
      logosHeader,
      logosText,
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      logo7,
      logo8
    ] = [
      document.getElementById('s4image')!,
      document.getElementById('s4header')!,
      document.getElementById('s4text')!,
      document.getElementById('s4logosHeader')!,
      document.getElementById('s4logosText')!,
      document.getElementById('airBnbLogo')!,
      document.getElementById('amazonLogo')!,
      document.getElementById('fedExLogo')!,
      document.getElementById('microsoftLogo')!,
      document.getElementById('googleLogo')!,
      document.getElementById('olaLogo')!,
      document.getElementById('walmartLogo')!,
      document.getElementById('oyoLogo')!,
    ];
    image.classList.remove('opacity-0');
    image.classList.add('animate-[slideDownHalf_linear_0.3s_1_0s]');
    setTimeout(() => {
      header.classList.remove('opacity-0');
      header.classList.add('animate-[slideUp_linear_0.3s_1_0s]');
    }, 300);
    setTimeout(() => {
      text.classList.remove('opacity-0');
      text.classList.add('animate-[slideUp_linear_0.3s_1_0s]');
    }, 600);
    setTimeout(() => {
      logosHeader.classList.remove('opacity-0');
      logosHeader.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 900);
    setTimeout(() => {
      logo1.classList.remove('opacity-0');
      logo1.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 1000);
    setTimeout(() => {
      logo2.classList.remove('opacity-0');
      logo2.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 1100);
    setTimeout(() => {
      logo3.classList.remove('opacity-0');
      logo3.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 1200);
    setTimeout(() => {
      logo4.classList.remove('opacity-0');
      logo4.classList.add('animate-[slideRight_linear_0.1s_1_0s]');
    }, 1300);
    setTimeout(() => {
      logo8.classList.remove('opacity-0');
      logo8.classList.add('animate-[slideLeft_linear_0.1s_1_0s]');
    }, 1400);
    setTimeout(() => {
      logo7.classList.remove('opacity-0');
      logo7.classList.add('animate-[slideLeft_linear_0.1s_1_0s]');
    }, 1500);
    setTimeout(() => {
      logo6.classList.remove('opacity-0');
      logo6.classList.add('animate-[slideLeft_linear_0.1s_1_0s]');
    }, 1600);
    setTimeout(() => {
      logo5.classList.remove('opacity-0');
      logo5.classList.add('animate-[slidLeft_linear_0.1s_1_0s]');
    }, 1700);
    setTimeout(() => {
      logosText.classList.remove('opacity-0');
      logosText.classList.add('animate-[slideLeft_linear_0.1s_1_0s]');
    }, 1800);

  };
  if (animation) launchAnimation();

  return (
    <div className='w-screen flex justify-center items-stretch'>
      <div className='max-w-7xl w-full md:px-0 px-6'>
        <Image
          id='s4image'
          className='w-full opacity-0'
          src="/screen4image.png"
          width='1200'
          height='540'
          alt="photo people"
        />

        <div className='flex md:flex-row flex-col md:mt-16'>
          <h2
            id='s4header'
            className='opacity-0 md:text-h2_5 text-h5 font-semibold md:mr-[30px] md:w-2/3 md:my-0 my-8'>
            Lift your business to new heights with our digital marketing services
          </h2>
          <p
            id='s4text'
            className='opacity-0 md:text-extralarge text-medium text-neutral-60 md:w-1/3'>
            To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 md:my-24 my-12'>
          <div className='col-span-1 md:mr-16'>
            <h3 id='s4logosHeader' className='opacity-0 md:text-h2_5 text-h5 font-semibold md:mb-6'>
              890+
            </h3>
            <p id='s4logosText' className='opacity-0 md:text-extralarge text-medium text-neutral-60 md:my-0 my-4'>
              some big companies that we work with, and trust us very much
            </p>
          </div>
          <div className={`
            md:col-span-2 col-span-1
            grid md:grid-cols-4 grid-cols-2
            `}>
            <Image
              id='airBnbLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/AirbnbLogo.png"
              width='160'
              height='90'
              alt="Airbnb logo"
            />
            <Image
              id='amazonLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/AmazonLogo.png"
              width='160'
              height='90'
              alt="Amazon logo"
            />
            <Image
              id='fedExLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/FedExLogo.png"
              width='160'
              height='90'
              alt="FedEx logo"
            />
            <Image
              id='microsoftLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/MicrosoftLogo.png"
              width='160'
              height='90'
              alt="Microsoft logo"
            />
            <Image
              id='googleLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/GoogleLogo.png"
              width='160'
              height='90'
              alt="Google logo"
            />
            <Image
              id='olaLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/OLALogo.png"
              width='160'
              height='90'
              alt="OLA logo"
            />
            <Image
              id='walmartLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/WalmartLogo.png"
              width='160'
              height='90'
              alt="Walmart logo"
            />
            <Image
              id='oyoLogo'
              className='opacity-0 md:w-[160px] w-[125px] md:h-[90px] h-70px'
              src="/logos/OYOLogo.png"
              width='160'
              height='90'
              alt="OYO logo"
            />
          </div>
        </div>
      </div>
    </div>
)
}
