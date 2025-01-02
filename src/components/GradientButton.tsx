import React from "react";
import DownloadIcon from "./icons/DownloadIcon.tsx";
import ArrowIcon from "./icons/ArrowIcon.tsx";

const GradientButton = ({ name, link, download, uploadIcon, arrowIcon }) => {
  return (
    <a href={link} download={download} className="flex  hover:opacity-90  ">
      <div className="card-wrapper h-[40px] w-[100px] ">
        <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
          {uploadIcon && <DownloadIcon />}
          {arrowIcon && <ArrowIcon />}

          <p className="font-semibold text-custom-white  flex items-end">
            {name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default GradientButton;
