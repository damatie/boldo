import Image from "next/image"
import Logo from "../../public/Logo.svg"
import Logo2 from "../../public/Logo-2.svg"
import Button from "./Button"
import Link from 'next/link';

const TopNav = ({isLight=false}) => {

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
  return ( 
    <div className=" w-full py-[46px]">
      <nav className=" flex flex-row xl:w-[1173px] 2xl:max-w-screen-2xl  mx-auto md:h-[20px] lg:h-auto ">
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
        <Button
              label={'Log In'}
              btnStyle={`${isLight? '! border-2 border-primary':''}`}
        />
      </div>
      </div>
    </nav>
    </div>
  )
}
export default TopNav