import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import TextH1 from "@/components/TextH1";
import {blogPost } from "@/utils/exportData";
import Footer from "@/components/Footer";
import PostsCardRow from "@/components/PostsCardRow";
import PostsCard from "@/components/PostsCard";
import Button from "@/components/Button";
import CtaCard from "@/components/CtaCard";

const BlogScreen = () => {
  const [limit, setLimit] = useState(3)

  const handleLoadMore = () => {
    if (limit < blogPost.length) {
      setLimit(limit+3)
    }
  }
  
  useEffect(() => {
    
  },[limit])

  return (
   <main className=" w-full bg-white animate-fade-up ">
      <section className=" relative bg-white h-auto px-5 md:px-16 xl:px-0 ">
        <TopNav
          isLight={true}
        />
        <div className=" text-center mt-6">
          <p className=" font-open-sans  text-xl text-primary xl:pb-[12px]">Blog</p>
          <div className=" max-w-[842px] mx-auto   ">
            <TextH1
              text="Thoughts and words"
              textStyle={`xl:max-w-[842px] !text-primary xl:h-[84px] mx-auto xl:text-[64px] pb-3 md:pb-0 h-auto  xl:leading-[84px] `}
            />
          </div>
        </div>
        <div className="  max-w-[1200px] mx-auto mt-[68px] ">
        {blogPost.slice(8).map((item, index) => (
            <PostsCardRow
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
        <div className=" max-w-[1100px]  2xl:max-w-[1200px] mx-auto border border-b border-primary xl:mt-[72px]  "></div>
      </section>
      <section className="max-w-[998px] bg-white py-16 md:py-[105px] lg:py-[96px] lg:pb-[50px] px-5 md:px-16 xl:px-0  mx-auto">
        <TextH1
          text="Latest news"
          textStyle={` !text-black xl:h-auto h-auto `}
        />
        <div className="  w-full gri mx-auto mt-[40px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3">
          {blogPost.slice(0,limit).map((item, index) => (
            <PostsCard
            key={index}
            category={item.category}
            date={item.date}
            img={item.img}
            text={item.text}
            userImg={item.userImg}
            userName={item.userName}
            cardStyle={` xl:mb-[80px]`}
          />
            ))}
        </div>
       {limit < blogPost.length && <div className="  flex flex-col w-full items-center lg:pt-3 ">
            <Button
            onClick={()=>handleLoadMore()}
            label="Load more"
            btnStyle={` animate-bounce border-primary border-2 w-[219px] h-[60px] rounded-full lg:text-xl `}
            />
        </div>}
      </section>
      <section className=" bg-white lg:py-20 py-8 md:py-14  px-5 md:px-16 xl:pb-20 xl:px-0 ">
       <CtaCard/>
      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}
export default BlogScreen