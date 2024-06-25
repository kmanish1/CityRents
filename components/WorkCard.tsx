import React from "react";

export default function WorkCard({
  icon,
  stats,
  text,
}: {
  icon: string;
  stats: string;
  text: string;
}) {
  return (
    <div
      className={`text-center text-black hover:bg-blue-100 hover:drop-shadow-md rounded-lg p-4 transition-transform transform hover:scale-102 duration-1000`}
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
        <h3 className=" text-xl md:text-2xl font-semibold text-center">
          {stats}
        </h3>
        <p className=" text-small text-center p-2">{text}</p>        
      </div>
    </div>
  );
}


