import Image from 'next/image';
import { PostType } from '@/app/lib/definitions';

export default function PostPage({ post }: { post: PostType }) {
  const text = 'Depending on the input, this can result in using a lot of processing power and time. The whole process would take approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User does not need to see the result immediately. System can later notify the user about the result, when the process finishes. This information is the key that we need to leverage on when developing our solution. So here’s how we did it.';
  const authorDescriprion = 'Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and services industry, with plenty of hands-on experience to back it up.';
  const icons = ['facebook', 'twitter', 'instagram', 'linkedin'];
  const date = new Date(post.date);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div>
      <h1 className='md:text-[72px] text-h4 font-bold'>
        {post.title}
      </h1>
      <div className='md:mb-12 md:mt-20 my-6 flex md:flex-row flex-col justify-between'>
        <div className='flex flex-row items-center'>
          <Image
            className='md:size-[56px] size-[32px] rounded-full md:mr-6 mr-4 object-cover object-top'
            src="/user.png"
            height={200}
            width={200}
            alt={`${post.author} photo`}
          />
          <div>
            <p className='md:text-extralarge text-medium font-bold'>
              {post.author}
            </p>
            <p className='md:text-largeplus text-medium text-neutral-60 font-medium'>
              {post.position}
            </p>
          </div>
        </div>
        <div className='md:mt-0 mt-2 flex justify-between items-end md:text-extralarge text-medium text-neutral-60'>
          <p>
            10 min read&nbsp;
          </p>
          <p>
            {`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
          </p>
        </div>
      </div>
      <Image
        className='width-full object-cover object-top'
        src={post.photo}
        height={550}
        width={1000}
        alt="image for section blog"
      />
      <div className='md:mt-12 mt-6 md:text-extralarge text-medium'>
        {text}
      </div>
      <div className='md:w-2/3 md:mt-12 mt-8 flex flex-row'>
        <Image
          className='md:size-[200px] size-[150px] md:mr-6 mr-4 object-cover object-top'
          src="/user.png"
          height={200}
          width={200}
          alt={`${post.author} photo`}
        />
        <div className='flex flex-col'>
        <div className='flex flex-row justify-start my-4 gap-x-4'>
          {icons.map((name) => <Image
            key={name}
            className='md:size-[32px] size-[20px] rounded-full p-px invert bg-neutral-40 cursor-pointer'
            src={`/icons/${name}.svg`}
            width='24'
            height='24'
            alt={`${name} icon`}
             />)}
        </div>
          <p className='md:text-large text-medium text-neutral-60'>
            Written By
          </p>
          <h4 className='md:mt-8 md:mb-4 mt-4 mb-2 md:text-h4 text-largeplus font-semibold'>
            {post.author}
          </h4>
          <p className='md:text-large text-medium text-neutral-60'>
            {post.position}
          </p>
          <p className='md:block hidden mt-6 text-large'>
            {authorDescriprion}
          </p>
        </div>

      </div>
      <p className='md:hidden block mt-4 text-medium text-neutral-60'>
        {authorDescriprion}
      </p>
    </div>
  )
}
