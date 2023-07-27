import { Link } from "react-router-dom";
import { ExerciseProps } from "../utils/constants";

type ExerciseCardProps = {
  key: number;
  exercise: ExerciseProps;
};

const ExerciseCard = ({ key, exercise }: ExerciseCardProps) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="w-[280px] sm:w-[320px] h-[445px] bg-white border-t-4 border-t-custom-red rounded-bl-[20px] flex flex-col justify-between pb-[10px] hover:scale-110 transition"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="h-[326px]"
        loading="lazy"
      />
      <div className="flex">
        <button className="ml-5 text-white bg-[#FFA9A9] text-sm rounded-[20px] capitalize px-3 py-1">
          {exercise.bodyPart}
        </button>
        <button className="ml-5 text-white bg-[#FCC757] text-sm rounded-[20px] capitalize px-3 py-1">
          {exercise.target}
        </button>
      </div>
      <p className="ml-5 text-2xl font-bold mt-3 pb-2 capitalize">
        {exercise.name}
      </p>
    </Link>
  );
};
export default ExerciseCard;
