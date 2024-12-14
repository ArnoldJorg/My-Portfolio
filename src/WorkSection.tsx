import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Logo1 from "./assets/images/Finsta.jpeg";
import Logo2 from "./assets/images/finsta-profilepage.png";
import Logo3 from "./assets/images/finsta-iphone-picture-1.png";
import Logo4 from "./assets/images/Finsta-lady.png";
import Logo5 from "./assets/images/Finsta-Call.png";
import Logo6 from "./assets/images/Q-point-all-devices.png";
import Logo7 from "./assets/images/Q-pointlogo.png";

const WorkSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  if (onInViewChange) onInViewChange(inView, "work");

  return (
    <div
      ref={ref}
      id="work-section"
      className=" text-white flex flex-col  w-screen mx-auto items-center"
    >
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col justify-center pt-[8vw] ">
        <div className="flex  sm:flex-col lg:flex-row items-center sm:space-y-1 lg:justify-between ">
          <div className="flex items-center space-x-3">
            <img
              src={Logo1}
              width="50"
              height="50"
              className=" rounded-xl"
              alt="finsta-logo"
            />{" "}
            <h1 className="text-3xl font-Roboto"> Finsta Chat App</h1>
          </div>
          <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end px-3 p-1">
            <p className="text-xs">2023-2024</p>
          </div>
        </div>
        <p className=" w-full break-words text-xl text-custom-white pt-[8vw] font-custom">
          A dating app developed for a client of Solutionize, where users set
          message rates and charge per interaction.
          <span className="opacity-75">
            I contributed to the front-end interface, creating a responsive,
            user-friendly experience. Additionally, I implemented new API routes
            with secure authorization protocols and updated Prisma schemas to
            support evolving features, enhancing the app’s data accuracy and
            functionality.
          </span>
        </p>
      </div>

      <div className="flex lg:w-[30%] sm:w-[60%] flex-row justify-center space-x-6 m-10  ">
        <img src={Logo2} className="  rounded-2xl" alt="react-image" />
        <img
          src={Logo3}
          className=" flex  w-[40%] rounded-3xl  "
          alt="user-profile-interface"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col ">
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
      <div className="flex lg:w-[30%] sm:w-[60%] flex-row justify-center space-x-6 m-10">
        <img
          src={Logo5}
          className="flex rounded-2xl border"
          alt="the-finsta-call-function"
        />
        <img
          src={Logo4}
          className=" flex  w-[40%] rounded-3xl  "
          alt="the-previous-profile-interface"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Complex Features and Seamless User Experiences
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
          One of the most rewarding aspects of my work has been implementing
          advanced app features that integrate front-end responsiveness with
          robust backend functionality. For example, I developed a Call Feature
          where users can seamlessly initiate and manage calls directly within
          the app, powered by WebRTC for real-time communication. On the
          backend, Node.js and Express handle authentication and session
          management, while PostgreSQL ensures reliable logging of call
          histories. <br /> <br /> Additionally, I created a Like Feature that
          allows users to like photos with an optional payment system. This
          includes integration with Stripe for secure transactions, dynamic data
          updates using GraphQL, and responsive UI elements styled with Tailwind
          CSS. User profiles, including biographies and stats, are displayed via
          optimized API queries, ensuring smooth real-time updates. <br />{" "}
          <br /> These features highlight my ability to handle complex data
          flows and craft user-centric designs that combine functionality with
          an exceptional user experience.
        </p>
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col justify-center pt-[8vw] ">
        {/* section i am editing */}
        <div className="flex  sm:flex-col lg:flex-row items-center sm:space-y-1 lg:justify-between ">
          <div className="flex items-center space-x-3">
            <img
              src={Logo7}
              width="50"
              height="50"
              className=" rounded-xl i"
              alt="qpoint-logo"
            />{" "}
            <h2 className="text-3xl font-Roboto"> Q-point Systems</h2>
          </div>
          <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end  px-3 p-1">
            <p className="text-xs">2022-2023</p>
          </div>
        </div>
        <p className=" w-full break-words text-xl text-custom-white pt-[8vw]">
          <span className="font-custom opacity-80">
            Contributed to the development of the admin panel for a{" "}
          </span>
          <span className="font-Roboto">self-service checkout system </span>{" "}
          <span className="font-custom opacity-80">
            designed for restaurant use, enabling seamless menu and order
            management. My role involved implementing front-end features and
            streamlining the interface to enhance usability for restaurant
            staff. I also added pagination to handle large datasets, allowing
            for quicker load times and easier navigation through extensive menu
            items.
          </span>
        </p>
      </div>
      <div className="flex lg:w-[30%]  sm:w-[60%] justify-center space-x-6 m-10">
        <img
          src={Logo6}
          className="flex rounded-2xl "
          alt="qpoint-dashboard-on-phone-tablet-and-self-checkout-machine"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col ">
        <p>
          <span className="flex w-full break-words text-lg text-custom-white justify-center pt-[1vh] pb-[5vh] font-custom opacity-60">
            The User Customised Dashboard UI
          </span>
          <span className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
            One of my key contributions was designing and building the Home Menu
            page, displaying all food items with a user-friendly interface. I
            conceptualized the layout using Adobe XD, aligning with our team’s
            color scheme chosen through trial and improvement. This page
            featured a dynamic banner at the top, adding visual appeal with a
            moving image. I also added interactive buttons like “Order Now” and
            quantity selectors for a streamlined ordering experience, creating a
            smooth, engaging page tailored to high-traffic use.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WorkSection;
