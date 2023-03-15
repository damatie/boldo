import Logo from "../../public/Logo-2.svg"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col w-full xl:w-[1400px] px-10 min-h-[474px] xl:pl-[50px] 2xl:pl-[100px] xl:pr-[179px] pt-[70px]  xl:pt-[100px]">
        <div className=" flex w-full flex-col lg:flex-row  justify-between">
          <div className="font-open-sans mb-10 xl:mb-0">
            <p className=" mb-10">
               <Image
                src={Logo}
                  alt="Logo"
                />
            </p>
            <p className=" max-w-[600px] xl:max-w-[300px] text-base  text-primaryGray">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="xl:pl-[200px] flex flex-row flex-1 justify-between ">
             <div className=" font-open-sans text-center lg:text-left mb-[40px] text-primaryGray">
            <p className=" font-bold text-primary text-xl mb-[30px] xl:mb-[50px] ">
              Landings
            </p>
            <ul className=" text-xl h-[150px]  flex flex-col justify-between ">
              <a href="#" className=" hover:text-primary">
                <li>
                Home
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Products
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Services
              </li>
              </a>
            </ul>
          </div>
          <div className=" font-open-sans text-center lg:text-left mb-[40px] text-primaryGray">
            <p className=" font-bold text-primary text-xl mb-[30px] xl:mb-[50px]">
              Company
            </p>
              <ul className=" text-xl h-[150px]  flex flex-col justify-between ">
              <a href="#" className=" hover:text-primary">
                <li>
                Home
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Careers
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Services
              </li>
              </a>
              </ul>
          </div>
          <div className=" font-open-sans text-center lg:text-left mb-[40px] text-primaryGray">
            <p className=" font-bold text-primary text-xl  mb-[30px] xl:mb-[50px]">
              Resources
            </p>
             <ul className=" text-xl h-[150px]  flex flex-col justify-between ">
              <a href="#" className=" hover:text-primary">
                <li>
                Blog 
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Products 
              </li>
              </a>
              <a href="#" className=" hover:text-primary">
                <li>
                Services
              </li>
              </a>
              </ul>
          </div>
         </div>

        </div>
        <div className=" w-full font-open-sans text-base text-center lg:text-left mb-[40px] text-primaryGray">
          <p>
            All rights reserved.
          </p>
        </div>

      </div>
    </>
  )
}
export default Footer