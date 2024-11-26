import React from "react";

const GradientButton = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-950 text-white">
      <div className="card-wrapper h-[50px] w-[100px]">
        <div className="card-content flex items-center justify-center text-xs">
          <div className="text-center">
            <button className="font-semibold underline">CV/Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientButton;
