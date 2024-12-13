import React from "react";
import Logo1 from "./assets/images/Finsta.jpeg";
import Logo2 from "./assets/images/JavaScript-logo.png";
import Logo3 from "./assets/images/tailwind-logo.png";
import ReactLogo from "./assets/images/logo512.png";
import { useInView } from "react-intersection-observer";

import Project from "./Project.tsx";

const MorePage = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "more");
  return (
    <div
      ref={ref}
      id="more-section"
      className="p-16 space-y-16 flex flex-col w-screen items-center "
    >
      <div className="flex lg:w-[30%] sm:w-[60%] flex-col justify-center ">
        <div className="flex  sm:flex-col lg:flex-row  sm:space-y-3 justify-center">
          <p className="text-2xl text-white font-Roboto">
            {" "}
            Personal Projects & Further Learning
          </p>
        </div>
        <div className="w-full pt-[8vh] flex flex-col ">
          <div className="w-full py-6  text-white flex flex-row m-4 border-opacity-25 border-b border-white ">
            <p className="flex-1 ">
              <div className="flex flex-col">
                <p className="flex-1 font-Roboto">My Portfolio</p>
                <p className="flex-1 font-custom opacity-80">2024-Now </p>
              </div>{" "}
            </p>

            <div className="flex flex-1 justify-end">
              <div className="flex flex-col">
                <div className="flex-row flex space-x-1">
                  {" "}
                  <img
                    src={ReactLogo}
                    width="25"
                    height="25"
                    className=" flex rounded-lg"
                    alt="react-image"
                  />
                  <img
                    src={Logo2}
                    width="25"
                    height="25"
                    className=" flex rounded-lg"
                    alt="Javascript-logo"
                  />
                  <img
                    src={Logo3}
                    width="25"
                    height="25"
                    className=" flex rounded-lg"
                    alt="Tailwind-Logo"
                  />
                </div>
                <div className="flex flex-1" />
              </div>
            </div>
          </div>
          <Project
            name="Note Taking App"
            range="2024-now"
            nativeIcon={true}
            nodeIcon={true}
            prismaIcon={true}
            tailwindIcon={true}
            axiosIcon={true}
            postgresIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MorePage;
