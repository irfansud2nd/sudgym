export type ExerciseProps = {
  bodyPart: "string";
  equipment: "string";
  gifUrl: "string";
  id: "string";
  name: "string";
  target: "string";
};

export type VideoProps = {
  video: {
    channelId: string;
    channelName: string;
    description: string;
    lengthText: string;
    publishedTimeText: string;
    thumbnails: [{ height: number; url: string; width: number }];
    title: string;
    videoId: string;
    viewCountText: string;
  };
};
