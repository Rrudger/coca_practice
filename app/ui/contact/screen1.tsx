'use client';

import Image from 'next/image';

export default function Screen1() {
  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='max-w-7xl w-full md:pt-[200px] pt-[150px] md:px-0 px-6'>
        <h1 className='md:text-[72px] md:leading-[86.4px] text-h4 font-bold text-start'>
          Contact our team to <br/> find out more
        </h1>

        <div className='md:my-20 my-8'>
          <div className='flex md:flex-row flex-col '>
          <div className='relative'>
            <Image
              className='md:w-[985px] md:h-[545px] w-full h-[170px]'
              src="/contact/map.png"
              width={985}
              height={545}
              alt="world map"
            />
            <Image
              className='absolute right-[120px] bottom-[100px] md:size-[55px] md:block hidden'
              src="/contact/pin.png"
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

          <div className='md:ml-16 md:mt-0 mt-8 grid md:grid-cols-1 grid-cols-2'>
            <div className='col-span-1 md:border-b border-neutral-50 md:py-8 md:mb-0 mb-6'>
              <p className='md:text-h5 text-large font-bold'>
                Support
              </p>
              <p className='md:my-4 my-4 md:text-large text-medium text-neutral-60'>
                Our friendly team is<br/> here to help.
              </p>
              <p className='md:text-large text-medium font-medium'>
                support@sans.com
              </p>
            </div>
            <div className='col-span-1 md:border-b border-neutral-50 md:py-8 md:mb-0 mb-6'>
              <p className='md:text-h5 text-large font-bold'>
                Sales
              </p>
              <p className='md:my-4 my-4 md:text-large text-medium text-neutral-60'>
                Questions or queries? <br/> Get in touch!
              </p>
              <p className='md:text-large text-medium font-medium'>
                sales@sans.com
              </p>
            </div>
            <div className='col-span-1 md:border-b border-neutral-50 md:py-8 md:mb-0 mb-6'>
              <p className='md:text-h5 text-large font-bold'>
                Phone
              </p>
              <p className='md:my-4 my-4 md:text-large text-medium text-neutral-60'>
                Mon-Fri <br/>from 8am to 5pm.
              </p>
              <p className='md:text-large text-medium font-medium'>
                +1 (435) 345-7655
              </p>
            </div>
          </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:my-24 my-12'>
            <div className='col-span-1 md:mr-16'>
              <h3 className='md:text-h2_5 text-h5 font-semibold md:mb-6'>
                890+
              </h3>
              <p className='md:text-extralarge text-medium text-neutral-60 md:my-0 my-4'>
                some big companies that we work with, and trust us very much
              </p>
            </div>
            <div className={`
              md:col-span-2 col-span-1
              grid md:grid-cols-4 grid-cols-2
              `}>
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/AirbnbLogo.png"
                width='160'
                height='90'
                alt="Airbnb logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/AmazonLogo.png"
                width='160'
                height='90'
                alt="Amazon logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/FedExLogo.png"
                width='160'
                height='90'
                alt="FedEx logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/MicrosoftLogo.png"
                width='160'
                height='90'
                alt="Microsoft logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/GoogleLogo.png"
                width='160'
                height='90'
                alt="Google logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/OLALogo.png"
                width='160'
                height='90'
                alt="OLA logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/WalmartLogo.png"
                width='160'
                height='90'
                alt="Walmart logo"
              />
              <Image
                className='md:w-[160px] w-[125px] md:h-[90px] h-70px'
                src="/logos/OYOLogo.png"
                width='160'
                height='90'
                alt="OYO logo"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
