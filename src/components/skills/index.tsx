import React from "react"; // Import React
import Progressbar from "./progress-bar"; // Import the Progress_bar component
import { skillsData, Skill } from "../../utils/skills-data"; // Import skills data and Skill

const Skills: React.FC = () => {
  return (
    <section className="h-[800px] bg-black px-32 text-white">
      <div className="flex flex-col items-center justify-center lg:mb-6">
        <h1 className="lg:py-[10px] lg:text-[28px]">
          Skills that I collected years and years
        </h1>
        <div className="h-[1px] w-[40px] bg-white"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:gap-x-[150px]">
        {skillsData.map(
          (
            { title, percentage }: Skill,
            index: number, // Declare type for destructured object
          ) => (
            <div className="flex flex-col items-center lg:gap-[20px] lg:pt-[30px]">
              <p>{title}</p>
              <Progressbar
                key={index}
                valueEnd={skillsData[index].percentage}
              />
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Skills;
