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

        <div className="lower-part flex flex-col gap-[30px] pt-[40px]">
          <div className="flex px-[40px]">
            <div className="project-image-side relative flex-[2]">
              <img
                src={project1}
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="project-detail-side relative flex-1 pt-[40px]">
              <p className="text-end text-[13px]">Feature Projects</p>
              <h3 className="text-end text-[20px]">Hotel Page Theme</h3>
              <div className="absolute right-0 top-[150px] w-[500px] rounded-md bg-gray-500 bg-opacity-10 px-[22px] py-[10px] shadow-inner backdrop-blur-sm hover:outline-dashed hover:outline-2 hover:outline-zinc-700">
                <p className="text-[14px]">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex h-[220px] items-end justify-end gap-[10px]">
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
              </div>
              <div className="flex items-center justify-end gap-[20px] pt-[15px]">
                <FaGithub size="20" />
                <FaExternalLinkAlt size="20" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          <div className="flex flex-row-reverse px-[40px]">
            <div className="project-image-side relative flex-[2]">
              <img
                src={project2}
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="project-detail-side relative flex-1 pt-[40px]">
              <p className="text-start text-[13px]">Feature Projects</p>
              <h3 className="text-start text-[20px]">Hotel Page Theme</h3>
              <div className="absolute left-0 top-[150px] w-[500px] rounded-md bg-gray-500 bg-opacity-10 px-[22px] py-[10px] shadow-inner backdrop-blur-sm hover:outline-dashed hover:outline-2 hover:outline-zinc-700">
                <p className="text-[14px]">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <div className="flex h-[220px] items-end justify-start gap-[10px]">
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
              </div>
              <div className="flex items-center justify-start gap-[20px] pt-[15px]">
                <FaGithub size="20" />
                <FaExternalLinkAlt size="20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SomethingIbuilt;
