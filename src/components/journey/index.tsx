import EducationJourney from "./education-journey";
import ExperienceJourney from "./experience-journey";
import WorkJourney from "./work-journey";

const Journey = () => {
  return (
    <>
      <section id="3" className=" bg-black px-[20px] sm:px-[100px] md:px-[120px] py-[20px] sm:py-[50px] text-white">
        <div className="">
          {/* <EducationJourney />
          <WorkJourney /> */}
          <ExperienceJourney />
        </div>
      </section>
    </>
  );
};

export default Journey;
