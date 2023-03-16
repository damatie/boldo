import TextH1 from "./TextH1"
import Button from "./Button"


const CtaCard = () => {
  return (
        <div className="overflow-hidden relative xl:w-[1200px] px-5 py-10 lx:py-0 bg-primary flex flex-col justify-center xl:h-[391px] mx-auto rounded-[12px] ">
          <div className=" w-full z-30">
            <TextH1
              text={"An enterprise template to ramp up your company website"}
              textStyle={'xl:max-w-[716px] text-center mx-auto '}
            />
              <div className=" flex flex-col mt-16 md:mt-7 px-5 lg:flex-row justify-center lg:mt-[47px] items-center gap-3 lg:gap-4">
              <input
                placeholder="Your email address"
                className="h-[56px] bg-white px-8 w-full mb-2 xl:mb-0 rounded-full outline-none md:max-w-[370px] placeholder:text-xl placeholder:text-black "
                type="text"
              />
              <Button
                label="Start now"
              btnStyle={`  border-primary border-2 w-[270px]  lg:text-xl xl:w-[210px] h-[60px] rounded-full !bg-[#65E4A3] font-bold`}
              />

            </div>
          </div>
          <div className="  absolute md:-right-[90.58%] md:-top-[320.57%] -top-[269.57%]  xl:-right-[46.58%] xl:-top-[269.57%] rounded-full  h-[1293px] w-[1293px] bg-[#1C3D5B]">
          </div>
        </div>
  )
}
export default CtaCard
