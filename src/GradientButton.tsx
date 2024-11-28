import React from "react";

const GradientButton = () => {
  const onClickEvent = () => {
    console.log("gwhesg9ew8gewh998h");
  };

  return (
    <button
      onClick={() => onClickEvent()}
      className="flex flex-col items-center justify-center text-white hover:opacity-90"
    >
      <div className="card-wrapper h-[40px] w-[100px]">
        <div className="card-content flex items-center justify-center text-xs">
          <div className="text-center">
            <p className="font-semibold text-custom-white">CV/Resume</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default GradientButton;
