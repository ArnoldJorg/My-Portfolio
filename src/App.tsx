import React, { useState } from "react";
import About from "./About.tsx";
import WorkSection from "./WorkSection.tsx";

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
        <div className="flex flex-row justify-center items-center p-4 px-9 space-x-10 bg-black rounded-full border-custom-grey-3 border-2 text-custom-white  ">
          <nav>
            <a
              href="#about-section"
              className={`px-4 py-2 rounded-full ${
                activeSection === "about"
                  ? "bg-white text-black"
                  : "text-custom-white"
              }`}
            >
              About
            </a>
            <a
              href="#work-section"
              className={`px-4 py-2 rounded-full ${
                activeSection === "work"
                  ? "bg-white text-black"
                  : "text-custom-white"
              }`}
            >
              Work
            </a>
          </nav>
        </div>
      </div>
      <About onInViewChange={handleInViewChange} />
      <WorkSection onInViewChange={handleInViewChange} />
    </div>
  );
}

// plan --- about / work
// about will have about-text about-video components and an about.me page is where it will be rendered is just a page about me - and 4 buttons underneath hyperlinking to a certain link
export default App;
