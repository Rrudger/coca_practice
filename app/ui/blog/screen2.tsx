import Post from '@/app/ui/blog/post';
import { PostType } from '@/app/lib/definitions';

export default function Screen2({ posts }: { posts: PostType[] }) {
  return (
    <div className='w-screen flex justify-center items-between bg-neutral-100'>
      <div className='max-w-7xl md:py-24 py-8 md:px-0 px-6 flex flex-col justify-around'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-12 md:gap-y-16 gap-8'>
          <div className='flex flex-col md:gap-y-16 gap-y-8'>
            <Post
              id={posts[0].id}
              image={posts[0].photo}
              header={posts[0].title}
              text={posts[0].description}
              high={true}
            />
            <Post
              id={posts[1].id}
              image={posts[1].photo}
              header={posts[1].title}
              text={posts[1].description}
              high={false}
            />
          </div>
          <div className='flex flex-col md:gap-y-16 gap-y-8'>
            <Post
              id={posts[2].id}
              image={posts[2].photo}
              header={posts[2].title}
              text={posts[2].description}
              high={false}
            />
            <Post
              id={posts[3].id}
              image={posts[3].photo}
              header={posts[3].title}
              text={posts[3].description}
              high={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
