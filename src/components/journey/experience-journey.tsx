import { useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { cn } from "../../utils/cn";
const ExperienceJourney = () => {
  const [type, setType] = useState(1);

  return (
    <>
      <div className="w-[100%] px-20 ">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="lg:pb-2 lg:text-[28px] ">02. Where I'm worked</p>
          <div className="h-[0.5px] w-[200px] bg-white  bg-opacity-50"></div>
        </div>
        <div className="lower-part flex gap-[30px] pt-[40px]">
          <div className="tab flex h-[250px] flex-col gap-[4px] border-l-[0.5px] border-gray-500">
            <div
              onClick={() => setType(1)}
              className={cn(
                "item1 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-l-[2px] bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm":
                    type == 1,
                },
              )}
            >
              Item1
            </div>
            <div
              onClick={() => setType(2)}
              className={cn(
                "item1 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-l-[2px]": type == 2,
                },
              )}
            >
              Item2
            </div>
            <div
              onClick={() => setType(3)}
              className={cn(
                "item1 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-l-[2px]": type == 3,
                },
              )}
            >
              Item3
            </div>
            <div
              onClick={() => setType(4)}
              className={cn(
                "item1 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-l-[2px]": type == 4,
                },
              )}
            >
              Item4
            </div>
            <div
              onClick={() => setType(5)}
              className={cn(
                "item1 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-l-[2px]": type == 5,
                },
              )}
            >
              Item5
            </div>
          </div>
          {type == 1 && (
            <div className="tab-details">
              <div className="tab-title flex items-center gap-[10px]">
                <h3 className="text-[20px]">Position </h3>
                <h3 className="text-[20px]">Company Name</h3>
              </div>
              <p className="pt-[5px] text-[13px]">month year - month year</p>
              <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                <TbArrowBadgeRightFilled size="40" />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                  blanditiis illum unde nostrum explicabo sequi perspiciatis.
                  Laudantium non rem, dolore quos rerum magnam veritatis?
                </p>
              </div>
              <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                <TbArrowBadgeRightFilled size="40" />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                  blanditiis illum unde nostrum explicabo sequi perspiciatis.
                  Laudantium non rem, dolore quos rerum magnam veritatis?
                </p>
              </div>
              <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                <TbArrowBadgeRightFilled size="40" />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                  blanditiis illum unde nostrum explicabo sequi perspiciatis.
                  Laudantium non rem, dolore quos rerum magnam veritatis?
                </p>
              </div>
              <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                <TbArrowBadgeRightFilled size="40" />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                  blanditiis illum unde nostrum explicabo sequi perspiciatis.
                  Laudantium non rem, dolore quos rerum magnam veritatis?
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceJourney;
