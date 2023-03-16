import Image from "next/image"



const ValuesCard = ({img, title, text}) => {
  return (
    <div className=" mx-w-[800px] lg:h-[151px] flex flex-col md:flex-row md:space-x-[50px] mb-[50px] last:mb-0 md:mb-[72px]">
      <div className=" cursor-pointer h-[151px] w-[150px] mx-auto lg:mx-0 rounded-[24px] transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-100 hover: duration-300">
      <Image
          src={img}
            alt="img"
            className="rounded-[24px]"
          />
      </div>
      <div className=" flex flex-col w-full text-center md:text-left lg:max-w-[602px] mt-8 md:mt-0">
        <h3 className=" font-manrope text-[24px] md:text-[28px] text-white"> {title}</h3>
      <p className=" font-open-sans lg:text-xl text-[#F1F1F1] mt-2 lg:mt-0">{ text}</p>
      </div>
    </div>
  )
}
export default ValuesCard
