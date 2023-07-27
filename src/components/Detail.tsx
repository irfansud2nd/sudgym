import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { ExerciseProps } from "../utils/constants";
import { useState } from "react";
import Loading from "./Loading";

type DetailProps = {
  exerciseDetail: ExerciseProps;
  detailError: string | null;
};

const Detail = ({ exerciseDetail, detailError }: DetailProps) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const [isImageLoading, setIsImageLoading] = useState(true);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row p-5 justify-center items-center">
      {isImageLoading ? <Loading /> : null}
      <img
        src={gifUrl}
        alt={name}
        onLoad={() => setIsImageLoading(false)}
        loading="lazy"
        className={`${
          isImageLoading ? "hidden" : "block"
        } w-[300px] h-[300px] xl:w-[729px] xl:h-[742px]`}
      />
      <div className="flex flex-col justify-center gap-5 xl:gap-9 ">
        <h1 className="text-5xl font-bold capitalize">{name}</h1>
        <p className="text-xl">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}.it will improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div key={item.name} className="flex flex-row gap-6 items-center">
            <button className="bg-[#fff2db] rounded-full w-[100px] h-[100px]">
              <img
                src={item.icon}
                alt={bodyPart}
                className="mx-auto w-[50px] h-[50px]"
              />
            </button>
            <h6 className="font-semibold text-lg capitalize">{item.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Detail;
