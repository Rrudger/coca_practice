import CarouselBlog from '@/app/ui/home/carouselBlog';

export default function Screen6({ animation }: { animation: boolean }) {
  const launchAnimation = () => {
    const [
      header,
      text,
      carousel
    ] = [
      document.getElementById('s6header')!,
      document.getElementById('s6text')!,
      document.getElementById('s6carousel')!,
    ];
    header.classList.remove('md:opacity-0');
    header.classList.add('animate-[slideDownSl_linear_0.3s_1_0s]');
    setTimeout(() => {
      text.classList.remove('md:opacity-0');
      text.classList.add('animate-[slideDownSl_linear_0.3s_1_0s]');
    }, 300);
    setTimeout(() => {
      carousel.classList.remove('md:opacity-0');
      carousel.classList.add('animate-[slideDownSl_linear_0.3s_1_0s]');
    }, 600);
  };
  if (animation) launchAnimation();

  return (
    <div id='screen6' className='w-screen md:h-screen flex justify-center items-center'>
      <div className='max-w-7xl w-full md:px-0 px-6'>
        <div className='text-center md:mt-20 mt-8 md:mb-12 mb-8'>
          <h2 id='s6header' className='md:opacity-0 md:text-h2_5 text-h5 font-semibold md:mb-8 mb-4'>
            Trending news from Coca
          </h2>
          <p id='s6text' className='md:opacity-0 md:text-extralarge text-large text-neutral-60'>
            we have some new Service to pamper you
          </p>
        </div>

        <CarouselBlog />
      </div>
    </div>
  )
};
