import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Icon } from '@iconify/react';
import Ts1 from '../../public/ts-1.svg'
import Ts2 from '../../public/ts-2.svg'
import Ts3 from '../../public/ts-3.svg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonies = () => {
  const [initial, setInitial] = useState(0)
  const [current, setCurrent] = useState(6)
  useEffect(() => {
    
  },[initial,current])

  const testimonies = [
    {
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      position: 'Manager @ Howarts',
      img:Ts1
    },
    {
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      position: 'Manager @ Slytherinr',
      img:Ts2
    },
    {
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      position:'Team Leader @ Gryffindor',
      img:Ts3
    },
       {
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      position: 'Manager @ Howarts',
      img:Ts1
    },
    {
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      position: 'Manager @ Slytherinr',
      img:Ts2
    },
    {
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      position:'Team Leader',
      img:Ts3
    }
  ]

  const CustomRightArrow = ({ next, previous, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
    } = rest;
    // console.log(onClick)
  // onMove means if dragging or swiping in progress.
  return (<div className=" flex absolute -top-16  md:-top-20 xl:-top-32 right-0 flex-row flex-1 justify-end space-x-5 xl:space-x-7 mb-14">
        <button
          onClick={() => previous()}
          className=" cursor-pointer btn text-primary xl:h-[72px] xl:w-[72px] border-primary hover:bg-white bg-white btn-circle">
          <Icon icon="material-symbols:arrow-back"  className=" text-2xl xl:text-4xl"/>
        </button> 
        <button
          onClick={() => next()}
          className="btn text-primary xl:h-[72px] xl:w-[72px] border-primary hover:bg-white bg-white btn-circle">
          <Icon icon="material-symbols:arrow-forward"  className=" text-2xl  xl:text-4xl"/>
      </button> 
    </div>);
};
  return (
  <div className=" flex flex-col  w-[350px] md:w-[700px]  lg:w-[700px] xl:w-full relative mt-[100px]  md:mt-[75px]  mx-auto">
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomRightArrow/>}
      >
       {testimonies.slice(initial,current).map((item, index) => (
          <div key={index} className=" font-open-sans bg-white mr-3 rounded-[12px] max-w-[350px] p-[40px] ">
          <p className=" font-open-sans text-2xl">
           {item.text}
          </p>
          <div className=" flex flex-row mt-10 space-x-4  items-center">
            <span className=" h-[58px] w-[58px] rounded-full object-contain bg-slate-300">
              <Image
                src={item.img}
                alt="image"
                className="rounded-full"
                />
            </span>
            <span className=" flex flex-col">
                <p className=" font-bold text-base text-primary">{item.name}</p>
                <p className=" text-sm">{item.position}</p>

            </span>
          </div>
        </div>
        ))}
      </Carousel>
    
    </div>
  )
}

export default Testimonies