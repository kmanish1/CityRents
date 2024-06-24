"use client";
import { useState } from "react";

function Input({
  type,
  text,
  label,
  value,
  setFn,
}: {
  type: string;
  text: string;
  label: string;
  value: string | number;
  setFn: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <label htmlFor="name" className="block mb-1 text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={text}
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [api_log, setApi_log] = useState({
    msg_sent: false,
    message: "",
    status: 0,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = {
      name,
      email,
      number,
      msg,
    };
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const data = await res.json();
      setApi_log({
        msg_sent: true,
        message: data.message,
        status: res.status,
      });
    });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <Input
            text="Enter Your name"
            type="text"
            label="Name"
            value={name}
            setFn={setName}
          />
          <Input
            text="Enter Your Email"
            type="email"
            label="Email"
            value={email}
            setFn={setEmail}
          />
          <Input
            text="Enter Your Phone Number"
            type="tel"
            label="Phone Number"
            value={number}
            setFn={setNumber}
          />
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium 
              text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        {api_log.msg_sent && (
          <h2
            className={`text-2xl mb-6 text-center ${
              api_log.status === 200 ? `text-green-500` : `text-red-500`
            }`}
          >
            {api_log.message}
          </h2>
        )}
      </div>
    </div>
  );
}
