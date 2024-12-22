import React from "react";
import Logo1 from "./assets/images/Finsta.jpeg";
import Logo2 from "./assets/images/JavaScript-logo.png";
import Logo3 from "./assets/images/tailwind-logo.png";
import ReactLogo from "./assets/images/logo512.png";
import NotePad from "./assets/images/note-pad.jpg";
import PortfolioImage from "./assets/images/portfolio-picture.png";
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
        <div className="flex  phone:flex-col lg:flex-row  sm:space-y-3 items-center text-center ">
          <p className="text-2xl text-white font-Roboto ">
            Personal Projects & Further Learning
          </p>
        </div>
        <div className="w-full pt-[8vh] flex flex-col  items-center">
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
      <div className="flex phone:w-full h-full  lg:flex-row phone:flex-col justify-center lg:space-x-6 phone:max-lg:space-y-6 m-10 phone:max-lg:items-center">
        <a
          href="https://www.google.com/?zx=1734404830180&no_sw_cr=1"
          className=" relative flex lg:w-[30%] sm:w-[60%] phone:w-[80%] rounded-2xl border group hover:opacity-80 cursor-pointer"
        >
          <img
            src={NotePad}
            className="object-cover rounded-2xl "
            alt="Portfolio-Image"
          />

          <p className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-opacity-0 text-white group-hover:text-opacity-100  select-none pointer-events-none">
            <span className=" text-5xl font-Roboto   ">Note App</span>
            <span className="flex text-lg font-Caveat  ">
              click to check out my code on Github pages
            </span>
          </p>
        </a>
        <a
          href="https://www.google.com/?zx=1734404830180&no_sw_cr=1"
          className=" relative flex lg:w-[30%] sm:w-[60%] phone:w-[80%]  rounded-2xl border group hover:opacity-80 cursor-pointer"
        >
          <img
            src={PortfolioImage}
            className="object-cover rounded-2xl "
            alt="Portfolio-Image"
          />

          <p className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-opacity-0 text-zinc-700 group-hover:text-opacity-100 select-none pointer-events-none">
            <span className=" text-5xl font-Roboto   ">Creative&nbsp;CV</span>
            <span className="flex text-lg font-Caveat  ">
              click to check out my code on Github pages
            </span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default MorePage;
