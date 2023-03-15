import Image from "next/image"
import Logo from "../../public/Logo.svg"
import Button from "./Button"

const TopNav = () => {

  const navList= ['Product','Services','About']
  return ( 
    <div className=" w-full">
      <nav className=" flex flex-row xl:w-[1173px] 2xl:max-w-screen-2xl mx-auto py-[46px]">
      <div className=" w-[200px] z-40">
      <Image
        src={Logo}
        alt="Boldo"
      />
      </div>
      <div className=" flex  z-30 flex-row flex-1 justify-end space-x-8">
        <ul className=" hidden lg:flex items-center justify-between space-x-8 topNav">
          {navList.map((item, index) => (
            <a href="#" key={index}>
            <li className=" text-white  !font-open-sans font-semibold">
            {item}
            </li>
          </a>
         ))}
          
        </ul>
        <div>
        <Button
          label={'Log In'}
        />
      </div>
      </div>
    </nav>
    </div>
  )
}
export default TopNav