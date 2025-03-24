import clsx from 'clsx';
import { menu } from '@/app/lib/data';

export default function BlogMenu({ sectionOpened, switchMenu }:
  {
    sectionOpened: number,
    switchMenu: (index: number) => () => void
  }) {

  return (
    <div className='w-screen flex justify-center items-between'>
    <div className={`
      md:flex flex-row grid grid-cols-4 gap-x-8 gap-y-4 justify-between
      md:w-2/3 w-full
      md:text-large text-medium text-neutral-60 font-medium
      md:mb-12 mb-4
      `}>
      {menu.map((item, index) => <div
        key={index}
        onClick={switchMenu(index)}
        className={clsx(
        'cursor-pointer text-center',
        {
          'text-neutral-100 underline': index === sectionOpened,
          'md:col-span-1 col-span-2': [4, 5].includes(index)
        },
      )}>{item}</div>)}
    </div>
    </div>
  );
};
