import { useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { cn } from "../../utils/cn";
import { journeyList } from "../../utils/journey-data";
const ExperienceJourney = () => {
  const [type, setType] = useState(1);

  // console.log(
  //   journeyList.map((j) => {
  //     console.log(j);
  //   }),
  // );

  return (
    <>
      <div className="w-[100%]  xl:px-20 ">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <p className="xl:pb-[6px] sm:text-[20px] md:text-[24px] lg:text-[28px]">02. Where I'm worked</p>
          <div className="h-[0.5px] w-[200px] bg-white bg-opacity-50"></div>
        </div>

        
        <div className="lower-part  pt-[4px] sm:pt-[6px] md:pt-[10px]  flex flex-col lg:flex-row lg:gap-[20px]  xl:gap-[30px] lg:pt-[20px] xl:pt-[40px]">
          <div className="tab flex justify-center flex-row pb-[8px] sm:pb-[8px] md:pb-[20px] lg:h-[250px]  lg:flex-col  lg:border-l-[0.5px] lg:border-gray-500">
            <div
              onClick={() => setType(1)}
              className={cn(
                "item1 w-[80px] text-[12px] sm:text-[16px] px-[2px] py-[4px] sm:w-[150px] text-center lg:text-start sm:px-[4px] sm:py-[8px] lg:w-[200px] lg:px-[24px] lg:py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-b-[2px] lg:border-b-[0px] lg:border-l-[2px]    bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm":
                    type == 1,
                },
              )}
            >
              Item1
            </div>
            <div
              onClick={() => setType(2)}
              className={cn(
                "item2 w-[80px] text-[12px] sm:text-[16px] px-[2px] py-[4px] sm:w-[150px] text-center lg:text-start sm:px-[4px] sm:py-[8px] lg:w-[200px] lg:px-[24px] lg:py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-b-[2px] lg:border-b-[0px] lg:border-l-[2px]   bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm": type == 2,
                },
              )}
            >
              Item2
            </div>
            <div
              onClick={() => setType(3)}
              className={cn(
                "item3 w-[80px] text-[12px] sm:text-[16px] px-[2px] py-[4px] sm:w-[150px] text-center lg:text-start sm:px-[4px] sm:py-[8px] lg:w-[200px] lg:px-[24px] lg:py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-b-[2px] lg:border-b-[0px] lg:border-l-[2px]   bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm": type == 3,
                },
              )}
            >
              Item3
            </div>
            <div
              onClick={() => setType(4)}
              className={cn(
                "item4 w-[80px] text-[12px] sm:text-[16px] px-[2px] py-[4px] sm:w-[150px] text-center lg:text-start sm:px-[4px] sm:py-[8px] lg:w-[200px] lg:px-[24px] lg:py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-b-[2px] lg:border-b-[0px] lg:border-l-[2px]   bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm": type == 4,
                },
              )}
            >
              Item4
            </div>
            <div
              onClick={() => setType(5)}
              className={cn(
                "item5 w-[80px] text-[12px] sm:text-[16px] px-[2px] py-[4px] sm:w-[150px] text-center lg:text-start sm:px-[4px] sm:py-[8px] lg:w-[200px] lg:px-[24px] lg:py-[12px] shadow-inner backdrop-blur-sm hover:bg-gray-500 hover:bg-opacity-10",
                {
                  "border-b-[2px] lg:border-b-[0px] lg:border-l-[2px]   bg-gray-500 bg-opacity-10 shadow-inner backdrop-blur-sm": type == 5,
                },
              )}
            >
              Item5
            </div>
          </div>


          <div className="sm:px-[20px] lg:px-[0px]">
            {journeyList.map((j) => (
              <> {type == j.id && (
                <div className="tab-details">
                  <div className="tab-title flex items-center gap-[10px]">
                    <h3 className="text-[13px] sm:text-[16px] md:text-[20px]">{j.position} </h3>
                    <h3 className="text-[12px] sm:text-[16px] md:text-[20px]">{j.company_name}</h3>
                  </div>
                  <p className="pt-[2px] sm:pt-[3px] md:pt-[5px] text-[10px] sm:text-[13px]">{j.year_from_to}</p>
                  <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                    <TbArrowBadgeRightFilled size="40" />
                    <p className=" text-[12px] sm:text-[14px]">
                    {j.detail1}
                    </p>
                  </div>
                  <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                    <TbArrowBadgeRightFilled size="40" />
                    <p className=" text-[12px] sm:text-[14px]">
                    {j.detail2}
                    </p>
                  </div>
                  <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                    <TbArrowBadgeRightFilled size="40" />
                    <p className=" text-[12px] sm:text-[14px]">
                    {j.detail3}
                    </p>
                  </div>
                  <div className="tab-paragraph flex gap-[10px] lg:pt-[20px]">
                    <TbArrowBadgeRightFilled size="40" />
                    <p className=" text-[12px] sm:text-[14px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                      blanditiis illum unde nostrum explicabo sequi perspiciatis.
                      Laudantium non rem, dolore quos rerum magnam veritatis?
                    </p>
                  </div>
                </div>
              )}</>
            ))}
          </div>
         
          
        </div>
      </div>
    </>
  );
};

export default ExperienceJourney;
