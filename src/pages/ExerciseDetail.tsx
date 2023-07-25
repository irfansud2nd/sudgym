import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimiliarExercises from "../components/SimiliarExercises";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<any>({});
  const [exerciseVideos, setExerciseVideos] = useState<any>([]);
  const [targetExercises, setTargetExercises] = useState<any>([]);
  const [equipmetntExercises, setEquipmetntExercises] = useState<any>([]);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [videosError, setVideosError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
        .then((data) => {
          setExerciseDetail(data);
          fetchExerciseVideos();
          fetchTargetExerciseData(data.target);
          fetchEquipmentExerciseData(data.equipment);
        })
        .catch((error) => setDetailError(error.message));

      const fetchExerciseVideos = () => {
        fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`,
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
