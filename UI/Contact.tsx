"use client";
import { useState } from "react";

function Input({
  type,
  text,
  value,
  setFn,
}: {
  type: string;
  text: string;
  value?: any;
  setFn?: any;
}) {
  return (
    <div className="mb-4 w-full max-w-md mx-auto">
      <div className="flex flex-col">
        <label htmlFor="name-input" className="mb-2 text-sm font-bold">
          Name
        </label>
        <input
          type={type}
          placeholder={text}
          value={value}
          onChange={(e) => setFn(e.target.value)}
          className="border border-black px-3 py-2 text-sm rounded-md
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition duration-150 ease-in-out"
        ></input>
      </div>
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");

  return (
    <div>
      <div>
        <h1>Contact Us</h1>
      </div>
      <div>
        <div>
          <Input text="Enter Your name" type="text" />
          <h1 className="text-red-500 bg-red-500">Hello world</h1>
        </div>
      </div>
    </div>
  );
}
