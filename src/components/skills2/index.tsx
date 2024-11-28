import { useState } from "react";
import Skillbar from "./skill-bar";
import { cn } from "../../utils/cn";

const SkillsUiOne = () => {
  const [type, setType] = useState(1);
  return (
    <>
      <section
        id="skills"
        className="bg-black px-[20px] py-[20px] text-white sm:px-[100px] sm:py-[50px] md:px-[120px]"
      >
        <div className="flex flex-col items-center justify-center pb-[10px] sm:pb-[18px] lg:pb-[24px]">
          <h1 className=" py-[8px] lg:py-[10px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
            03. Skills That I collected
          </h1>
          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>



        <div className=" ">
          <div className="tab-row flex justify-center gap-[10px]">
            <div className="flex border-b-[1px]">
              <div
                onClick={() => setType(1)}
                className={cn(
                  "item1 w-[140px] md:w-[200px] overflow-hidden rounded-sm bg-gray-500 bg-opacity-10 sm:px-[12px] sm:py-[8px] md:px-[24px] md:py-[12px] text-[14px] md:text-[16px] text-center backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                  {
                    "border-b-[2px] bg-gray-500 bg-opacity-10": type == 1,
                  },
                )}
              >
                Web Development
              </div>
              <div
                onClick={() => setType(2)}
                className={cn(
                  "item2 w-[140px] md:w-[200px] overflow-hidden rounded-sm bg-gray-500 bg-opacity-10 sm:px-[12px] sm:py-[8px] md:px-[24px] md:py-[12px] text-[14px] md:text-[16px] text-center backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                  {
                    "border-b-[2px] bg-gray-500 bg-opacity-10": type == 2,
                  },
                )}
              >
                Teaching
              </div>
            </div>
          </div>
          {type == 1 && (
            <div className="tab-skills-details-bar flex flex-col lg:gap-[40px] px-[50px] pt-[20px] sm:pt-[20px] lg:flex-row lg:pt-[40px]">
              <div className="left-side flex-1">
                <Skillbar title="html" percentage="95%" item="html" />
                <Skillbar title="css" percentage="85%" item="css" />
                <Skillbar
                  title="javascript/typescript"
                  percentage="95%"
                  item="html"
                />
              </div>
              <div className="right-side flex-1">
                <Skillbar title="React" percentage="95%" item="html" />
                <Skillbar
                  title="Tailwind / Bootstrap"
                  percentage="95%"
                  item="html"
                />

                <Skillbar title="Figma" percentage="95%" item="html" />
              </div>
            </div>
          )}
          {type == 2 && (
            <div className="tab-skills-details-bar flex gap-[40px] px-[50px] lg:pt-[40px]">
              <div className="left-side flex-1">
                <Skillbar title="Scratch" percentage="95%" item="html" />
                <Skillbar title="Thunkable" percentage="85%" item="css" />
                <Skillbar
                  title="Web Development (Html/css/js)"
                  percentage="85%"
                  item="html"
                />
              </div>
              <div className="right-side flex-1">
                <Skillbar
                  title="Python for kids"
                  percentage="85%"
                  item="html"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SkillsUiOne;
