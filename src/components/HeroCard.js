import Image from "next/image"
import HeroImg from "../../public/hero-graphics.svg"
import Button from "./Button"
import TextH1 from "./TextH1"

const HeroCard = () => {
  return (
    <div className=" h-auto relative items-center  md:mt-[60px] lg:mt-3 w-full flex flex-col-reverse 
    lg:flex-row  xl:w-[1173px] 2xl:max-w-screen-2xl mx-auto">
     
      <div className="  flex-1 flex-col">
        <TextH1 text={`Save time by building fast with Boldo Template ` } textStyle=" sm:h-auto" />
        <p className="  lg:max-w-[400px]  xl:max-w-[567px] lg:mt-4 lg:leading-[28px]  pb-10 xl:pb-auto font-open-sans text-base text-[#F1F1F1]">
          Funding handshake buyer business-to-business metrics iPad partnership. <br/> First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="flex flex-col sm:flex-row flex-1 mt-[40px md:space-x-5">
          <Button
            label={'Buy template'}
            btnStyle={'!h-[60px] mb-5 !bg-secondary w-[247px] mx-auto lg:mx-0 px-5 lg:w-[247px] !rounded-[56px]  font-bold text-[20px]'}
          />
          <Button
            label={'Explore'}
            btnStyle={'!h-[60px] w-[247px] mx-auto lg:mx-0 text-white !bg-primary border-2 lg:w-[187px] !rounded-[56px]  font-bold text-[20px]'}
          />
        </div>
      </div>
      <div className="mb-5 lg:mb-0 xl:w-[494px] h-auto pb-2 z-30 ">
        <Image
        src={HeroImg}
          alt="Hero image"
          height={423}
        />
      </div>
    </div>
  )
}
export default HeroCard