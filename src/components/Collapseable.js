import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

const Collapseable = ({ list}) => {
  const [isActive, setisActive] = useState(null)

  useEffect(() => {
    
  },[isActive,setisActive])

  console.log(isActive,)
  return (
    <>
      {list.map((item, index) => (
        <div tabIndex={item.id} key={index} className=" font-open-sans collapse  border-b border-[#C4C4C4] bg-white">
        <div
          onClick={()=>setisActive(item.id)}
          className="collapse-title text-base xl:text-[20px] font-medium relative">
       {item.title}  <span className=' h-[28px] w-[28px] absolute right-0 bg-primary rounded-full'> <Icon icon="tabler:chevron-down"  className=" text-white text-xl mt-1 ml-1 "/></span>
      </div>
      <div className="collapse-content"> 
        <p>{item.content} </p>
      </div>
      </div>
      ))
        
      }
    </>
  )
}
export default Collapseable