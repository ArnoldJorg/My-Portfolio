import React from "react";
// import Logo from "./assets/images/IMG_9566.jpg";
import ScribbleBorder from "./assets/images/Scribble.png";
import Logo1 from "./assets/images/logo192.png";
import GradientButton from "./GradientButton.tsx";

const About = () => {
  return (
    <div className="bg-black overflow-y-auto flex w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="text-white flex flex-row w-8/12 h-full mt-20   border-2 border-white">
          <div className="w-1/2 items-center justify-center border-purple-700 space-x-10 border-2 ">
            <div className="flex flex-col">
              <h1 className="items-center justify-center w-full border-2 border-blue-700 text-3xl">
                ARNOLD MOBIO
              </h1>
              <h1 className="items-center justify-center w-full border-2 border-blue-700 text-3xl">
                Software Engineer
              </h1>
              <div className="flex flex-row ">
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />{" "}
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />{" "}
                <img
                  src={Logo1}
                  width="50"
                  height="40"
                  className="m-6"
                  alt="react-image"
                />
              </div>
              <p className=" w-full break-words text-xl">
                Hello there! My name is Julius and I'm a Product Designer at
                <b> Flexa</b>, living in Berlin. I grew up on the internet and
                love computers and software. <br /> <br /> In my 10 years of
                experience I have designed User Interfaces and experiences,
                planned, supported, and implemented features and roadmaps, and
                led cross-functional teams at companies like <b>Pitch</b>,{" "}
                <b>Microsoft</b>, and Native Instruments. <br /> <br />
                P.S The video on the right is outdated and I am no longer
                looking for a new role.
              </p>
              <div className="flex space-x-10  flex-row my-8 justify-center">
                {/* number copy to clipboard? */}
                <GradientButton />
                <GradientButton />
                <GradientButton />
                <GradientButton />
              </div>
            </div>
          </div>
          <div className="w-1/2 relative flex items-start justify-center border-2 border-green-600  ">
            <img
              src={ScribbleBorder}
              alt="Scribble"
              width="=100"
              height="100"
              className="relative inset-0 h-[430px] w-[430px] z-10 border-green justify-center scribble-border-animation invert rounded-full  pixelated grayscale pointer pointer-events-none"
            />

            <iframe
              // src={Logo}
              className=" absolute p-6 mt-2 w-96 h-96 rounded-full object-contain pointer-events-auto "
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
