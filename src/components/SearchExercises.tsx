import { useEffect, useState } from "react";
import { ExerciseProps } from "../utils/constants";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

type SearchExercisesProps = {
  setExercises: React.Dispatch<React.SetStateAction<[ExerciseProps] | []>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
}: SearchExercisesProps) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<[string]>(["all"]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataByBodyParts = async () => {
      fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      )
        .then((bodyPartsData: []) => setBodyParts(["all", ...bodyPartsData]))
        .catch((error) => setError(error.message));
    };
    fetchDataByBodyParts();
  }, []);

  const handleSearch = async (search: string) => {
    if (search) {
      fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
        .then((data) => {
          const filteredExercise = data.filter(
            (exercise: Record<string, string>) =>
              exercise.name.toLowerCase().includes(search) ||
              exercise.target.toLowerCase().includes(search) ||
              exercise.equipment.toLowerCase().includes(search) ||
              exercise.bodyPart.toLowerCase().includes(search)
          );
          setExercises(filteredExercise);
        })
        .catch((error) => setError(error.message))
        .finally(() => setSearch(""));
    }
  };

  useEffect(() => {
    if (error) console.log("error", error);
  }, [error]);

  return (
    <section className="flex flex-col items-center mt-9 justify-center text-center p-5">
      <h2 className="font-bold text-xl lg:text-5xl mb-12">
        Awesome Exercises You
        <br />
        Should Know
      </h2>
      <div className="relative mb-[72px]">
        <input
          className="h-[76px] border border-gray-300 outline-gray-400 p-3 rounded-md font-bold w-[350px] xl:w-[1170px] bg-white block"
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-custom-red text-white border-custom-red hover:text-custom-red hover:bg-white transition   w-[100px] xl:w-[175px] text-sm xl:text-xl h-14 border mt-4 rounded"
          onClick={() => handleSearch(search)}
        >
          Search
        </button>
      </div>
      {error ? (
        <div>
          <h1>{error}</h1>
        </div>
      ) : (
        <div className="relative max-w-full p-5">
          <HorizontalScrollBar
            isBodyPart
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      )}
    </section>
  );
};
export default SearchExercises;
