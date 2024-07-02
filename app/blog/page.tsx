"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/blog").then((res) => {
      setData(res.data);
    });
  });
  return <div>{JSON.stringify(data)}</div>;
}
