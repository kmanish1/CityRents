import React from "react";

export default function ServiceCard({
  icon,
  heading,
  text,
}: {
  icon: string;
  heading: string;
  text: string;
}) {
  return (
    <div
      className={`text-center bg-[#fbe277] ml-2  pr-5 border-2 border-dotted border-[#22cc88] rounded-3xl rounded-tr-[100px] p-2 transition-transform transform hover:scale-102 duration-1000`}
    >
      {/* shadow-[rgba(0,0,15,0.3)_10px_5px_4px_0px] */}
      <div className="grid grid-cols-3">
        <img
          src={icon}
          className="w-[100px] mb-5  col-span-2 text-center h-[100px] transition-transform transform hover:scale-105"
          width={147}
          height={147}
        />
      </div>
      <div className=" mt-4 mb-2 text-left">
        <h3 className=" text-xl md:text-2xl text-black font-medium pb-2">
          {heading}
        </h3>
        <p className="text-sm">{text}</p>
        {/* <div className="absolute bottom-2 m-auto left-0 right-0">
          <button className="text-center rounded bg-blue-500 text-white px-4 py-2 ">
            Learn More
          </button>
        </div> */}
      </div>
    </div>
  );
}
