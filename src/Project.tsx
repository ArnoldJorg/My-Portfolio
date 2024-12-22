import React from "react";

import Logo2 from "./assets/images/JavaScript-logo.png";
import Logo3 from "./assets/images/tailwind-logo.png";
import Logo4 from "./assets/images/graphQL-logo.png";
import Logo5 from "./assets/images/node-js-logo.png";
import Logo6 from "./assets/images/postgresql-logo.png";
import Logo7 from "./assets/images/react-native-logo.png";
import Logo8 from "./assets/images/prisma-logo.png";
import Logo9 from "./assets/images/axios-logo.png";
import ReactLogo from "./assets/images/logo512.png";

const Project = ({
  name,
  range,
  reactIcon,
  javascriptIcon,
  tailwindIcon,
  graphqlIcon,
  postgresIcon,
  nativeIcon,
  nodeIcon,
  prismaIcon,
  axiosIcon,
}) => {
  return (
    <div className="w-full py-6  text-white flex flex-row m-4 border-opacity-25 border-b border-white ">
      <p className="flex-1 ">
        <div className="flex flex-col">
          <p className="flex-1 font-Roboto">{name}</p>
          <p className="flex-1 font-custom opacity-80">{range}</p>
        </div>{" "}
      </p>

      <div className="flex flex-1 justify-end">
        <div className="flex flex-col phone:space-y-1">
          <div className="flex-row flex sm:space-x-1 ">
            {reactIcon && (
              <img
                src={ReactLogo}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="react-image"
              />
            )}
            {javascriptIcon && (
              <img
                src={Logo2}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="Javascript-logo"
              />
            )}
            {tailwindIcon && (
              <img
                src={Logo3}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="Tailwind-Logo"
              />
            )}
            {graphqlIcon && (
              <img
                src={Logo4}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="GraphQL-Logo"
              />
            )}
            {postgresIcon && (
              <img
                src={Logo5}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="PostgresQL-logo"
              />
            )}
            {nodeIcon && (
              <img
                src={Logo6}
                width="25"
                height="25"
                className=" flex rounded-lg bg-white"
                alt="Node-Js-Logo"
              />
            )}
            {nativeIcon && (
              <img
                src={Logo7}
                width="30"
                height="30"
                className=" flex rounded-md"
                alt="PostgresQL-logo"
              />
            )}
            {prismaIcon === "Prisma-Logo" && (
              <img
                src={Logo8}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="Prisma-Logo"
              />
            )}
            {axiosIcon && (
              <img
                src={Logo9}
                width="25"
                height="25"
                className=" flex rounded-lg phone:max-sm:hidden"
                alt="Axios-Icon"
              />
            )}
          </div>
          <div className="flex flex-1 sm:hidden max-[375px]:justify-end ">
            {" "}
            {axiosIcon && (
              <img
                src={Logo9}
                width="25"
                height="25"
                className=" flex rounded-lg"
                alt="Axios-Icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
