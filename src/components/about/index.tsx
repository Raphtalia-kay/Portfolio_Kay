import { HoverBorderGradient } from "../ui/hover-border-gradient"

const About = () => {
  return (
    <>
    <section className="about px-28 bg-slate-900 h-[650px] flex justify-center items-center text-white">
   <div className="for-image w-[50%]">
    
   </div>
   <div className="about-me w-[50%]">
    <p className="lg:text-[13px] lg:pb-2">Introduction</p>
    <div className="bg-white h-[1px] w-[40px]"></div>
    <p className="lg:text-[18px] lg:pt-2">Hello! I'm a dedicated Junior Frontend Web Developer and UI/UX Designer, committed to designing and building user-focused, visually engaging digital experiences. Skilled in ReactJS and CSS, I specialize in crafting seamless, interactive web interfaces, supported by my basic knowledge of PHP. My prowess in UI/UX design is showcased in my ability to create intuitive designs using Figma, prioritizing user-centric principles. I believe in combining technical expertise, creative vision, and user understanding to create standout digital products. Explore my portfolio to see my versatility and the potential I bring to your projects. Let's craft brilliance together!</p>
   </div>
   <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
       
        <span>Aceternity UI</span>
      </HoverBorderGradient>
    </div>
    </section>
    </>
  )
}


export default About