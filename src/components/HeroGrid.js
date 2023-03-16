import Image from "next/image"
import G1 from "../../public/g-1.svg"
import G2 from "../../public/g-2.svg"
import G3 from "../../public/g-3.svg"
import G4 from "../../public/g-4.svg"
import G5 from "../../public/g-5.svg"


const HeroGrid = () => {
  return (
    <div className="gap-3 xl:gap-0 xl:h-[600px] xl:w-[1100px] flex  justify-between flex-row mx-auto mt-10 md:mt-16 xl:mt-20 animate-fade-in">
      <div className=" flex flex-col  xl:h-[632px] justify-between">
        <div className=" xl:w-[300px] rounded-[24px] ">
           <Image
          src={G1}
            alt="img"
            className="rounded-[24px]"
          />
        </div>
        <div className=" xl:w-[300px] xl:h-[303px] rounded-[24px] ">
         <Image
          src={G2}
            alt="img"
            className="rounded-[24px]"
          />
        </div>

      </div>
      <div className=" flex flex-col">
        <div className=" xl:w-[400px] xl:h-[632px] rounded-[24px] ">
          <Image
          src={G3}
            alt="img"
             className="rounded-[24px]"
          />
        </div>
       

      </div>
      <div className=" flex flex-col   xl:h-[632px] justify-between ">
        <div className=" xl:w-[300px] xl:h-[305px] rounded-[24px] ">
        <Image
          src={G4}
            alt="img"
            className="rounded-[24px]"
          />
        </div>
        <div className=" xl:w-[300px] xl:h-[287px] rounded-[24px] ">
         <Image
          src={G5}
            alt="img"
            className="rounded-[24px]"
          />
        </div>

      </div>

    </div>
  )
}
export default HeroGrid