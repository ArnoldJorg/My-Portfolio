import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo1 from "./assets/images/Finsta.jpeg";
import Logo2 from "./assets/images/finsta-profilepage.png";
import Logo3 from "./assets/images/finsta-iphone-picture-1.png";

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
          <div className="flex items-center space-x-3">
            <img
              src={Logo1}
              width="50"
              height="50"
              className=" rounded-xl i"
              alt="react-image"
            />{" "}
            <p className="text-3xl font-Roboto"> Finsta Chat App</p>
          </div>
          <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end px-3 p-1">
            <p className="text-xs">2023-2024</p>
          </div>
        </div>
        <p className=" w-full break-words text-xl text-custom-white pt-[8vw]">
          A dating app developed for a client of Solutionize, where users set
          message rates and charge per interaction.
          {/* specific fonts and boldness I will specify soon*/}{" "}
          <span className="opacity-100"> *will remove*</span>
          <span className="opacity-75">
            I contributed to the front-end interface, creating a responsive,
            user-friendly experience. Additionally, I implemented new API routes
            with secure authorization protocols and updated Prisma schemas to
            support evolving features, enhancing the app’s data accuracy and
            functionality.
          </span>
        </p>
      </div>

      <div className="flex lg:w-[30%] sm:w-[90%] flex-row justify-center space-x-6 m-10">
        <img src={Logo2} className=" flex rounded-2xl" alt="react-image" />
        <img
          src={Logo3}
          className=" flex  w-[40%] rounded-3xl  "
          alt="react-image"
        />
      </div>
      <div className="flex lg:w-[30%] sm:w-[60%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          The Finsta User Profile Page
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
          Developed the Profile Page for a client called Finsta, following Figma
          designs to accurately implement a dynamic user interface. Utilized
          complex conditional logic to display content based on available data,
          such as setting a default profile icon or using gallery images when no
          icon was set. This involved updating data across 10 components,
          optimizing GraphQL queries to fetch only relevant data and improving
          loading speed by 30%. Additionally, I modified schemas and adjusted
          data properties across the project, ensuring seamless integration and
          error-free performance before merging with the main codebase.
        </p>
      </div>
    </div>
  );
};

export default WorkSection;
