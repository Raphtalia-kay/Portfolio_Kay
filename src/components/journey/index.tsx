import EducationJourney from "./education-journey";
import WorkJourney from "./work-journey";

const Journey = () => {
  return (
    <>
      <section className="h-[800px] bg-black px-28 text-white">
        <div className="flex">
          <EducationJourney />
          <WorkJourney />
        </div>
      </section>
    </>
  );
};

export default Journey;
