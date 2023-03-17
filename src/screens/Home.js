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
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";


import con1 from '../../public/con-1.svg'
import con2 from '../../public/con-2.svg'
import hr1 from '../../public/hr-1.svg'
import { listAcc,blogPost,services } from "@/utils/exportData";

const HomeScreen = () => {

  return ( 
    <main className=" w-full bg-white  animate-fade-up">
      <section className=" relative bg-primary xl:h-[798px] px-5 md:px-16 xl:px-0 overflow-hidden">
        <TopNav />
        <HeroCard />
        <Partners />
         <div className=" z-10 opacity-100 absolute xl:-right-[739px] xl:-top-[796px] 2xl:-right-[639px] 2xl:-top-[796px]  rounded-full w-[1293px] h-[1293px] bg-[#1C3D5B]"></div>
      </section>
      <section className=" bg-white py-20 px-5 md:px-16 xl:px-0 ">
        <p className=" text-primaryGray font-open-sans text-center  text-xl mb-5 `">Our Services</p>
        <TextH1 text={`Handshake infographic mass market crowdfunding iteration.`} textStyle={` text-center  sm:max-w-[843px] mx-auto !text-black max-w-[600px] xl:max-w-[900px] `} />
        <div className=" w-full  xl:w-[1137px] 2xl:max-w-screen-2xl  mx-auto mt-[90px] lg:mt-[78px] flex flex-col md:flex-row flex-wrap items-center md:justify-between ">
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
      <section className=" flex flex-col h-auto mb-5 xl:mb-0 lg:py-16 xl:pb-14  px-5 md:px-16 xl:px-0 md:h-[720px] lg:h-[767px] bg-primary ">
        <div className="xl:w-[1110px] mx-auto mt-[40px] md:mt-[80px] xl:mt-[40px]">
          <TextH1
          text={'An enterprise template to ramp up your company website'}
          textStyle={` xl:max-w-[713px] text-left `}
          />
            <Testimonies/>
        </div>
      </section>
      <section className=" bg-white lg:py-24 py-8 md:py-14  px-5 md:px-16 xl:pb-20 xl:px-0 ">
        <div className=" bg-slate-100 xl:w-[1100px] xl:h-[403px] mx-auto rounded-[24px] mt-[30px]">
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
        <div className=" w-full xl:w-[998px] 2xl:max-w-screen-2xl  mx-auto mt-[90px] lg:mt-[78px] grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogPost.slice(0,3).map((item, index) => (
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
       <CtaCard/>
      </section>
      <sectin>
        <Footer/>
      </sectin>
     
    </main>
  )
}
export default HomeScreen
