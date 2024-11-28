import React from "react";
// import Logo from "./assets/images/IMG_9566.jpg";
import ScribbleBorder from "./assets/images/chalk-border.png";
import Logo1 from "./assets/images/logo192.png";
import GradientButton from "./GradientButton.tsx";

const About = () => {
  return (
    <div className="bg-black overflow-y-auto flex w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-white flex flex-row w-8/12 h-full mt-20    ">
          <div className="w-[100%] h-[100%] border-purple-700 border-2 items-center justify-center  space-x-10  ">
            <div className="flex flex-col">
              <h1 className="items-center justify-center w-full  text-custom-white">
                ARNOLD MOBIO
              </h1>
              <h1 className="items-center justify-center w-full text-3xl text-custom-white">
                Software Engineer
              </h1>
              <div className="flex flex-row ">
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />
              </div>
              <p className=" w-full break-words text-xl text-custom-white ">
                {" "}
                Hello there! My name is Julius and I'm a Product Designer at
                <span className="opacity-100"> Flexa</span>
                <span className="opacity-75">
                  , living in Berlin. I grew up on the internet and love
                  computers and software. <br /> <br /> In my 10 years of
                  experience I have designed User Interfaces and experiences,
                  planned, supported, and implemented features and roadmaps, and
                  led cross-functional teams at companies like <b>Pitch</b>,
                  <b>Microsoft</b>, and Native Instruments. <br /> <br />
                  P.S The video on the right is outdated and I am no longer
                  looking for a new role.{" "}
                </span>
              </p>
              <div className="flex space-x-4  flex-row my-8 justify-center">
                {/* number copy to clipboard? */}
                <GradientButton />
                <GradientButton />
                <GradientButton />
                <GradientButton />
              </div>
            </div>
          </div>
          <div className="relative w-[100%] h-[100%] inline-block border-2 border-green-700">
            <img
              src={ScribbleBorder}
              alt="Scribble"
              // width="=100"
              // height="100"
              className="absolute w-[25rem] inset-x-0 m-auto h-[25rem] z-10 right-50% border-green scribble-border-animation  object-cover invert rounded-full pixelated grayscale pointer pointer-events-none"
            />

            <iframe
              // src={Logo}
              className=" inset-x-0 m-auto absolute  w-[25rem] h-[25rem]  rounded-full  pointer-events-auto object-contain "
              // width="100"
              // height="100"
              // alt="react-image"
              src="https://www.youtube.com/embed/fdLh5pg0nG0"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
