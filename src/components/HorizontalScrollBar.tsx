import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "../styles/hideScrollbar.css";
import { useContext } from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import { ExerciseProps } from "../utils/constants";

type HorizontalScrollBarProps = {
  data: [string] | [ExerciseProps];
  isBodyPart?: boolean;
  bodyPart?: string;
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>;
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <button
      onClick={() => scrollPrev()}
      className="cursor-pointer bg-transparent flex justify-center items-center text-custom-red text-[20px] rounded absolute xl:static -bottom-5 right-[140px] scale-75 hover:scale-[1] transition"
    >
      <img src={LeftArrowIcon} alt="Left Arrow Icon" />
    </button>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <button
      onClick={() => scrollNext()}
      className="cursor-pointer bg-transparent flex justify-center items-center text-custom-red text-[20px] rounded absolute xl:static -bottom-5 right-20 scale-75 hover:scale-[1] transition"
    >
      <img src={RightArrowIcon} alt="Right Arrow Icon" />
    </button>
  );
};

const HorizontalScrollBar = ({
  data,
  isBodyPart,
  bodyPart,
  setBodyPart,
}: HorizontalScrollBarProps) => {
  return (
    <div className="max-w-full">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item: any, i) => (
          <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className="mx-10"
          >
            {isBodyPart ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard key={i} exercise={item} />
            )}
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};
export default HorizontalScrollBar;
