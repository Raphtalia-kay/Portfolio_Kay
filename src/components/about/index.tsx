const About = () => {
  return (
    <>
      <section className="about flex h-[650px] items-center justify-center bg-black px-28 text-white">
        <div className="for-image w-[50%]"></div>
        <div className="about-me w-[50%]">
          <p className="lg:pb-2 lg:text-[13px]">Introduction</p>
          <div className="h-[1px] w-[40px] bg-white"></div>
          <p className="lg:pt-2 lg:text-[18px]">
            Hello! I'm a dedicated Junior Frontend Web Developer and UI/UX
            Designer, committed to designing and building user-focused, visually
            engaging digital experiences. Skilled in ReactJS and CSS, I
            specialize in crafting seamless, interactive web interfaces,
            supported by my basic knowledge of PHP. My prowess in UI/UX design
            is showcased in my ability to create intuitive designs using Figma,
            prioritizing user-centric principles. I believe in combining
            technical expertise, creative vision, and user understanding to
            create standout digital products. Explore my portfolio to see my
            versatility and the potential I bring to your projects. Let's craft
            brilliance together!
          </p>
          <div className="button-group flex lg:gap-4 lg:py-4">
            <button className="w-[150px] rounded-md border-[1px] border-slate-100 bg-black bg-opacity-10 px-6 py-3 shadow-inner">
              Download CV
            </button>
            <button className="w-[150px] rounded-md border-[1px] border-slate-100 bg-black bg-opacity-10 px-6 py-3 shadow-inner">
              Hire Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
