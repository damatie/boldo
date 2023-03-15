const TextH1 = ({
  textStyle,
  text
}) => {
  return (
    <h1 className={` text-[28px] lg:text-[40px]  xl:text-[48px] h-[100px] lg:h-auto xl:h-[138px] xl:leading-[70px]  text-white  font-manrope lg:max-w-[550px] md:max-w-[550px] ${textStyle}`}>
    {text}
  </h1>
  )
}
export default TextH1