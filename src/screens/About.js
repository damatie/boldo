import TopNav from "@/components/TopNav";
import TextH1 from "@/components/TextH1";
import HeroGrid from "@/components/HeroGrid";
import TeamCard from "@/components/TeamCard";
import { teams,valuesList } from "@/utils/exportData";
import ValuesCard from "@/components/ValuesCard";
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";


const AboutScreen = () => {
  return (
    <main className=" w-full bg-white animate-fade-up ">
      <section className=" relative bg-primary h-[500px] md:h-[550px] xl:h-[651px] px-5 md:px-16 xl:px-0 ">
        <TopNav />
        <div className=" text-center mt-6">
          <p className=" font-open-sans  text-xl text-[#F1F1F1] xl:pb-[12px]">About</p>
          <div className=" max-w-[842px] mx-auto   ">
            <TextH1
              text="We love to make great things, things that matter."
              textStyle={`xl:max-w-[842px] mx-auto xl:text-[64px] pb-3 md:pb-0 h-auto  xl:leading-[84px] `}
            />
          </div>
           <p className=" max-w-[425px] xl:max-w-[745px] mx-auto xl:mt-12 font-open-sans text-base leading-[28px] text-[#F1F1F1] ">
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
            </p>
        </div>
        <HeroGrid/>
      </section>
      <section className="bg-white py-16 md:py-[105px]  mt-[120px] md:mt-[290px] xl:mt-[520px] px-5 md:px-16 xl:px-0 max-w-[842px] mx-auto">
        <p className=" text-primaryGray font-open-sans text-left  text-xl mb-4 `">Our story</p>
        <TextH1
          text="Handshake infographic mass market crowdfunding iteration."
          textStyle=" !text-primary !max-w-[842px]"
        />
        <p className=" font-open-sans  xl:leading-[32px] md:text-xl text-primaryGray xl:max-w-[799px] font-normal mt-[50px] md:mt-[10px] xl:mt-[30px]">
          Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. 
        </p>
      </section>
      <section className="bg-primary py-16 md:py-[105px] lg:py-24 min-h-[700px] lg:min-h-[334px]   px-5 md:px-16 xl:px-0 xl:h-[584px] ">
        <p className=" text-[#F1F1F1] font-open-sans   text-xl mb-4 text-center `">Our numbers</p>
        <TextH1
            text="Handshake infographic mass market crowdfunding iteration."
            textStyle={`xl:max-w-[842px] mx-auto text-center `}
        />
        <div className=" flex flex-col lg:flex-row mt-10 max-w-[1000px] justify-between xl:mt-10 mx-auto gap-y-10">
          <div className="  xl:max-w-[400px]  xl:h-auto">
            <p className=" text-center lg:text-left font-manrope text-[60px] xl:text-[96px] text-[#4FE9A4]">
              120m
            </p>
            <p className=" text-center lg:text-left font-open-sans text-2xl xl:-mt-2 text-[#F1F1F1]"> 
              Cool feature title
            </p>
          </div>
          <div className=" xl:max-w-[400px] xl:h-auto">
            <p className=" text-center lg:text-left font-manrope text-[60px] xl:text-[96px] text-[#4FE9A4]">
              10.000
            </p>
            <p className="text-center lg:text-left font-open-sans text-2xl xl:-mt-2 text-[#F1F1F1]"> 
              Cool feature title
            </p>
          </div>
          <div className=" xl:max-w-[400px]xl:h-auto">
            <p className=" text-center lg:text-left font-manrope text-[60px] xl:text-[96px] text-[#4FE9A4]">
              240
            </p>
            <p className="text-center lg:text-left  font-open-sans text-2xl xl:-mt-2 text-[#F1F1F1]"> 
              Cool feature title
            </p>
          </div>

        </div>

      </section>
       <section className="bg-white py-16 md:py-[105px] lg:py-[105px] px-5 md:px-16 xl:px-0  mx-auto">
        <div className="max-w-[842px] mx-auto">
          <p className=" text-primaryGray font-open-sans text-left  text-xl mb-4 `">Our team</p>
        <TextH1
          text="The leadership team"
          textStyle=" !text-primary !max-w-[842px] h-auto xl:h-[72px]"
        />
        <p className=" font-open-sans md:text-xl  xl:leading-[32px] text-primaryGray font-normal xl:max-w-[799px]  mt-5">
         Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
        </p>
        </div>
        <div className=" xl:w-[1000px] mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teams.map((item, index) => (
            <TeamCard
              key={index}
              img={item.img}
              name={item.name}
              position ={item.position}

            />
         )) }
        </div>
      </section>
      <section className="bg-primary py-16 md:pt-[105px] lg:py-[120px]  lg:min-h-[334px] px-5 md:px-16 xl:px-0 xl:h-[1166px] ">
        <div className="max-w-[842px] mx-auto">
          <div className="max-w-[842px] mx-auto">
            <p className=" text-white font-open-sans text-left  text-xl mb-4 `">Our values</p>
            <TextH1
              text="Things in we believe"
              textStyle=" !text-white !max-w-[842px] h-auto xl:h-[72px]"
            />
            <p className=" font-open-sans md:text-xl text-[#F1F1F1] xl:leading-[32px] font-normal xl:max-w-[799px]  mt-5">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. 
            </p>
          </div>

          <div className=" w-full flex flex-col mt-[70px] md:mt-[100px]">
             {valuesList.map((item, index) => (
            <ValuesCard
              key={index}
              title={item.title}
              text={item.text}
              img={item.img}
            />
         ))}
         </div>
        </div>
      </section>
      <section className=" bg-white lg:py-32 py-8 md:py-14  px-5 md:px-16 xl:pb-20 xl:px-0 ">
       <CtaCard/>
      </section>
      <sectin>
        <Footer/>
      </sectin>
       
     
    </main>
  )
}
export default AboutScreen