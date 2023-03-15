import { Icon } from '@iconify/react';
import Image from 'next/image';
const ServicesCard = ({
  cardStyle,
  title,
  img,
  text,
  url
}) => {
  return (
    <div className={` max-w-[300px] h-[563px] flex flex-col mx-auto mb-10`}>
      <div className="w-full flex flex-col h-[354px] rounded-[24px] ">
          <Image
            src={img}
          alt="services"
          />
      </div>
      <div className="mt-6">
        <h3 className=" font-open-sans text-2xl text-black mb-3">
          {title}
        </h3>
        <p className=" text-primaryGray text-xl">
         {text}
        </p>
        <button className=" flex mt-6 font-open-sans font-bold text-xl text-primary border-b py-2.5
        border-primary
        ">
          <span>Explore page</span>
          <Icon icon="material-symbols:arrow-forward"  className=" text-2xl mt-1 ml-3"/>
        </button>
      </div>
   </div>
  )
}
export default ServicesCard