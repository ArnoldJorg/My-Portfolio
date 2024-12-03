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
    <div ref={ref} id="about-section" className=" h-screen w-screen   ">
      <div className="flex flex-col items-center justify-center min-h-full w-full ">
        <div className=" flex flex-row w-7/12 h-[70%]  ">
          <div className="w-[100%] h-[100%]  items-center justify-center space-x-10  ">
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
                Hello there! My name is Julius and I'm a Product Designer at
                {/* specific fonts and boldness I will specify soon*/}{" "}
                <span className="opacity-100"> Flexa</span>
                <span className="opacity-75">
                  , living in Berlin. I grew up on the internet and love
                  computers and software. <br /> <br /> In my 10 years of
                  experience I have designed User Interfaces and experiences,
                  planned, supported, and implemented features and roadmaps, and
                  led cross-functional teams at companies like <b>Pitch</b>,
                  <b>Microsoft</b>, and Native Instruments. <br /> <br />
                  P.S The video on the right is outdated and I am no longer
                  looking for a new role.
                </span>
              </p>
              <div className="flex space-x-4  flex-row my-8 ">
                <GradientButton name="Email" />
                <GradientButton name="CV/Resume" />
                <GradientButton name="LinkedIn" />
                <GradientButton name="Whats App" />
              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] inline-block  ">
            <BorderAnimation />
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
