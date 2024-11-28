import { Boxes } from "../ui/background-boxes";
import { cn } from "../../utils/cn";

const HeroSectionPage = () => {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)]" />

        <Boxes />
        <h1
          className={cn(
            "relative z-20 text-xl text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px] ",
          )}
        >
          Hello!! I am <span className="">Raphtalia K</span>
        </h1>
        <p className="relative z-20 mt-2 text-center text-neutral-300 lg:text-[40px]">
          Frontend Developer
        </p>
      </div>
    </>
  );
};

export default HeroSectionPage;
