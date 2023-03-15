import TopNav from "@/components/TopNav";
import HeroCard from "@/components/HeroCard";
import Partners from "@/components/Partners";
import TextH1 from "@/components/TextH1";
import ServicesCard from "@/components/ServicesCard";
import ServicesCardRow from "@/components/ServicesCardRow";
import ServicesCardSecondRow from "@/components/ServicesCardSecondRow";
import Image from "next/image";
import Testimonies from "@/components/Testimonies";
import Collapseable from "@/components/Collapseable";
import PostsCard from "@/components/PostsCard";
import Button from "@/components/Button";
import Link from 'next/link'
import Footer from "@/components/Footer";

import sImg1 from '../../public/s-1.svg'
import sImg2 from '../../public/s-2.svg'
import sImg3 from '../../public/s-3.svg'
import con1 from '../../public/con-1.svg'
import con2 from '../../public/con-2.svg'
import hr1 from '../../public/hr-1.svg'
import { listAcc,blogPost } from "@/utils/exportData";

const HomeScreen = () => {
  const services =[
    {
      title: 'Cool feature title',
      img: sImg1,
      text: ' Learning curve network effects return on investment.',
      url: '#',
    },
      {
      title: 'Even cooler feature',
      img: sImg2,
      text: ' Learning curve network effects return on investment.',
      url: '#',
    },
        {
      title: 'Cool feature title',
      img: sImg3,
      text: ' Learning curve network effects return on investment.',
      url: '#',
    }
  ]
  const list = [
    {
    title: ' We connect our customers with the best?',
    content:'Funding handshake buyer business-to-business metrics iPad partnership.'
    },
    {
    title: ' Android research & development rockstar? ',
    content:'Funding handshake buyer Android research & development rockstar? .'
  }
  ]

  return ( 
    <main className=" w-full bg-white ">
      <section className=" relative bg-primary xl:h-[798px] px-5 md:px-16 xl:px-0 overflow-hidden">
        <TopNav />
        <HeroCard />
        <Partners />
         <div className=" z-10 opacity-70 absolute xl:-right-[739px] xl:-top-[796px] 2xl:-right-[639px] 2xl:-top-[796px]  rounded-full w-[1293px] h-[1293px] bg-[#1C3D5B]"></div>
      </section>
      <section className=" bg-white py-20 px-5 md:px-16 xl:px-0 ">
        <p className=" text-primaryGray font-open-sans text-center  text-xl mb-5 `">Our Services</p>
        <TextH1 text={`Handshake infographic mass market crowdfunding iteration.`} textStyle={` text-center  sm:max-w-[843px] mx-auto !text-black max-w-[600px] xl:max-w-[900px] `} />
        <div className=" w-full xl:w-[1137px] 2xl:max-w-screen-2xl  mx-auto mt-[90px] lg:mt-[78px] grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((item, index) => (
            <ServicesCard
            key={index}
            title={item.title}
            img={item.img}
            text={item.text}
          />
          ))}
        </div>
      </section>
      <section className=" bg-white lg:py-16  px-5 md:px-16 xl:px-0 ">
        <ServicesCardRow
          img={con1}
        />
      </section>
      <section className=" bg-white lg:py-5  px-5 md:px-16 xl:pb-20 xl:px-0 ">
        <ServicesCardSecondRow
          img={con2}
        />
      </section>
      <section className=" flex flex-col  lg:py-16 xl:pb-14  px-5 md:px-16 xl:px-0 md:h-[720px] lg:h-[767px] bg-primary ">
        <div className="xl:w-[1137px] mx-auto mt-[40px] md:mt-[80px] xl:mt-[40px]">
          <TextH1
          text={'An enterprise template to ramp up your company website'}
          textStyle={` xl:max-w-[713px] text-left `}
          />
          <Testimonies/>
        </div>
      </section>
      <section className=" bg-white lg:py-24 py-8 md:py-14  px-5 md:px-16 xl:pb-20 xl:px-0 ">
        <div className=" xl:w-[1100px] xl:h-[403px] mx-auto rounded-[24px] mt-[30px]">
          <Image
          src={hr1}
            alt="image"
          />
        </div>
        <div className="flex  flex-col xl:flex-row xl:w-[1100px] mx-auto mt-7  lg:mt-12 justify-between">
          <p className="xl:max-w-[500px] text-[26px] lg:text-[36px] font-manrope">
            We connect our customers with the best, and help them keep up-and stay open.
          </p>
          <div className="xl:max-w-[500px] mt-4 pb-8 lg:mb-0">
            <Collapseable
              list={listAcc}
            />
          </div>
        </div>
      </section>
       <section className=" bg-white lg:py-20 lg:pb-0 px-5 md:px-16 xl:px-0 ">
        <p className=" text-primaryGray font-open-sans text-center  text-xl mb-5 `">Our Blog</p>
        <TextH1 text={`Value proposition accelerator product management venture`} textStyle={` text-center  sm:max-w-[843px] mx-auto !text-black max-w-[600px] xl:max-w-[900px] `} />
        <div className=" w-full xl:w-[1137px] 2xl:max-w-screen-2xl  mx-auto mt-[90px] lg:mt-[78px] grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogPost.map((item, index) => (
            <PostsCard
            key={index}
            category={item.category}
            date={item.date}
            img={item.img}
            text={item.text}
            userImg={item.userImg}
            userName={item.userName}
          />
            ))}
        </div>
        <div className=" flex flex-col w-full items-center lg:pt-10 pb-10">
          <Link href="/blog">
          <Button
            label="Load more"
            btnStyle={` border-primary border-2 w-[219px] h-[60px] rounded-full lg:text-xl `}
            />
            </Link>
        </div>
      </section>
       <section className=" bg-white lg:py-20 py-8 md:py-14  px-5 md:px-16 xl:pb-20 xl:px-0 ">
        <div className="overflow-hidden relative xl:w-[1200px] px-5 py-10 lx:py-0 bg-primary flex flex-col justify-center xl:h-[391px] mx-auto rounded-[12px] ">
          <div className=" w-full z-30">
            <TextH1
              text={"An enterprise template to ramp up your company website"}
              textStyle={'xl:max-w-[716px] text-center mx-auto '}
            />
              <div className=" flex flex-col mt-16 md:mt-7 lg:flex-row justify-center lg:mt-[47px] items-center gap-3 lg:gap-4">
              <input
                placeholder="Your email address"
                className="h-[56px] px-8 w-full rounded-full outline-none md:max-w-[370px] placeholder:text-xl placeholder:text-black "
                type="text"
              />
              <Button
                label="Start now"
              btnStyle={` border-primary border-2   lg:text-xl w-[210px] h-[60px] rounded-full bg-[#65E4A3] font-bold`}
              />

            </div>
          </div>

          <div className=" absolute md:-right-[90.58%] md:-top-[320.57%] -top-[269.57%]  xl:-right-[46.58%] xl:-top-[269.57%] rounded-full  h-[1293px] w-[1293px] bg-[#1C3D5B]">

          </div>
        </div>
      </section>
      <sectin>
        <Footer/>
      </sectin>
     
    </main>
  )
}
export default HomeScreen