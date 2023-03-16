import Image from "next/image"



const TeamCard = ({img, name, position}) => {
  return (
    <div className=" max-w-[300px] h-[470px] flex flex-col">
      <div className=" cursor-pointer h-[354px] w-full  rounded-[24px] transition ease-in-out delay-150  hover:-translate-y-3 hover:scale-100 hover: duration-300">
      <Image
          src={img}
            alt="img"
            className="rounded-[24px]"
          />
      </div>
      <h3 className=" pt-[24px] font-manrope text-[28px] text-black"> {name}</h3>
      <p className=" font-open-sans pt-[12px] text-xl text-primaryGray">{ position}</p>
    </div>
  )
}
export default TeamCard
