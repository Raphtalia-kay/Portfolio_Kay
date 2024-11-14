import { FaCode } from "react-icons/fa6";
const WhatIdo = () => {
  return (
    <>
      <section className="what-I-do flex h-[650px] items-center justify-center bg-black px-32 pb-[50px] text-white">
        <div className="flex flex-col items-center justify-center lg:mb-6">
          <h1 className="lg:py-[10px] lg:text-[28px] lg:font-medium">
            What I do
          </h1>
          <div className="h-[1px] w-[40px] bg-white"></div>
          <div className="flex justify-center pt-[40px]">
            <table className="">
              <tr className="">
                <td className="border-b-[1px] border-r-[1px]">
                  <div className="p-[50px]">
                    <div className="flex items-center gap-[4px]">
                      <FaCode size="30" />
                      <h3 className="lg:text-[20px]">Web Development</h3>
                    </div>
                    <div className="pt-[20px]">
                      <p className="mb-[10px] lg:text-[16px]">
                        Using HTML, CSS, and JavaScript with pre-processors and
                        build tools such as Sass and Grunt, I have a passion for
                        developing pixel-perfect websites and apps while
                        maintaining a semantic, modular, and DRY code base.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="border-b-[1px]">
                  <div className="p-[50px]">
                    <div className="flex items-center gap-[4px]">
                      <FaCode size="30" />
                      <h3 className="lg:text-[20px]">Web Development</h3>
                    </div>
                    <div className="pt-[20px]">
                      <p className="mb-[10px] lg:text-[16px]">
                        Using HTML, CSS, and JavaScript with pre-processors and
                        build tools such as Sass and Grunt, I have a passion for
                        developing pixel-perfect websites and apps while
                        maintaining a semantic, modular, and DRY code base.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border-r-[1px]">
                  <div className="p-[50px]">
                    <div className="flex items-center gap-[4px]">
                      <FaCode size="30" />
                      <h3 className="lg:text-[20px]">Web Development</h3>
                    </div>
                    <div className="pt-[20px]">
                      <p className="mb-[10px] lg:text-[16px]">
                        Using HTML, CSS, and JavaScript with pre-processors and
                        build tools such as Sass and Grunt, I have a passion for
                        developing pixel-perfect websites and apps while
                        maintaining a semantic, modular, and DRY code base.
                      </p>
                    </div>
                  </div>
                </td>{" "}
                <td className="">
                  <div className="p-[50px]">
                    <div className="flex items-center gap-[4px]">
                      <FaCode size="30" />
                      <h3 className="lg:text-[20px]">Web Development</h3>
                    </div>
                    <div className="pt-[20px]">
                      <p className="mb-[10px] lg:text-[16px]">
                        Using HTML, CSS, and JavaScript with pre-processors and
                        build tools such as Sass and Grunt, I have a passion for
                        developing pixel-perfect websites and apps while
                        maintaining a semantic, modular, and DRY code base.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIdo;
