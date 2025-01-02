import React from "react";

type Icon = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  extraClasses?: string;
};
type ProjectProps = {
  name: string;
  range: string;
  icons: Icon[];
};

const ProjectDetails = ({ name, range, icons = [] }: ProjectProps) => {
  return (
    <div className="w-full py-6  text-white flex flex-row m-4 border-opacity-25 border-b border-white ">
      <p className="flex-1 ">
        <div className="flex flex-col">
          <p className="flex-1 font-Roboto">{name}</p>
          <p className="flex-1 font-custom opacity-80">{range}</p>
        </div>
      </p>

      <div className="flex flex-1 justify-end">
        <div className="flex flex-col phone:space-y-1">
          <div className="flex-row flex flex-wrap sm:space-x-1 gap-1">
            {icons.map((icon, i) => (
              <img
                key={i}
                src={icon.url}
                className={`flex rounded-lg flex-shrink-0 ${
                  icon.extraClasses || ""
                }`}
                alt={icon.alt}
                style={{
                  width: `${icon.width || 25}px`,
                  height: `${icon.height || 25}px`,
                  minWidth: `${icon.width || 25}px`,
                  minHeight: `${icon.height || 25}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
