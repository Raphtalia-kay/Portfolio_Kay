import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animated-progress-provider";

type ProgressbarProps = {
  valueEnd: number;
};

const Progressbar = ({ valueEnd }: ProgressbarProps) => {
  return (
    <>
      <AnimatedProgressProvider
        valueEnd={valueEnd}
        duration={4} // Animation duration
        easingFunction={easeQuadInOut}
      >
        {(value: number) => {
          const roundedValue = Math.round(value);
          return (
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                strokeWidth={4}
                value={roundedValue}
                text={`${roundedValue}%`}
                styles={buildStyles({
                  pathTransition: "none", // Disable default transition
                  pathColor: "white",
                  textColor: "white",
                  trailColor: "black",
                })}
              />
            </div>
          );
        }}
      </AnimatedProgressProvider>
    </>
  );
};

export default Progressbar;
