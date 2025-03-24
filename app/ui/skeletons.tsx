import Image from 'next/image';

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function PostSkeleton() {
    return (
      <div
        className={`${shimmer} w-full relative overflow-hidden rounded-xl bg-neutral-30 p-2 shadow-sm`}
      >
        <Image
          className='max-h-[300px] '
          src="/picture.png"
          width='500'
          height='300'
          alt="default picture"
        />
        <div className='rounded bg-neutral-60 md:min-h-[30px] min-h-[20px] md:mt-4 mt-2'>
        </div>
        <div className='rounded bg-neutral-60 md:min-h-[30px] min-h-[20px] md:mt-4 mt-2'>
        </div>
      </div>
    );
  };
