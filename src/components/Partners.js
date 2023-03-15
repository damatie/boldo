import Photo1 from "../../public/p-1.svg"
import Image from "next/image"
import Photo2 from "../../public/p-2.svg"

const Partners = () => {
  return (
    <>
      <div className="carousel lg:max-w-[1000px]   xl:max-w-[1173px] partner-slide carousel-center  mt-[50px] pb-[50px] xl:pb-0 lg:mt-[75px] p-4 space-x-4  rounded-box mx-auto">
      <div className="carousel-item   ">
        <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item ">
        <Image
          src={Photo2}
          alt="image"
          className="rounded-box "
        />
      </div> 
      <div className="carousel-item">
      <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
         <Image
          src={Photo2}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
        <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
        <Image
          src={Photo2}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
        <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div>
       <div className="carousel-item">
         <Image
          src={Photo2}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
        <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item">
        <Image
          src={Photo2}
          alt="image"
          className="rounded-box"
        />
      </div> 
      <div className="carousel-item ">
        <Image
          src={Photo1}
          alt="image"
          className="rounded-box"
        />
      </div>
      </div>
    </>
  )
}
export default Partners