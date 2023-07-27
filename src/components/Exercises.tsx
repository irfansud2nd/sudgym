import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import ExerciseCard from "./ExerciseCard";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { ExerciseProps } from "../utils/constants";

type ExercisesProps = {
  setExercises: React.Dispatch<React.SetStateAction<[ExerciseProps] | []>>;
  bodyPart: string;
  exercises: [ExerciseProps] | [];
};

const Exercises = ({ setExercises, bodyPart, exercises }: ExercisesProps) => {
  const exercisesRef = useRef<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // react-paginate
  const [currentPage, setCurrentPage] = useState<number>(0);
  const exercisesPerPage = 9;
  const offset = currentPage * exercisesPerPage;
  const currentPageExercises = exercises.slice(
    offset,
    offset + exercisesPerPage
  );
  const pageCount = Math.ceil(exercises.length / exercisesPerPage);
  // react-paginate

  const scrollUp = () => {
    let exercisesOffsetTop: number = 1800;

    if (exercisesRef.current) {
      exercisesOffsetTop = exercisesRef.current.offsetTop;
    }

    window.scrollTo({
      top: exercisesRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const paginate = ({ selected: selectedPage }: Record<string, number>) => {
    setCurrentPage(selectedPage);
    scrollUp();
  };

  useEffect(() => {
    console.log(bodyPart);

    const fetchExercisesData = async () => {
      let exercisesData: [] = [];

      if (bodyPart === "all") {
        fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        )
          .then((data) => setExercises(data))
          .catch((error) => setError(error.message));
      } else {
        fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        )
          .then((data) => setExercises(data))
          .catch((error) => setError(error.message))
          .finally(() => scrollUp());
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <section
      id="exercises"
      className="xl:mt-[110px] mt-[50px] p-5"
      ref={exercisesRef}
    >
      <h2 className="text-3xl mb-12">Showing Results</h2>
      <div className="flex flex-wrap justify-center gap-[50px] xl:gap-[110px] ">
        {currentPageExercises.map((exercise, i) => {
          return <ExerciseCard key={i} exercise={exercise} />;
        })}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={paginate}
        activeLinkClassName="bg-custom-red text-white border-2 border-x border-red-500"
        pageLinkClassName="paginate-link"
        breakLinkClassName="paginate-link"
        nextLinkClassName="paginate-prev-next border-l rounded-r-md"
        previousLinkClassName="paginate-prev-next border-r rounded-l-md"
        className="flex mt-8 py-1 w-fit mx-auto  justify-center items-center"
      />
    </section>
  );
};
export default Exercises;
