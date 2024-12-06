import React from "react";
import ScribbleBorder from "../assets/images/chalk-border.png";

const BorderAnimation = () => {
  return (
    <img
      src={ScribbleBorder}
      alt="Scribble"
      // width="=100"
      // height="100"
      className="absolute sm:items-center sm:justify-center sm:top:10 lg:w-[25vw] inset-x-1/3 m-auto sm:w-[30vw] sm:h-[30vw] lg:h-[25vw] z-10  scribble-border-animation  object-cover invert rounded-full pixelated grayscale pointer pointer-events-none "
    />
  );
};

export default BorderAnimation;
