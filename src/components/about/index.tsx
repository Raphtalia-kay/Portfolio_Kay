import { kk } from "../../assets/images";

const About = () => {
  return (
    <>
      <section
        id="2"
        className="about flex flex-col items-center justify-center gap-[20px] bg-black  pt-[50px] text-white  sm:gap-[40px]  md:h-screen md:flex-row px-[20px] sm:px-[100px] md:px-[120px]"
      >
        <div className="for-image sm:w-[50%] md:w-[45%] lg:w-[40%] 2xl:w-[35%]">
          <div className="profile-image h-[400px] w-[400px] rounded-md bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-md hover:outline-dashed hover:outline-2 hover:outline-zinc-700 max-[938px]:h-[245px] max-[938px]:w-[245px] sm:h-full sm:w-full min-[768px]:h-[280px] min-[768px]:w-[280px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px]">
            <img src={kk} alt="" />
          </div>
        </div>
        <div className="about-me sm:px-2 md:w-[65%] lg:w-[60%] 2xl:w-[55%]">
          <div className="flex items-center gap-[10px]">
            <p className="pb-[2px] text-[20px] lg:pb-2 lg:text-[28px]">
              01. About
            </p>
            <div className="h-[0.5px] w-[100px] bg-gray-300 bg-opacity-50 md:w-[140px] lg:w-[200px]"></div>
          </div>
          <p className="text-balance text-[11px] sm:pt-1 sm:text-[11px] md:text-[12px] lg:pt-2 lg:text-[14px] xl:text-[16px]">
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
          <div className="button-group flex gap-4 py-[12px] lg:py-[24px]">
            <button className="w-[100px] rounded-md bg-white px-[2px] py-[4px] text-[13px] text-black shadow-inner hover:bg-black hover:text-white hover:outline-dashed hover:outline-2 hover:outline-zinc-700 md:w-[140px] md:px-4 md:py-2 md:text-[12px] lg:w-[180px] lg:px-6 lg:py-3 lg:text-[14px]">
              Download CV
            </button>
            <button className="w-[100px] rounded-md bg-white px-[2px] py-[4px] text-[13px] text-black shadow-inner hover:bg-black hover:text-white hover:outline-dashed hover:outline-2 hover:outline-zinc-700 md:w-[140px] md:px-4 md:py-2 md:text-[12px] lg:w-[180px] lg:px-6 lg:py-3 lg:text-[14px]">
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
