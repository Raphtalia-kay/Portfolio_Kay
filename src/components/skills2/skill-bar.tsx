import "./skill-bar.css";
import { useOnScreen } from "../../utils/observer";

interface SkillbarProps {
  title: string;
  percentage: string;
  item: string;
}

const Skillbar: React.FC<SkillbarProps> = ({ title, percentage, item }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 }) as [
    React.RefObject<HTMLDivElement>,
    boolean,
  ];

  return (
    <div className="skill-box pb-5" ref={ref}>
      <h3 className="title text-[12px] uppercase text-white md:text-[14px]">
        {title}
      </h3>
      <div className="skill-bar">
        <span className={`skill-per ${item} ` + (visible ? "animate" : "")}>
          <span className="tooltip text-[10px] text-white sm:text-sm">
            {percentage}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Skillbar;
