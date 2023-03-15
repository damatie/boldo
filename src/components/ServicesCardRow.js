import { Icon } from '@iconify/react';
import Image from 'next/image';
import TextH2 from './TextH2';
import Check from '../../public/check.svg'
import Button from './Button';

const ServicesCardRow = ({
  img,
}) => {
  const outLine = [
    ' We connect our customers with the best.',
    'Advisor success customer launch party.',
    'Business-to-consumer long tail.'
      
  ]
  return (
    <div className={` flex flex-col xl:flex-row mx-auto mb-10 xl:w-[1137px] items-center  justify-between`}>
      <div className="xl:w-[494px] flex flex-col xl:h-[610px] rounded-[24px] ">
          <Image
            src={img}
          alt="services"
          />
      </div>
      <div className="mt-6 lg:mt-0 xl:w-[493px] ">
        <TextH2
          text={'We connect our customers with the best, and help them keep up-and stay open.' }
        />
        <div className="w-ful mt-10">
          {outLine.map((list, index) => (
            <span key={index} className="flex flex-row mb-6  space-x-6">
            <p>
              <Image
                src={Check}
                alt="Check"
              />
            </p>
            <p className=" max-[387px] text-xl font-open-sans text-black lg:mt-0.5 ">
             {list}
            </p>
          </span>
         ))}
        </div>
        <div className="mt-14">
          <Button
            btnStyle={'!bg-primary text-white h-[60px] w-[210px] rounded-[56px] font-open-sans text-xl'}
            label="Start now"
          />
        </div>
       
      </div>
   </div>
  )
}
export default ServicesCardRow