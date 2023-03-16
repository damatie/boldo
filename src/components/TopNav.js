import Image from "next/image"
import { useState } from "react";
import { Icon } from '@iconify/react';
import Logo from "../../public/Logo.svg"
import Logo2 from "../../public/Logo-2.svg"
import Button from "./Button"
import Link from 'next/link';

 const navList = [
    {
      name: "Product",
      page:'#'
    },
    {
      name: "Services",
      page:'#'
    },
    {
      name: "About",
      page:'about'
    }

    ]
const TopNav = ({ isLight = false }) => {

  const [showMobileNav, setShowMobileNav]=useState(false)
  

  const handleMobileNav = (value) => {
    setShowMobileNav(value)
  }

 
  return ( 
    <div className=" w-full py-[46px]">
      <nav className=" flex flex-row xl:w-[1200px] 2xl:max-w-screen-2xl  mx-auto md:h-[20px] lg:h-auto ">
      <div className=" w-[200px] z-40">
          <Link  href="/">
            <Image
              src={isLight? Logo2: Logo}
              alt="Boldo"
            />
      </Link>
      </div>
      <div className=" flex  z-30 flex-row flex-1 justify-end space-x-8">
        <ul className=" hidden lg:flex items-center justify-between space-x-8 topNav">
          {navList.map((item, index) => (
            <Link  href={`/${item.page}`} key={index}>
            <li className={`${isLight? ' text-primary' : 'text-white '}  !font-open-sans font-semibold`}>
            {item.name}
            </li>
          </Link>
         ))}
          
        </ul>
        <div>
          <Icon
            onClick={()=>handleMobileNav(true)}
            icon="fontisto:nav-icon-a"
            className={` cursor-pointer block lg:hidden text-2xl mt-2.5 ml-3 ${isLight? ' text-primary':' text-white'}`}
          />
        <Button
          label={'Log In'}
          btnStyle={` hidden lg:block ${isLight? '!border-2 border-primary':''}`}
            />
      </div>
      </div>
      </nav>
      { showMobileNav&& <MobilNav
        isLight={isLight}
        handleMobileNav={handleMobileNav}
      />}
    </div>
  )
}
export default TopNav

export const MobilNav = ({isLight, handleMobileNav}) => {
  return (
    <div className=" animate-fade-up fixed h-screen w-screen top-0 left-0 bg-red-200 z-50">
       <div className=" bg-white h-full flex flex-col justify-center items-center ">
        <ul className=" flex flex-col items-center justify-between  ">
        <Icon
          onClick={()=>handleMobileNav(false)}
          icon="material-symbols:close-rounded"
          className={` cursor-pointer block lg:hidden text-[50px] mb-5 text-primary`}
        />
          {navList.map((item, index) => (
            <Link  href={`/${item.page}`} key={index}>
              <li
                onClick={()=>handleMobileNav(false)}
                className={` py-4 text-primary  !font-open-sans font-semibold`}>
            {item.name}
            </li>
          </Link>
         ))}
          
        </ul>
        <div>
        <Button
          label={'Log In'}
          btnStyle={` mt-5  ${isLight? '!border-2 border-primary':''}`}
            />
      </div>
      </div>
  </div>)
}
