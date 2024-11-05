import { MdSchool } from "react-icons/md";

const EducationJourney = () => {
  return (
    <section className="w-[50%]">
      <div className="flex flex-col items-center justify-center lg:mb-6">
        <p className="lg:pb-2 lg:text-[28px] lg:font-medium">
          Education Journey
        </p>
        <div className="h-[1px] w-[40px] bg-white"></div>
      </div>

      <div className="mx-auto flex flex-col">
        <div className="">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2">
            <MdSchool size="20" />
          </div>
          <div className="mx-auto h-[50px] w-[1px] bg-white"></div>
        </div>

        <div className="first flex">
          <div className="text-end lg:w-[300px] lg:pr-[25px]">
            <h5 className="lg:text-[20px]">
              Electronics and Communication Engineering
            </h5>
            <p className="lg:text-[14px]">
              Myanmar Institute of Information Technology
            </p>
            <p className="lg:text-[13px]"> (Myanmar) </p>
          </div>
          <div className="">
            <div className="mx-auto flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-white">
              <div className="mx-auto h-[5px] w-[5px] rounded-full bg-white"></div>
            </div>
            <div className="mx-auto h-[101px] w-[1px] bg-white"></div>
          </div>
        </div>
        <div className="second flex flex-row-reverse">
          <div className="text-start lg:w-[300px] lg:pl-[25px]">
            <h5 className="lg:text-[20px]">Web Development (Frontend)</h5>
            <p className="lg:text-[14px]">MMS IT</p>
          </div>
          <div className="">
            <div className="mx-auto flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-white">
              <div className="mx-auto h-[5px] w-[5px] rounded-full bg-white"></div>
            </div>
            <div className="mx-auto h-[80px] w-[1px] bg-white"></div>
          </div>
        </div>
        <div className="third flex">
          <div className="text-end lg:w-[300px] lg:pr-[25px]">
            <h5 className="lg:text-[20px]">UX / UI Design</h5>
            <p className="lg:text-[14px]">Simbolo</p>
          </div>
          <div className="">
            <div className="mx-auto flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-white">
              <div className="mx-auto h-[5px] w-[5px] rounded-full bg-white"></div>
            </div>
            <div className="mx-auto h-[80px] w-[1px] bg-white"></div>
          </div>
        </div>
        <div className="second flex flex-row-reverse">
          <div className="text-start lg:w-[300px] lg:pl-[25px]">
            <h5 className="lg:text-[20px]">
              Information and Communication Technology
            </h5>
            <p className="lg:text-[14px]">Krirk University</p>
            <p className="lg:text-[13px]"> ( Thailand ) </p>
          </div>
          <div className="">
            <div className="mx-auto flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-white">
              <div className="mx-auto h-[5px] w-[5px] rounded-full bg-white"></div>
            </div>
            <div className="mx-auto h-[80px] w-[1px] bg-white"></div>
            <div className="mx-auto h-3 w-3 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;
