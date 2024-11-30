import React from "react";

const VideoPlayer = () => {
  return (
    <iframe
      // src={Logo}
      className=" inset-x-1/3 m-auto  absolute  w-[20rem] h-[20rem]  rounded-full  pointer-events-auto object-contain"
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
