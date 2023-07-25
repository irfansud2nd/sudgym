type ExerciseVideosProps = {
  exercisesVideos: [];
  name: string;
  videosError: string | null;
};

const ExerciseVideos = ({
  exercisesVideos,
  name,
  videosError,
}: ExerciseVideosProps) => {
  return (
    <section className="mt-5 xl:mt-[200px] p-5">
      <h1 className="text-4xl font-semibold mb-8">
        Watch <span className="text-custom-red capitalize">{name}</span>{" "}
        exercise videos
      </h1>
      {exercisesVideos.length ? (
        <div className="flex flex-col xl:flex-row flex-wrap items-center xl:gap-[110px]">
          {exercisesVideos?.slice(0, 3).map((item: any, index) => (
            <a
              key={index}
              className="flex flex-col gap-6 w-[320px] h-[300px] lg:w-[360px] lg:h-[360px]"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <div>
                <h5 className="font-semibold text-xl">{item.video.title}</h5>
                <h6 className="text-lg">from {item.video.channelName}</h6>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <h2 className="font-bold text-2xl">Loading...</h2>
      )}
    </section>
  );
};
export default ExerciseVideos;
