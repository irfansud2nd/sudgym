import { InfinitySpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <InfinitySpin color="grey" />
    </div>
  );
};
export default Loading;
