import Icon from "../assets/icons/gym.png";

type BodyPartProps = {
  item: any;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

const BodyPart = ({ item, bodyPart, setBodyPart }: BodyPartProps) => {
  return (
    <button
      className={`
      flex flex-col items-center justify-center hover:scale-110 transition bg-white rounded-bl-[20px] w-[270px] h-[280px] cursor-pointer gap-[47px]
      ${bodyPart === item ? "border-t-4 border-t-custom-red " : ""}
      `}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} alt="dumbell" className="w-14 h-14" />
      <p className="font-bold text-2xl text-custom-maroon capitalize">{item}</p>
    </button>
  );
};
export default BodyPart;
