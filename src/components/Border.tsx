import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Border = ({ children }) => {
  return (
    <div className="hidden md:flex relative md:mt-[54px] lg:mt-[92px] justify-center items-center">
      <div className=" left-0 absolute  md:w-[335px] lg:w-[548px] h-[1px] bg-gray-300"></div>
      <div className="rotate-45 w-[8px] h-[8px] bg-grey"></div>
      <div className="hidden right-0 absolute md:block md:w-[335px] lg:w-[548px] h-[1px] bg-gray-300"></div>
    </div>
  );
};
