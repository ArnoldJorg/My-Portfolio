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
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col justify-center ">
        <div className="flex  sm:flex-col lg:flex-row  sm:space-y-3 justify-center">
          <p className="text-2xl text-white font-Roboto">
            {" "}
            Personal Projects & Further Learning
          </p>
        </div>
        <div className="w-full pt-[8vh] flex flex-col ">
          <Project
            name="My Portfolio"
            range="2024-now"
            reactIcon={true}
            javascriptIcon={true}
            tailwindIcon={true}
          />

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
