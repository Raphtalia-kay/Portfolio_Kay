import Skillbar from "./skill-bar";

const SkillsUiOne = () => {
  return (
    <>
      <section className="h-[1200px] bg-black px-32 text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[28px]">
            03. Skills That I collected
          </h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>

        <div className=" ">
          <div className="tab-row flex justify-center gap-[10px]">
            <div className="item1 w-[200px] px-[24px] py-[12px] border-b-[2px] shadow-inner backdrop-blur-sm bg-gray-500 bg-opacity-10 overflow-hidden rounded-md hover:bg-gray-500 hover:bg-opacity-10 text-center">
              Web Development 
            </div>
            <div className="item2 w-[200px] px-[24px]  py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10  overflow-hidden rounded-md  text-center">
              UI/UX Design
            </div>
            <div className="item3 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10  overflow-hidden rounded-md text-center">
             Teaching
            </div>
          </div>
          <div className="tab-skills-details-bar flex gap-[40px] px-[50px] lg:pt-[40px]">
            <div className="left-side flex-1">
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
            </div>
            <div className="right-side flex-1">
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
              <Skillbar title="html" percentage="95%" item="html" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsUiOne;
