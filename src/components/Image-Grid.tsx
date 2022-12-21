import React from "react";

interface Props {
  grayText: React.ReactNode;
  orangeText: React.ReactNode;
}

const Quote = ({ grayText, orangeText }: Props) => {
  return (
    <div className="relative top-[-20px] flex flex-col">
      <img
        src="/quotes.svg"
        className="w-[30px] fill-black mb-7 self-start rotate-180 "
      />
      <p className="leading-12 uppercase mb-5 text-[14.5px] font-bold  text-slate-500">
        {grayText}
      </p>
      <p className="uppercase pb-28 text-[13px] font-bold text-orange">
        {orangeText}
      </p>
    </div>
  );
};

export const ImageGrid = () => {
  return (
    <div className="grid gap-y-6 md:grid-cols-2  lg:grid-cols-3 mt-12 md:gap-y-[60px] md:gap-x-[46px]">
      <img src="/image-1.jpg" />
      <img src="/image-2.jpg" />
      <div className="max-w-[352px] h-[416px] md:h-[100%]  text-left  items-end flex flex-col justify-end">
        <Quote
          grayText={
            <>
              I drink to make other <br />
              people more interesting.
            </>
          }
          orangeText="Ernest Hemingway"
        />
      </div>
      <img src="/image-3.jpg" />
      <img src="/image-4.jpg" />
      <div className="min-h-[452px] bg-overlaygrey pt-36 flex flex-colum justify-center">
        <div className="">
          <p className="text-white mb-2 text-[14px] font-bold text-sm">TUNA</p>
          <p className="mb-3 font-light tracking-[.2em]">Young Buck</p>
          <p className="mb-3.5 font-bold text-white text-[12px] text-xs">
            <span className="text-grey font-extrabold">Q:</span> For what would
            you be famous?
          </p>
          <p className="font-bold text-white text-[12px] text-xs">
            <span className="text-grey font-extrabold">A:</span> My legendary
            puppy dog face and 1st
            <br /> rate begging skills
          </p>
        </div>
      </div>
      <div className="max-w-[352px]  h-[416px] md:h-[100%] text-left  items-start flex flex-col justify-end">
        <Quote
          grayText={
            <>
              good people drink good
              <br />
              beer.
            </>
          }
          orangeText="HUNTER S. THOMPSON"
        />
      </div>
      <img src="/image-5.jpg" />
      <img src="/image-6.jpg" />
      <img src="/image-7.jpg" />
      <div className="relative max-w-[352px] min-h-[432px] self-end pt-[118px] md:h-[100%] text-grey bg-lightgrey">
        <p className=" mb-3 font-bold text-lg ">
          JOIN OUR
          <br /> TEAM
        </p>
        <p className="pt-2.5 w-3/4 mx-auto pb-28 text-custom  font-bold ">
          THINK YOU'VE GOT WHAT IT TAKES?
        </p>
        <img
          src="/logo-marthas.png"
          className="w-[180px] absolute -right-[60px] -bottom-[80px]"
        />
      </div>
    </div>
  );
};
