import { MdArrowOutward } from "react-icons/md";
import { project1 } from "../../assets/images";

const ProjectsUi1 = () => {
  return (
    <>
      <section className="h-[800px] bg-black px-32 text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[28px]">Projects</h1>
          <div className="h-[1px] w-[40px] bg-white"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px] pt-[20px]">
          <div className="flex h-[180px] w-[550px] items-center overflow-hidden rounded-lg px-[12px] py-[6px] transition-all hover:bg-gray-400 hover:!bg-opacity-10 hover:shadow-inner hover:backdrop-blur-sm">
            <div className="flex lg:gap-[10px]">
              <div className="image-side flex-[2] overflow-hidden rounded-md">
                <img src={project1} alt="" />
              </div>
              <div className="flex flex-[5] flex-col">
                <div className="flex items-center lg:gap-[5px]">
                  <h3 className="leading-[16px] lg:text-[20px]">
                    The Cappa Luxury Hotel
                  </h3>
                  <MdArrowOutward />
                </div>
                <p className="pt-[4px] lg:text-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  porro doloribus totam molestiae! Maxime, quo. Modi, neque
                  molestiae repellat, vitae eveniet doloribus hic iusto, tempora
                  aperiam amet natus fuga dicta.
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-[180px] w-[550px] items-center overflow-hidden rounded-lg px-[12px] py-[6px] transition-all hover:bg-gray-400 hover:!bg-opacity-10 hover:shadow-inner hover:backdrop-blur-sm">
            <div className="flex lg:gap-[10px]">
              <div className="image-side flex-[2] overflow-hidden rounded-md">
                <img src={project1} alt="" />
              </div>
              <div className="flex flex-[5] flex-col">
                <div className="flex items-center lg:gap-[5px]">
                  <h3 className="leading-[16px] lg:text-[20px]">
                    The Cappa Luxury Hotel
                  </h3>
                  <MdArrowOutward />
                </div>
                <p className="pt-[4px] lg:text-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  porro doloribus totam molestiae! Maxime, quo. Modi, neque
                  molestiae repellat, vitae eveniet doloribus hic iusto, tempora
                  aperiam amet natus fuga dicta.
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-[180px] w-[550px] items-center overflow-hidden rounded-lg px-[12px] py-[6px] transition-all hover:bg-gray-400 hover:!bg-opacity-10 hover:shadow-inner hover:backdrop-blur-sm">
            <div className="flex lg:gap-[10px]">
              <div className="image-side flex-[2] overflow-hidden rounded-md">
                <img src={project1} alt="" />
              </div>
              <div className="flex flex-[5] flex-col">
                <div className="flex items-center lg:gap-[5px]">
                  <h3 className="leading-[16px] lg:text-[20px]">
                    The Cappa Luxury Hotel
                  </h3>
                  <MdArrowOutward />
                </div>
                <p className="pt-[4px] lg:text-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  porro doloribus totam molestiae! Maxime, quo. Modi, neque
                  molestiae repellat, vitae eveniet doloribus hic iusto, tempora
                  aperiam amet natus fuga dicta.
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-[150px] w-[550px] items-center overflow-hidden rounded-lg px-[12px] py-[6px] transition-all hover:bg-gray-400 hover:!bg-opacity-10 hover:shadow-inner hover:backdrop-blur-sm">
            <div className="flex lg:gap-[10px]">
              <div className="image-side flex-[2] overflow-hidden rounded-md">
                <img src={project1} alt="" />
              </div>
              <div className="flex flex-[5] flex-col">
                <div className="flex items-center lg:gap-[5px]">
                  <h3 className="leading-[16px] lg:text-[20px]">
                    The Cappa Luxury Hotel
                  </h3>
                  <MdArrowOutward />
                </div>
                <p className="pt-[4px] lg:text-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  porro doloribus totam molestiae! Maxime, quo. Modi, neque
                  molestiae repellat, vitae eveniet doloribus hic iusto, tempora
                  aperiam amet natus fuga dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsUi1;
