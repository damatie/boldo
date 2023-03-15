const TextH2 = ({
  textStyle,
  text
}) => {
  return (
    <h1 className={` text-[28px] lg:text-[40px]  xl:text-[36px] h-auto lg:h-auto xl:h-[164px] xl:leading-[56px]  text-black  font-manrope lg:max-w-[550px] md:max-w-[493px] ${textStyle}`}>
    {text}
  </h1>
  )
}
export default TextH2