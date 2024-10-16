import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimiliarExercises from "../components/SimiliarExercises";
import { ExerciseProps, VideoProps } from "../utils/constants";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseProps | any>({});
  const [exerciseVideos, setExerciseVideos] = useState<[VideoProps] | any>([]);
  const [targetExercises, setTargetExercises] = useState<[ExerciseProps] | any>(
    []
  );
  const [equipmetntExercises, setEquipmetntExercises] = useState<
    [ExerciseProps] | any
  >([]);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [videosError, setVideosError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchExerciseData = () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
        .then((exercise) => {
          setExerciseDetail(exercise);
          fetchExerciseVideos(exercise.name);
          fetchTargetExerciseData(exercise.target);
          fetchEquipmentExerciseData(exercise.equipment);

          changeDocumentTitle(exercise.name);
        })
        .catch((error) => setDetailError(error.message));

      const fetchExerciseVideos = (name: string) => {
        fetchData(
          `${youtubeSearchUrl}/search?query=${name} exercise`,
          youtubeOptions
        )
          .then((data) => setExerciseVideos(data.contents))
          .catch((error) => setVideosError(error.message));
      };

      const fetchTargetExerciseData = (target: string) => {
        fetchData(
          `${exerciseDbUrl}/exercises/target/${target}`,
          exerciseOptions
        ).then((data) => setTargetExercises(data));
      };
      const fetchEquipmentExerciseData = (equipment: string) => {
        fetchData(
          `${exerciseDbUrl}/exercises/equipment/${equipment}`,
          exerciseOptions
        ).then((data) => setEquipmetntExercises(data));
      };
    };

    fetchExerciseData();
  }, [id]);

  const changeDocumentTitle = (title: string) => {
    const words = title.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    document.title = `${words.join(" ")} - SudGym`;
  };

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} detailError={detailError} />
      <ExerciseVideos
        exercisesVideos={exerciseVideos}
        name={exerciseDetail.name}
        videosError={videosError}
      />
      <SimiliarExercises
        targetExercises={targetExercises}
        equipmentExercises={equipmetntExercises}
      />
    </div>
  );
};
export default ExerciseDetail;
