"use client";
import React, { useState } from "react";

function NavLink({ label }: { label: string }) {
  return (
    <li className="py-2 cursor-pointer border-2 border-white hover:border-black rounded-full duration-700">
      <a className="px-2" href={"#" + label}>{label}</a>
    </li>
  );
}

interface ButtonProps {
  label: string;
  primary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, primary, className }) => {
  const baseClasses =
    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200";
  const styleClasses = primary
    ? "text-black"
    : "text-black border-2 border-black";

  return (
    <button className={`${baseClasses} ${styleClasses} ${className}`}>
      {label}
    </button>
  );
};

function MobileMenu({ isOpen, links }: { isOpen: boolean; links: string[] }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 text-center">
      <ul className="flex flex-col py-2 list-none font-bold">
        {links.map((link) => (
          <NavLink key={link} label={link} />
        ))}
        <li className="py-2">
          <Button
            label="Login"
            primary
            className="mx-2 font-bold bg-white text-black border-2 border-white hover:border-black rounded-full"
          />
          <Button
            label="Sign up"
            primary
            className="mx-2 font-bold bg-white text-black border-2 border-white hover:border-black rounded-full"
          />
        </li>
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" bg-white rounded-b-3xl shadow-sm relative z-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-col items-center py-2">
            <div className="flex">
              <h3 className="text-3xl font-bold text-black">CityRents</h3>
              <div><img src="/trademark.png" width={15}></img></div>
            </div>
            <p className="text-sky-900 text-sm font-semibold">India's Local Property Managers</p>
          </div>
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8 list-none font-bold">
              {["Home", "Services", "Locations", "FAQ", "Blog"].map((link) => (
                <NavLink key={link} label={link} />
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <Button
                label="Log in"
                primary
                className="md:border-2 font-bold hidden md:block bg-[#22cc88] text-white"
              />
              <Button
                label="Sign up"
                primary
                className="hidden md:block md:border-2 font-bold bg-blue-600 text-white"
              />
            </div>
            <div>
              <button
                className="md:hidden flex p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={["Home", "Services", "Locations", "FAQ", "Blog"]}
      />
    </nav>
  );
}
