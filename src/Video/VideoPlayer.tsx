import React from "react";

const VideoPlayer = () => {
  return (
    <iframe
      // src={Logo}
      className=" sm:items-center z-20 inset-x-1/3 sm:justify-center sm:m-auto lg:absolute sm:w-[30vw] sm:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain  "
      // width="100"
      // height="100"
      // alt="react-image"
      src="https://www.youtube.com/embed/fdLh5pg0nG0"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
