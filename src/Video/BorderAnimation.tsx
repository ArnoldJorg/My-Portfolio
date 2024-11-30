import React from "react";
import ScribbleBorder from "../assets/images/chalk-border.png";

const BorderAnimation = () => {
  return (
    <img
      src={ScribbleBorder}
      alt="Scribble"
      // width="=100"
      // height="100"
      className="absolute w-[20rem] inset-x-1/3 m-auto h-[20rem] z-10  scribble-border-animation  object-cover invert rounded-full pixelated grayscale pointer pointer-events-none"
    />
  );
};

export default BorderAnimation;
