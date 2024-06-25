import Image from "next/image";
import React from "react";

export default function CityIcon({ img, name }: { img: string; name: string }) {
  return (
    <div className="hover:bg-blue-100 hover:text-blue-700 flex flex-col gap-4">
      <Image src={img} width={100} height={100} alt={name} className="rounded-full" />
      <div className="text-medium text-black text-center">{name}</div>
    </div>
  );
}
