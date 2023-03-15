import { Icon } from '@iconify/react';
import Image from 'next/image';
const PostsCard = ({
  category,
  date,
  img,
  text,
  userImg,
  userName,
  url
}) => {
  return (
    <div className={` max-w-[300px] h-[424px] flex flex-col mx-auto mb-10`}>
      <a href='/blog'>
        <div className=" cursor-pointer transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-100 hover: duration-300 border w-full flex flex-col h-[209px] rounded-[12px] object-contain ">
          <Image
            src={img}
          alt="services"
          className='rounded-[12px] '
          />
      </div>
      </a>
      <div className="mt-6">
        <span className=' font-open-sans flex flex-row  space-x-4'>
           <p className=" font-bold text-base text-black mb-3">
            {category}
          </p>
          <p className=' text-primaryGray text-base'>
            {date}
          </p>
        </span>
        <p className=" text-blsck text-xl h-[99px]  overflow-hidden">
         {text}
        </p>
      </div>
      <div className=' flex flex-row mt-[20px] space-x-3'>
        <span className=' h-[32px] w-[32px] rounded-full border'>
          <Image
              src={userImg}
              alt="user"
              className='rounded-full '
              />
        </span>
        <p className=' font-open-sans text-base text-black'>Rachel Green</p>
      </div>
   </div>
  )
}
export default PostsCard