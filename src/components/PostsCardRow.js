import { Icon } from '@iconify/react';
import Image from 'next/image';
const PostsCardRow = ({
  category,
  date,
  img,
  text,
  userImg,
  userName,
  url
}) => {
  return (
    <div className={`xl:max-w-[1100px]  2xl:max-w-[1200px]  flex flex-col lg:flex-row mx-auto mb-10 items-center`}>
      <a href='/blog'>
        <div className=" cursor-pointer transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-100 hover: duration-300  w-full flex flex-col xl:h-[386px] rounded-[24px] object-contain ">
          <Image
            src={img}
          alt="services"
          className='rounded-[24px] '
          />
      </div>
      </a>
      <div className='xl:ml-[70px] 2xl:ml-[100px] mt-4 xl:mt-0'>
        <div className="mt-6">
        <span className=' font-open-sans flex flex-row  space-x-4'>
           <p className=" font-bold text-base text-black mb-2.5">
            {category}
          </p>
          <p className=' text-primaryGray text-base'>
            {date}
          </p>
        </span>
        <p className="  text-black xl:max-w-[543px] text-2xl xl:leading-[72px] lg:text-[48px] xl:h-[145px]  overflow-hidden">
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
   </div>
  )
}
export default PostsCardRow