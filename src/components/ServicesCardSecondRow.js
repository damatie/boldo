import { Icon } from '@iconify/react';
import Image from 'next/image';
import TextH2 from './TextH2';
import Star from '../../public/star.svg'
import Eye from '../../public/eye.svg'
import Sun from '../../public/sun.svg'
import Button from './Button';

const ServicesCardSecondRow = ({
  img,
}) => {
  const outLine = [
    {
      title: ' We connect our customers with the best.',
      isActive: true,
      icon:Star
    },
      {
      title: ' We connect our customers with the best.',
      isActive: false,
      icon:Eye
    },
      {
      title: ' Business-to-consumer long tail',
      isActive: false,
      icon:Sun
    }
  ]
  return (
    <div className={`flex  flex-col-reverse mt-32 xl:mt-0 xl:flex-row mx-auto mb-10 xl:w-[1100px] items-center  justify-between`}>
      <div className="mt-6 lg:mt-0 xl:w-[493px] ">
        <TextH2
          text={'We connect our customers with the best, and help them keep up-and stay open.' }
        />
        <div className="w-full mt-16">
          {outLine.map((list, index) => (
            <span key={index} className={` cursor-pointer rounded flex flex-row mb-6 lg:w-[500px] h-[68px] items-center px-3  space-x-6 ${list.isActive ? 'bg-primary  text-white' : 'bg-white text-black  transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-100 hover: duration-300'} 
            drop-shadow-boldoSm `}>
            <p>
              <Image
                src={list.icon}
                alt="icon"
              />
            </p>
            <p className=" max-[387px] text-base lg:text-xl font-open-sans lg:mt-0.5 ">
             {list.title}
            </p>
          </span>
         ))}
        </div>
      </div>
        <div className=" xl:w-[444px] flex flex-col xl:h-[692px] rounded-[24px] ">
          <Image
            src={img}
          alt="services"
          />
      </div>
   </div>
  )
}
export default ServicesCardSecondRow