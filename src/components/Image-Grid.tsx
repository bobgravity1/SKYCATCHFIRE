import React from "react";

interface Props {
  grayText: React.ReactNode;
  orangeText: React.ReactNode;
}

const Quote = ({ grayText, orangeText }: Props) => {
  return (
    <div className="relative top-[-12px] flex flex-col">
      <img
        src="/quotes.svg"
        className="w-[30px] fill-black mb-6 self-start rotate-180 "
      />
      <p className="leading-[2em] uppercase mb-3 text-[14.5px] font-bold  text-slate-500">
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
    <div className="mt-[50px] grid gap-y-12 md:grid-cols-2  lg:grid-cols-3  md:gap-y-[60px] md:gap-x-[46px]">
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
      <div className="relative min-h-[452px] bg-overlaygrey pt-60 flex flex-colum justify-center">
        <img
          src="/dog-library.jpg"
          className="absolute top-0 left-0"
          alt="dentist office"
        />
        <div className="bg-overlaygrey  w-[100%] h-[100%] opacity-95 top-0 absolute"></div>
        <div className="absolute">
          <p className="text-white mb-1 text-[14px] font-bold text-sm">TUNA</p>
          <p className="mb-5 text-slate-700 text-[14px] tracking-[.3em]">
            Young Buck
          </p>
          <p className="mb-5 font-bold text-white text-[11px] text-xs">
            <span className="text-grey text-[14px] font-extrabold">Q:</span> For
            what would you be famous?
          </p>
          <p className="font-bold text-white text-[11px] text-xs">
            <span className="text-grey text-[14px] font-extrabold">A:</span> My
            legendary puppy dog face and 1st
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
