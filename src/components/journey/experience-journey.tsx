import { TbArrowBadgeRightFilled } from "react-icons/tb";
const ExperienceJourney = () => {
  return (
    <>
      <div className="w-[100%] px-20">
        <div className="flex items-center justify-center gap-[10px]">
          <p className="lg:pb-2 lg:text-[28px] lg:font-medium">
            02. Where I'm worked
          </p>
          <div className="h-[0.5px] w-[200px] bg-black bg-opacity-50"></div>
        </div>
        <div className="lower-part flex gap-[30px] pt-[40px]">
          <div className="tab flex flex-col h-[250px] gap-[4px]  border-l-[0.5px] border-gray-500">
            <div className="item1 w-[200px] border-l-[2px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm transition-all duration-700 ease-in-out hover:bg-gray-500 hover:bg-opacity-10">
              Item1
            </div>
            <div className="item2 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm transition-all duration-700 ease-in-out hover:bg-gray-500 hover:bg-opacity-10">
              Item2
            </div>
            <div className="item3 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm transition-all duration-700 ease-in-out hover:bg-gray-500 hover:bg-opacity-10">
              Item3
            </div>
            <div className="item4 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm transition-all duration-700 ease-in-out hover:bg-gray-500 hover:bg-opacity-10">
              Item4
            </div>
            <div className="item5 w-[200px] px-[24px] py-[12px] shadow-inner backdrop-blur-sm transition-all duration-700 ease-in-out hover:bg-gray-500 hover:bg-opacity-10">
              Item5
            </div>
          </div>
          <div className="tab-details">
            <div className="tab-title flex items-center gap-[10px]">
              <h3 className="text-[20px]">Position </h3>
              <h3 className="text-[20px]">Company Name</h3>
            </div>
            <p className="text-[13px] pt-[5px]">month year - month year</p>
            <div className="tab-paragraph flex gap-[10px] lg:pt-[20px] ">
              <TbArrowBadgeRightFilled size="40" />
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                blanditiis illum unde nostrum explicabo sequi perspiciatis.
                Laudantium non rem, dolore quos rerum magnam veritatis?
              </p>
            </div>
            <div className="tab-paragraph flex gap-[10px] lg:pt-[20px] ">
              <TbArrowBadgeRightFilled size="40" />
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                blanditiis illum unde nostrum explicabo sequi perspiciatis.
                Laudantium non rem, dolore quos rerum magnam veritatis?
              </p>
            </div>
            <div className="tab-paragraph flex gap-[10px] lg:pt-[20px] ">
              <TbArrowBadgeRightFilled size="40" />
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                blanditiis illum unde nostrum explicabo sequi perspiciatis.
                Laudantium non rem, dolore quos rerum magnam veritatis?
              </p>
            </div>
            <div className="tab-paragraph flex gap-[10px] lg:pt-[20px] ">
              <TbArrowBadgeRightFilled size="40" />
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, veniam voluptates! Voluptas nemo pariatur nesciunt
                blanditiis illum unde nostrum explicabo sequi perspiciatis.
                Laudantium non rem, dolore quos rerum magnam veritatis?
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceJourney;
