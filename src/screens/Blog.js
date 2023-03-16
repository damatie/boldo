import TopNav from "@/components/TopNav";
import TextH1 from "@/components/TextH1";
import { teams,valuesList } from "@/utils/exportData";
import Footer from "@/components/Footer";

const BlogScreen = () => {
  return (
   <main className=" w-full bg-white animate-fade-up ">
      <section className=" relative bg-white h-[500px] md:h-[550px] xl:h-[651px] px-5 md:px-16 xl:px-0 ">
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
      </section>
    </main>
  )
}
export default BlogScreen