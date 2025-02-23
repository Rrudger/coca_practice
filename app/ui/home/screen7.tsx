import CarouselReviews from '@/app/ui/home/carouselReviews';

export default function Screen7({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [
      header,
      text,
      carousel
    ] = [
      document.getElementById('s7header')!,
      document.getElementById('s7text')!,
      document.getElementById('s7carousel')!,
    ];
    header.classList.remove('md:opacity-0');
    header.classList.add('animate-[slideRightSl_linear_0.3s_1_0s]');
    setTimeout(() => {
      text.classList.remove('md:opacity-0');
      text.classList.add('animate-[slideRightSl_linear_0.3s_1_0s]');
    }, 300);
    setTimeout(() => {
      carousel.classList.remove('md:opacity-0');
      carousel.classList.add('animate-[slideDownSl_linear_0.3s_1_0s]');
    }, 600);
  };
  if (animation) launchAnimation();

  return (
    <div id='screen7' className='w-screen md:h-screen flex justify-center items-center'>
      <div className='max-w-7xl w-full md:px-0 px-6'>
        <div className='flex md:flex-row flex-col md:w-full w-3/4 md:mb-20 mb-6'>
          <h2 id='s7header' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold md:mb-0 mb-4'>
            What our customer are saying
          </h2>
          <p id='s7text' className={`
            md:opacity-0
            md:text-extralarge text-medium text-neutral-60 font-medium
            flex items-center
            `}>
            We are trusted numerous companies from different business to meet their needs
          </p>
        </div>

        <CarouselReviews />

      </div>
    </div>
  )
};
