import Logo from "../../public/Logo-2.svg"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className=" xl:w-[1200px] mx-auto flex flex-col px-10 xl:px-0 min-h-[474px] pt-[70px]  xl:pt-[100px]">
        <div className=" flex w-full flex-col lg:flex-row  ">
          <div className=" xl:w-[300px] font-open-sans mb-10 xl:mb-0 xl:mr-[179px]">
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
          <div className="  xl:max-w-[642px] flex-col flex md:flex-row flex-1 justify-between ">
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
                <li className=" flex   items-center flex-col xl:flex-row">
                    Careers
                    <span className="mt-2 lx:mt-0 animate-bounce ml-3 w-[72px] h-[30px] flex flex-col justify-center items-center rounded-full text-[13px] bg-[#65E4A3] font-bold text-primary">
                      Hiring!
                    </span>
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
              <a href="/blog" className=" hover:text-primary">
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
        <div className=" -mt-10 w-full xl:w-auto font-open-sans text-base text-center lg:text-left mb-[40px] text-primaryGray">
          <p>
            All rights reserved.
          </p>
        </div>

      </div>
    </>
  )
}
export default Footer