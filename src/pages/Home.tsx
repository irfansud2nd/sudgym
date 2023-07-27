import { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { ExerciseProps } from "../utils/constants";

const Home = () => {
  const [exercises, setExercises] = useState<[ExerciseProps] | []>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  );
};
export default Home;
