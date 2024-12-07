import React from "react";
// import Logo from "./assets/images/IMG_9566.jpg";
// import ScribbleBorder from "./assets/images/chalk-border.png";
import Logo1 from "./assets/images/Finsta.jpeg";
import GradientButton from "./GradientButton.tsx";
import VideoPlayer from "./Video/VideoPlayer.tsx";
import BorderAnimation from "./Video/BorderAnimation.tsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "about");

  return (
    <div
      ref={ref}
      id="about-section"
      className=" py-[8vw] w-screen scroll-smooth "
    >
      <div className="flex flex-col items-center justify-center min-h-full w-full ">
        <div className=" flex lg:max-2xl:flex-row lg:w-[60%] lg:max-2xl:h-[70%] sm:w-full sm:max-lg:h-full lg:max-2xl:w-3/4 sm:max-lg:flex-col ">
          <div className="w-full lg:h-full items-center justify-center space-x-10  sm:max-lg:order-2 lg:max-2xl:order-1">
            <div className="flex text-white flex-col ">
              <h1 className="items-center justify-center w-full  font-InterBold text-3xl  ">
                Arnold Mobio
              </h1>
              <h1 className="items-center justify-center w-full text-3xl text-custom opacity-80">
                Software Engineer
              </h1>
              <div className="flex flex-row my-2 ">
                <img
                  src={Logo1}
                  width="40"
                  height="40"
                  className="mr-7 my-6 rounded-xl flex items-center justify-center"
                  alt="react-image"
                />
                <p className="font-Roboto flex  mx-2 my-7  justify-center items-center text-xl bg-gray-600 px-2 rounded-xl">
                  {"<solutionize/>"}
                </p>
              </div>
              <p className=" w-full break-words text-xl text-custom-white">
                Hello there! My name is Arnold, and I’m a Front-End Developer
                with a passion for crafting intuitive and responsive web
                applications. <br /> <br />
                {/* specific fonts and boldness I will specify soon*/}{" "}
                {/* <span className="opacity-100"> Flexa</span> */}
                <span className="opacity-75">
                  I’ve always been fascinated by technology and how it shapes
                  the way we interact with the world, which inspired me to dive
                  deep into software development. <b>In my journey so far</b>,
                  I’ve built and optimized user interfaces using tools like
                  React, TypeScript, and Tailwind, collaborated on backend
                  systems with Node.js and Prisma, and worked with teams to
                  deliver scalable and impactful solutions. Whether it’s
                  translating designs into seamless user experiences or solving
                  complex problems, I love turning ideas into reality.
                </span>
              </p>
              <div className="flex space-x-4 sm:justify-center lg:justify-start flex-row sm:my-4 lg:my-8 ">
                <GradientButton name="Email" />
                <GradientButton name="CV/Resume" />
                <GradientButton name="LinkedIn" />
                <GradientButton name="Whats App" />
              </div>
            </div>
          </div>
          <div className="sm:relative w-full h-full items-center justify-center sm:order-1 lg:order-2 sm:mb-10 sm:max-lg:border-2 ">
            <BorderAnimation />
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
