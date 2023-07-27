import { ExerciseProps } from "../utils/constants";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loading from "./Loading";

type SimiliarExercisesProps = {
  targetExercises: [ExerciseProps];
  equipmentExercises: [ExerciseProps];
};

const SimiliarExercises = ({
  targetExercises,
  equipmentExercises,
}: SimiliarExercisesProps) => {
  return (
    <section className="mt-0 xl:mt-[100px]">
      <h1 className="text-4xl font-semibold mb-8 ml-5">
        Another exercises that also target{" "}
        {targetExercises.length ? (
          <span className="text-custom-red capitalize">
            {targetExercises[0].target}
          </span>
        ) : null}
      </h1>
      <div className="flex p-2 relative">
        {targetExercises.length ? (
          <HorizontalScrollBar data={targetExercises} />
        ) : (
          <Loading />
        )}
      </div>
      <h1 className="text-4xl font-semibold mb-8 ml-5">
        Another exercises that also use{" "}
        {equipmentExercises.length ? (
          <span className="text-custom-red capitalize">
            {equipmentExercises[0].equipment}
          </span>
        ) : null}
      </h1>
      <div className="flex p-2 relative">
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};
export default SimiliarExercises;
