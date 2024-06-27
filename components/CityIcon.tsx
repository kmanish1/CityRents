import Image from "next/legacy/image";

const MyComponent = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="group hover:bg-blue-100 flex flex-col items-center gap-4 p-4">
      <div className="w-24 h-24 relative">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="text-medium text-black group-hover:text-blue-700 text-center">
        {name}
      </div>
    </div>
  );
};

export default MyComponent;
