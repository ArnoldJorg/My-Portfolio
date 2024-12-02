import React from "react"; // Add this import statement
import About from "./About.tsx";
import ScrollTest from "./ScrollTest.tsx";
// import GradientButton from "./GradientButton.tsx";

function App() {
  return (
    <div className=" bg-black overflow-y-auto ">
      <div className="z-10  w-screen bottom-6 flex items-center justify-center fixed ">
        <div className="flex flex-row justify-center items-center p-5 px-8 space-x-10 bg-black rounded-full border-white border-2">
          <button className="text-white">About</button>
          <button className="text-white">Work</button>
          <button className="text-white">More</button>
        </div>
      </div>
      <About />

      <ScrollTest />
    </div>
  );
}

// plan --- about / work
// about will have about-text about-video components and an about.me page is where it will be rendered is just a page about me - and 4 buttons underneath hyperlinking to a certain link
export default App;
