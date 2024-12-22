import React from "react";
// import Logo from "./assets/images/IMG_9566.jpg";
// import ScribbleBorder from "./assets/images/chalk-border.png";
import Logo1 from "./assets/images/Finsta.jpeg";
import GradientButton from "./GradientButton.tsx";
import VideoPlayer from "./Video/VideoPlayer.tsx";
import BorderAnimation from "./Video/BorderAnimation.tsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ArrowAnimation from "./assets/Videos/arrowAnimation2.MP4";

const About = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "about");

  return (
    <div
      ref={ref}
      id="about-section"
      className=" pt-[8vw] w-screen scroll-smooth "
    >
      <div className="flex flex-col items-center justify-center min-h-full ">
        <div className=" flex lg:flex-row lg:h-[70%] phone:w-full phone:max-lg:h-full lg:w-3/4 phone:flex-col phone:justify-center phone:max-lg:items-center ">
          <div className="lg:w-full sm:w-[85%] phone:w-[90%] lg:h-full items-center justify-center phone:order-2 lg:order-1 break-words">
            <div className="flex text-white flex-col">
              <h1 className="items-center justify-center w-full  text-3xl font-Roboto ">
                Arnold Mobio
              </h1>
              <h1 className="items-center justify-center w-full text-3xl text-custom opacity-80 font-InterBold">
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
              <p className=" w-full break-words text-xl text-custom-white font-custom">
                <span className="opacity-75">
                  {" "}
                  Hello there! My name is Arnold, and I’m a{" "}
                </span>{" "}
                <span className="font-Roboto">Front-End Developer</span>
                <span className="opacity-75">
                  , with a passion for crafting intuitive and responsive web
                  applications. <br /> <br /> I’ve always been fascinated by
                  technology and how it shapes the way we interact with the
                  world, which inspired me to dive deep into software
                  development. In my journey so far, I’ve built and optimized
                  user interfaces using tools like{" "}
                </span>
                <span className="font-Roboto">React</span>,
                <span className="font-Roboto">Typescript</span>, and{" "}
                <span className="font-Roboto">Tailwind</span>{" "}
                <span className="opacity-75">
                  , collaborated on backend systems with{" "}
                </span>
                <span className="font-Roboto">Node.js </span> and{" "}
                <span className="font-Roboto">Prisma</span>
                <span className="opacity-75">
                  , and worked with teams to deliver scalable and impactful
                  solutions. Whether it’s translating designs into seamless user
                  experiences or solving complex problems, I love turning ideas
                  into reality.
                </span>
              </p>
              <div></div>
              <div className="flex space-x-4 phone:justify-center lg:justify-start flex-row phone:my-4 lg:my-8 ">
                {/* <GradientButton name="Email" /> */}
                <GradientButton
                  name="CV/Resume"
                  link="/Arnold Jorg M CV.docx"
                  download="Arnold_Mobio_CV.docx"
                />
                <GradientButton
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/arnold-j%C3%B6rg-m/"
                />
                <GradientButton
                  name="Whats App"
                  link="https://www.google.com/"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-full items-center justify-center phone:order-1 lg:order-2 phone:mb-10 ">
            <BorderAnimation />
            <VideoPlayer />

            <video
              src={ArrowAnimation}
              autoPlay
              loop
              muted
              playsInline
              className="  grayscale z-5 lg:w-[12vw] lg:h-[12vw] sm:w-[24vw] sm:h-[24vw] phone:w-[20vw] phone:h-[20vw] lg:rotate-90 phone:rotate-160 absolute min-[1375px]:top-[calc(50%+19vw)] min-[1375px]:left-[37%] transform -translate-x-1/2 lg:top-[calc(50%+20vw)] lg:left-[40%] sm:max-[1375px]:top-[calc(0%+1vw)] phone:top-[calc(10%+1vw)] sm:max-[1375px]:left-[27%] phone:max-[1375px]:left-[28%] "
            />
            <h2 className="z-5  text-white rotate-315  absolute lg:top-[calc(50%+18vw)] lg:left-[27%] phone:top-[10%] phone:left-[12%] transform -translate-x-1/2 font-Caveat  phone:text-lg sm:text-2xl opacity-75">
              Let me <br /> introduce <br /> myself
            </h2>
          </div>
        </div>
      </div>
      {/* marking when it was perfect */}
    </div>
  );
};

export default About;
