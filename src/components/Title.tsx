import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }) => {
  return (
    <div className="relative  mt-7 flex justify-center items-center">
      <div className="hidden left-0 absolute md:block md:w-[165px] lg:w-[378px] h-[1px] bg-gray-300"></div>
      <div className="rotate-45 w-[8px] h-[8px] bg-grey"></div>
      <h1 className="text-grey mx-[35px] font-noto text-md font-bold">
        {children}
      </h1>
      <div className="rotate-45 w-[8px] h-[8px] bg-grey"></div>
      <div className="hidden right-0 absolute md:block md:w-[165px] lg:w-[378px] h-[1px] bg-gray-300"></div>
    </div>
  );
};
