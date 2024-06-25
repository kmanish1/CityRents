import React from "react";

export default function Navbar() {
  return (
    <div className="flex bg-deepBlue relative py-3 w- [1080px] mx-auto items-center justify-evenly overflow-x-hidden">
      <h3 className="text-2xl font-bold">CityRents</h3>
      <ul className="flex space-x-6 items-center overflow-hidden">
        <li className="py-3 text-center font-mullish hover:text-blue-600 cursor-pointer transition-all duration-200 relative group hidden lg:block">
          <a>Home</a>
          <div className="w-full absolute h-1 bg-blue-600 bottom-0 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className="py-3 font-mullish hover:text-blue-600 cursor-pointer transition-all duration-200 relative group hidden lg:block">
          <a>Services</a>
          <div className="w-full absolute h-1 bg-blue-600 bottom-0 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className="py-3 font-mullish hover:text-blue-600 cursor-pointer transition-all duration-200 relative group hidden lg:block">
          <a>Locations</a>
          <div className="w-full absolute h-1 bg-blue-600 bottom-0 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className="py-3 font-mullish hover:text-blue-600 cursor-pointer transition-all duration-200 relative group hidden lg:block">
          <a>About Us</a>
          <div className="w-full absolute h-1 bg-blue-600 bottom-0 hidden group-hover:block transition-all duration-200"></div>
        </li>
        <li className="py-3 font-mullish hover:text-blue-600 cursor-pointer transition-all duration-200 relative group hidden lg:block">
          <a>Contact Us</a>
          <div className="w-full absolute h-1 bg-blue-600 bottom-0 hidden group-hover:block transition-all duration-200"></div>
        </li>
      </ul>
      <div className="flex space-x-6">
        <button className=" border-blue-600 border text-sm px-3 py-1 rounded font-mullish font-bold">
          Log in
        </button>
        <div className="block items-center lg:hidden px-3 py-1">
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="20" rx="8" fill="white"></rect>
            <rect y="30" width="100" height="20" rx="8" fill="white"></rect>
            <rect y="60" width="100" height="20" rx="8" fill="white"></rect>
          </svg>
        </div>
        <button className="px-3 py-1 rounded font-mullish text-sm text-blue-400 hover:text-blue-500 font-bold">
          Sign Up
        </button>
      </div>
      <div className="hidden lg:block">
        <button className="text-center rounded bg-blue-500 text-white px-4 py-2 ">
          Submit Property
        </button>
      </div>
    </div>
  );
}
