import Image from "next/legacy/image";

const MyComponent = ({ img, name,available }: { img: string; name: string;available:string}) => {
  return (
    <div className="group hover:bg-blue-100 flex flex-col items-center gap-3 p-4 my-4">
      <div className="w-24 h-24 relative">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="text-medium text-black group-hover:text-blue-700 text-center">
        {name}
      </div>
      <div className="border-2 border-black p-2 rounded-full cursor-pointer">
        {available}
      </div>
    </div>
  );
};

export default MyComponent;
