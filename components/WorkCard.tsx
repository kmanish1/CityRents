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
      className={` text-white bg-blue-600 border-2 border-black cursor-pointer hover:drop-shadow-md rounded-3xl p-2 transition-transform transform hover:scale-102 duration-1000`}
    >
      <div className="flex items-center justify-center">
        <img
          src={icon}
          className="w-[100px] text-center h-[100px] transition-transform transform hover:scale-105"
          width={147}
          height={147}
        />
      </div>
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">
          {stats}
        </h3>
        <p className=" text-sm">{text}</p>
      </div>
    </div>
  );
}
