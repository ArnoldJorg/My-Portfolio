import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo1 from "./assets/images/Finsta.jpeg";

const WorkSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "work");

  return (
    <div
      ref={ref}
      id="work-section"
      className=" text-white flex flex-col border-pink-800 ] border2 w-screen items-center"
    >
      <div className="flex lg:w-[30%] sm:w-[60%] flex-col justify-center ">
        <div className="flex  sm:flex-col lg:flex-row items-center sm:space-y-3 lg:justify-between ">
          <div className="flex items-center space-x-2">
            <img
              src={Logo1}
              width="50"
              height="50"
              className=" rounded-xl i"
              alt="react-image"
            />{" "}
            <p className="text-3xl"> Finsta</p>
          </div>
          <div className="rounded-full bg-stone-800 border-2 border-stone-200 lg:justify-end px-3 p-1">
            <p className="text-xs">2018-2022</p>
          </div>
        </div>
        <p className=" w-full break-words text-xl text-custom-white pt-[8vw]">
          Hello there! My name is Julius and I'm a Product Designer at
          {/* specific fonts and boldness I will specify soon*/}{" "}
          <span className="opacity-100"> Flexa</span>
          <span className="opacity-75">
            , living in Berlin. I grew up on the internet and love computers and
            software. <br /> <br /> In my 10 years of experience I have designed
            User Interfaces and experiences, planned, supported, and implemented
            features and roadmaps, and led cross-functional teams at companies
            like <b>Pitch</b>,<b>Microsoft</b>, and Native Instruments. <br />{" "}
            <br />
            P.S The video on the right is outdated and I am no longer looking
            for a new role.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WorkSection;
