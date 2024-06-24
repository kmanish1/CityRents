import React from "react";

export default function CityIcon({ img, name }: { img: string; name: string }) {
  return (
    <div>
      <img src={img}></img>
      <div>{name}</div>
    </div>
  );
}
