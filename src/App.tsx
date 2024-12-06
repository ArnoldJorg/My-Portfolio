import React, { useState } from "react";
import About from "./About.tsx";
import WorkSection from "./WorkSection.tsx";
import MorePage from "./MorePage.tsx";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const handleInViewChange = (inView, section) => {
    if (inView) {
      setActiveSection(section);
    }
  };

  return (
    <div className=" bg-black overflow-y-auto ">
      <div className="z-10  w-screen bottom-6 flex items-center justify-center fixed ">
        <div className="flex flex-row justify-center items-center p-4 px-8 bg-black rounded-full border-custom-grey-3 border-2 text-xl ">
          <nav className="space-x-8">
            <a
              href="#about-section"
              className={
                activeSection === "about"
                  ? " text-white "
                  : "text-white opacity-60 hover:opacity-100"
              }
            >
              About
            </a>
            <a
              href="#work-section"
              className={
                activeSection === "work"
                  ? " text-white "
                  : "text-white opacity-60 hover:opacity-100"
              }
            >
              Work
            </a>
            <a
              href="#more-section"
              className={
                activeSection === "more"
                  ? " text-white "
                  : "text-white opacity-60 hover:opacity-100"
              }
            >
              More
            </a>
          </nav>
        </div>
      </div>
      <About onInViewChange={handleInViewChange} />
      <WorkSection onInViewChange={handleInViewChange} />
      <MorePage onInViewChange={handleInViewChange} />
    </div>
  );
}

// plan --- about / work
// about will have about-text about-video components and an about.me page is where it will be rendered is just a page about me - and 4 buttons underneath hyperlinking to a certain link
export default App;
