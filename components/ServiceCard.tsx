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
      className={`text-center hover:drop-shadow-2xl hover:bg-blue-100 rounded-lg p-4 transition-transform transform hover:scale-102 duration-1000`}
    >
      <div className="flex items-center justify-center">
        <img
          src={icon}
          className="w-[100px] text-center h-[100px] transition-transform transform hover:scale-105"
          width={147}
          height={147}
        />
      </div>
      <div className=" my-6 text-center">
        <h3 className=" text-xl md:text-2xl text-black font-semibold text-center pb-6">
          {heading}
        </h3>
        <p className=" text-small text-center p-2">{text}</p>
        <div className="absolute bottom-0 m-auto left-0 right-0">
          <button className="text-center rounded bg-blue-500 text-white px-4 py-2 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
