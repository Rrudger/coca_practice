'use client';

import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

export default function Post({ id, image, header, text, high }: {
  id: string,
  image: string,
  header: string,
  text: string,
  high: boolean,
}) {
  return (
    <Link href={`${usePathname()}/${id}`}>
      <div className={clsx(
      'relative w-full',
      {
        'md:h-[750px] h-[450px]': high,
        'md:h-[500px] h-[350px]': !high,
      },
    )}>
      <Image
        className={`object-cover object-top`}
        src={image}
        fill
        alt="image for section blog"
      />
      </div>
      <h3 className='md:mt-6 md:mb-4 my-4 md:text-h3 text-extralarge text-neutral-10 font-semibold'>
        {header}
      </h3>
      <p className='md:text-extralarge text-medium text-neutral-60 font-medium'>
        {text}
      </p>
    </Link>
  );
};
