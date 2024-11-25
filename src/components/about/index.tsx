import { kk } from "../../assets/images";
import WhatIdo from "./what-I-do";

const About = () => {
  return (
    <>
      <section id="2" className="about flex h-[650px] items-center justify-center bg-black px-32 text-white">
        <div className="for-image w-[40%]">
          <div className="profile-image h-[400px] w-[400px] rounded-md bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-md hover:outline-dashed hover:outline-2 hover:outline-zinc-700">
            <img src={kk} alt="" />
          </div>
        </div>
        <div className="about-me w-[60%]">
          <div className="flex items-center gap-[10px]">
            <p className="lg:pb-2 lg:text-[28px]">01. About</p>
            <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
          </div>
          <p className="text-justify lg:pt-2 lg:text-[16px]">
            Hello! I'm a dedicated Junior Frontend Web Developer and UI/UX
            Designer, currently pursuing my degree in ICT at Krirk University. I
            specialize in designing and building user-focused, visually engaging
            digital experiences. Skilled in ReactJS and CSS, I create seamless,
            interactive web interfaces, with a foundation in PHP. My expertise
            extends to UI/UX design, where I leverage Figma to craft intuitive,
            user-centric designs. Beyond development, I am a freelance coding
            instructor for kids, sharing my passion for technology and
            empowering the next generation of innovators.
          </p>
          <div className="button-group flex lg:gap-4 lg:py-[24px]">
            <button className="w-[180px] text-black rounded-md border-[1px] hover:border-slate-100 hover:bg-black hover:text-white transition-all duration-500 bg-white  px-6 py-3 shadow-inner">
              Download CV
            </button>
            <button className="w-[180px] text-black rounded-md border-[1px] hover:border-slate-100 hover:bg-black hover:text-white transition-all duration-500 bg-white  px-6 py-3 shadow-inner">
              Hire Me
            </button>
          </div>
        </div>
      </section>
      {/* <WhatIdo /> */}
    </>
  );
};

export default About;
