
import { project1, project2 } from "../../assets/images";

const SomethingIbuilt = () => {
  return (
    <>
      <section className="h-[1200px] bg-black px-[30px] py-[20px] text-white sm:px-[100px] sm:py-[50px] md:px-[120px]">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="pb-[6px] sm:text-[20px] md:text-[24px] lg:py-[10px] lg:text-[28px]">
            04. Something I built
          </h1>
          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>



        {/* ============================================================================================ */}
        <div className="lower-part flex flex-col gap-[100px] md:px-[40px] pt-[40px] lg:gap-[70px] ">
          <div className="relative flex flex-col gap-[20px] lg:flex-row lg:gap-0">
            <div className="project-image-side relative sm:flex-1 lg:flex-[1.5] xl:flex-[2]">
              <img
                src={project1}
                className="object-cover xl:h-full xl:w-full"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-10 hover:opacity-50"></div>
            </div>
            <div className="project-detail-side absolute right-0 top-0 h-full w-full flex-1 bg-black bg-opacity-10 pb-[20px] backdrop-blur-sm sm:px-[10px] px-[4px] md:px-[20px] lg:px-[0px] lg:relative xl:pb-0 xl:pt-[40px] hover:outline-dashed lg:hover:outline-none hover:outline-2 hover:outline-zinc-700 py-[4px] sm:py-[2px]  md:py-[4px]" >
              <p className="pb-[1px] text-[10px] sm:text-[12px] sm:pb-[2px] text-end  lg:pb-0 md:text-[14px] lg:text-[12px] xl:text-[13px]">
                Feature Projects
              </p>
              <h3 className=" pb-[6px] sm:pb-[16px] md:pb-[10px] text-end lg:pb-0 text-[14px] sm:text-[16px]  md:text-[18px] lg:text-[16px] xl:text-[20px]">
                Hotel Page Theme
              </h3>
              <div className="right-0 rounded-md lg:absolute lg:top-[60px] lg:w-[400px] lg:bg-gray-500 lg:bg-opacity-10 lg:px-[22px]  lg:py-[12px] lg:shadow-inner lg:backdrop-blur-sm lg:hover:outline-dashed lg:hover:outline-2 lg:hover:outline-zinc-700 xl:top-[150px] xl:w-[500px]">
                <p className="pb-[12px] sm:pb-[10px]   sm:text-[10px] text-[10px] md:py-[10px] lg:py-[0] md:text-[13px] lg:pb-0 lg:text-[12px] xl:text-[14px]  text-end lg:text-start">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex items-end justify-end gap-[10px] md:gap-[14px] lg:h-[130px] lg:gap-[10px] xl:h-[220px]">
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  React
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Tailwind
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Framer Motion
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Npm Libraries
                </p>
                
              </div>
              <div className="flex items-center gap-[20px] justify-end pt-[4px] sm:pt-[10px]  md:pt-[12px] lg:pt-[4px] xl:pt-[15px]">
                <div className="flex items-center justify-start gap-[20px]  lg:pt-[10px] xl:pt-[15px]">
                  <div className="group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github transition-colors duration-300 group-hover:stroke-blue-500 w-[10px] sm:w-[14px] md:w-[16px] lg:w-[14px] xl:w-[20px]"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>

                  <div className="group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link transition-colors duration-300 group-hover:stroke-blue-500 w-[12px] sm:w-[16px] md:w-[20px] lg:w-[16px] xl:w-[24px]"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
         <div className="relative flex flex-col gap-[20px] lg:flex-row-reverse lg:gap-0">
            <div className="project-image-side relative sm:flex-1 lg:flex-[1.5] xl:flex-[2]">
              <img
                src={project2}
                className="object-cover xl:h-full xl:w-full"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-10 hover:opacity-50"></div>
            </div>
            <div className="project-detail-side absolute right-0 top-0 h-full w-full flex-1 text-black lg:text-white bg-black bg-opacity-10 pb-[20px] backdrop-blur-sm sm:px-[10px] px-[4px] md:px-[20px] lg:px-[0px] lg:relative xl:pb-0 xl:pt-[40px] hover:outline-dashed lg:hover:outline-none hover:outline-2 hover:outline-zinc-700 py-[4px] sm:py-[2px]  md:py-[4px]" >
              <p className="pb-[1px] text-[10px] sm:text-[12px] sm:pb-[2px] text-end  lg:pb-0 md:text-[14px] lg:text-[12px] xl:text-[13px]">
                Feature Projects
              </p>
              <h3 className=" pb-[6px] sm:pb-[16px] md:pb-[10px] text-end lg:pb-0 text-[14px] sm:text-[16px]  md:text-[18px] lg:text-[16px] xl:text-[20px]">
                Hotel Page Theme
              </h3>
              <div className="right-0 rounded-md lg:absolute lg:top-[60px] lg:left-0 lg:w-[400px] lg:bg-gray-500 lg:bg-opacity-10 lg:px-[22px]  lg:py-[12px] lg:shadow-inner lg:backdrop-blur-sm lg:hover:outline-dashed lg:hover:outline-2 lg:hover:outline-zinc-700 xl:top-[150px] xl:w-[500px]">
                <p className="pb-[12px] sm:pb-[10px]  sm:text-[10px] text-[10px] md:py-[10px] lg:py-[0] md:text-[13px] lg:pb-0 lg:text-[12px] xl:text-[14px]  text-end lg:text-start">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex items-end justify-end gap-[10px] md:gap-[14px] lg:h-[130px] lg:gap-[10px] xl:h-[220px]">
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  React
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Tailwind
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Framer Motion
                </p>
                <p className="text-[8.5px] sm:text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px]">
                  Npm Libraries
                </p>
                
              </div>
              <div className="flex items-center gap-[20px] justify-end pt-[4px] sm:pt-[10px]  md:pt-[12px] lg:pt-[4px] xl:pt-[15px]">
                <div className="flex items-center justify-start gap-[20px]  lg:pt-[10px] xl:pt-[15px]">
                  <div className="group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github transition-colors duration-300 group-hover:stroke-blue-500 w-[10px] sm:w-[14px] md:w-[16px] lg:w-[14px] xl:w-[20px]"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>

                  <div className="group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link transition-colors duration-300 group-hover:stroke-blue-500 w-[12px] sm:w-[16px] md:w-[20px] lg:w-[16px] xl:w-[24px]"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SomethingIbuilt;
