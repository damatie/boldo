const Button = ({
  label,
  onclick,
  variant = 'solid',
  btnStyle
  
}) => {
  return (
    <button className={` bg-white !font-open-sans text-[#0A2640] font-bold h-[40px] w-[128px] ${btnStyle}  rounded-[24px]`}>
      {label}
    </button>
  )
}
export default Button