import NavLinks from '@/app/ui/navlinks';
import Image from 'next/image';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className='flex flex-row justify-between mx-4 my-10'>
      <Image
        src="/logo.png"
        width={140}
        height={66}
        alt="logo Coca"
        className='cursor-pointer'
      />
      <NavLinks />
      <Bars3BottomRightIcon className='md:hidden block w-[24px] cursor-pointer'/>
    </div>
  );
};
