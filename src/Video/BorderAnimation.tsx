import React from "react";
import ScribbleBorder from "../assets/images/chalk-border.png";

const BorderAnimation = () => {
  return (
    <img
      src={ScribbleBorder}
      alt="Scribble"
      // width="=100"
      // height="100"
      className="absolute phone:items-center phone:justify-center phone:top:10  inset-x-1/3 m-auto phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw] z-30  scribble-border-animation  object-cover invert rounded-full pixelated grayscale pointer pointer-events-none "
    />
  );
};

export default BorderAnimation;
