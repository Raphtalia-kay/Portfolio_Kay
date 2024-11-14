import EducationJourney from "./education-journey";
import ExperienceJourney from "./experience-journey";
import WorkJourney from "./work-journey";

const Journey = () => {
  return (
    <>
      <section className="h-[800px] bg-black px-32 pt-[50px] text-white">
        <div className="flex">
          {/* <EducationJourney />
          <WorkJourney /> */}
          <ExperienceJourney />
        </div>
      </section>
    </>
  );
};

export default Journey;
