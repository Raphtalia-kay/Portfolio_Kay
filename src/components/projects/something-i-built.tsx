import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { project1, project2 } from "../../assets/images";

const SomethingIbuilt = () => {
  return (
    <>
      <section className="h-[1200px] bg-black px-32 text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[28px]">03. Something I built</h1>

          <div className="h-[0.5px] w-[200px] bg-gray-300 bg-opacity-50"></div>
        </div>
        {/* ============================================================================================ */}
        <div className="lower-part flex flex-col gap-[70px] px-[40px] pt-[40px]">
          <div className="flex">
            <div className="project-image-side relative flex-[2]">
              <img
                src={project1}
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-10 hover:opacity-50"></div>
            </div>
            <div className="project-detail-side relative flex-1 pt-[40px]">
              <p className="text-end text-[13px]">Feature Projects</p>
              <h3 className="text-end text-[20px]">Hotel Page Theme</h3>
              <div className="absolute right-0 top-[150px] w-[500px] rounded-md bg-gray-500 bg-opacity-10 px-[22px] py-[12px] shadow-inner backdrop-blur-sm hover:outline-dashed hover:outline-2 hover:outline-zinc-700">
                <p className="text-[14px]">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex h-[220px] items-end justify-end gap-[10px]">
                <p className="lg:text-[12px]">React</p>
                <p className="lg:text-[12px]">Tailwind</p>
                <p className="lg:text-[12px]">Framer Motion</p>
                <p className="lg:text-[12px]">Npm Libraries</p>
              </div>
              <div className="flex items-center justify-end gap-[20px] pt-[15px]">
              <div className="flex items-center justify-start gap-[20px] pt-[15px]">
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
                    className="feather feather-github w-[20px] transition-colors duration-300 group-hover:stroke-blue-500"
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
                    className="feather feather-external-link w-[24px] transition-colors duration-300 group-hover:stroke-blue-500"
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
          <div className="flex flex-row-reverse">
            <div className="project-image-side relative flex-[2]">
              <img
                src={project2}
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-20 hover:opacity-50"></div>
            </div>
            <div className="project-detail-side relative flex-1 pt-[40px]">
              <p className="text-start text-[13px]">Feature Projects</p>
              <h3 className="text-start text-[20px]">Hotel Page Theme</h3>
              <div className="absolute left-0 top-[150px] w-[500px] rounded-md bg-black px-[22px] py-[12px] shadow-inner backdrop-blur-sm hover:outline-dashed hover:outline-2 hover:outline-zinc-700">
                <p className="text-[14px]">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex h-[220px] items-end justify-start gap-[10px]">
                <p className="lg:text-[12px]">React</p>
                <p className="lg:text-[12px]">Tailwind</p>
                <p className="lg:text-[12px]">Framer Motion</p>
                <p className="lg:text-[12px]">Npm Libraries</p>
              </div>
              <div className="flex items-center justify-start gap-[20px] pt-[15px]">
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
                    className="feather feather-github w-[20px] transition-colors duration-300 group-hover:stroke-blue-500"
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
                    className="feather feather-external-link w-[24px] transition-colors duration-300 group-hover:stroke-blue-500"
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
      </section>
    </>
  );
};

export default SomethingIbuilt;
