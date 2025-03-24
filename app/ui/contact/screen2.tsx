'use client';

import { useState } from 'react';
import Image from 'next/image';
import { countryCodes } from '@/app/lib/data';

export default function Screen2() {
  const sendForm = () => {
    console.log('sended');
  };


  const [code, setCode] = useState<string>('US');
  const handleSwitchCode = (e: React.ChangeEvent):void => {
    const element = e.currentTarget as HTMLInputElement
    const value = element.value;
    setCode(value);
  }

  return (
    <div className='w-screen flex justify-center items-between'>
      <div className='relative max-w-7xl w-full md:my-20 my-8 md:px-0 px-6 md:flex justify-end'>
        <Image
          className='md:block hidden md:max-w-[990px] md:h-[885px]'
          src="/contact/image.png"
          width={990}
          height={885}
          alt="Two colleagues enthusiastically high-five at their desk"
        />

        <form action={sendForm} className="space-y-3 md:absolute top-0 left-0">
          <div className="flex-1 bg-neutral-10 border border-neutral-40 md:px-12 px-8 md:pt-12 pt-8">
            <h1 className='md:text-[36px] md:leading-[44px] text-[18px] leading-[26px] font-semibold'>
              Let’s level up your brand
            </h1>
            <p className='md:text-extralarge text-medium text-neutral-60 md:my-8 my-4'>
              {'You can reach us anytime '}
              <a className='text-primary-hover' href="mailto:hellosansbrothers@gmail.com">
                hellosansbrothers@gmail.com
              </a>
            </p>

            <div className="w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6">
                <div>
                  <label
                    className="mb-3 mt-5 block text-medium text-neutral-100 font-medium"
                    htmlFor="name"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      className="peer block w-full rounded-md border border-neutral-30 py-[9px] pl-2 text-[14px] leading-[24px] outline-2 placeholder:text-neutral-60"
                      type="text"
                      name="text"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-3 mt-5 block text-medium text-neutral-100 font-medium"
                    htmlFor="surname"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      id="surname"
                      className="peer block w-full rounded-md border border-neutral-30 py-[9px] pl-2 text-[14px] leading-[24px] outline-2 placeholder:text-neutral-60"
                      type="text"
                      name="text"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="mb-3 mt-5 block text-medium text-neutral-100 font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    className="peer block w-full rounded-md border border-neutral-30 py-[9px] pl-2 text-[14px] leading-[24px] outline-2 placeholder:text-neutral-60"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className=''>


                  <label
                    className="mb-3 mt-5 block text-medium text-neutral-100 font-medium"
                    htmlFor="tel"
                  >
                    Phone number
                  </label>
                  <div className="relative flex flex-row">
                    <select
                      onChange={handleSwitchCode}
                      id="codes"
                      className={`
                        bg-neutral-10 text-neutral-60 text-medium rounded-l-md
                        border border-neutral-30 border-r-0
                        block p-2.5 pr-0
                      `}>
                        {Object.keys(countryCodes).map((code, index) => <option key={index} value={code}>{code}</option>)}
                      </select>
                      <input
                        id="tel"
                        className="peer block w-full rounded-r-md border border-neutral-30 border-l-0 py-[9px] pl-0 text-[14px] leading-[24px] outline-2 placeholder:text-neutral-60"
                        type="tel"
                        name="tel"
                        placeholder={`   +${countryCodes[code]} (555) 000-0000`}
                        required
                      />
                  </div>
              </div>

              <div>
                <label
                  className="mb-3 mt-5 block text-medium text-neutral-100 font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    className="h-[140px] peer block w-full rounded-md border border-neutral-30 py-[9px] pl-2 text-[14px] leading-[24px] outline-2 placeholder:text-neutral-60"
                    name="message"
                    placeholder="Leave us a message..."
                    required
                  />
                </div>
              </div>

            </div>

            <button className="md:mt-8 mt-6 md:text-large text-medium text-neutral-10 font-bold bg-neutral-100 rounded-full md:py-4 py-4 md:px-10 px-8">
              Get Started
            </button>
            <div className="flex h-8 items-end space-x-1">
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
