import React from "react";

const GradientButton = ({ name, link, download }) => {
  const onClickEvent = () => {
    console.log("gwhesg9ew8gewh998h");
    // will put function in here later
  };

  return (
    <a
      href={link}
      download={download}
      className="flex flex-col items-center justify-center text-white hover:opacity-90"
    >
      <div className="card-wrapper h-[40px] w-[100px]">
        <div className="card-content flex items-center justify-center text-xs">
          <div className="text-center">
            <p className="font-semibold text-custom-white">{name}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default GradientButton;
