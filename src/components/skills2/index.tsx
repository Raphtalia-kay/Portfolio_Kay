import { useState } from "react";
import Skillbar from "./skill-bar";
import { cn } from "../../utils/cn";

const SkillsUiOne = () => {
  const [type, setType] = useState(1);
  return (
    <>
      <section id="4" className="h-[700px] bg-black px-32 text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[28px]">
            03. Skills That I collected
          </h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>

        <div className=" ">
          <div className="tab-row  flex justify-center gap-[10px]">
            <div className="border-b-[1px] flex">
            <div
              onClick={() => setType(1)}
              className={cn(
                "item1 w-[200px] overflow-hidden rounded-sm bg-gray-500 bg-opacity-10 px-[24px] py-[12px] text-center  backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
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
                "item1 w-[200px] overflow-hidden rounded-sm bg-gray-500 bg-opacity-10 px-[24px] py-[12px] text-center backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
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
            <div className="tab-skills-details-bar flex gap-[40px] px-[50px] lg:pt-[40px]">
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
                <Skillbar title="Web Development (Html/css/js)" percentage="85%" item="html" />
              </div>
              <div className="right-side flex-1">
                <Skillbar title="Python for kids" percentage="85%" item="html" />
                
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SkillsUiOne;
