import CityIcon from "@/components/CityIcon";

const data = [
  { name: "Hyderabad", img: "/hyderabad.jpeg" },
  { name: "Banglore", img: "" },
  { name: "Chennai", img: "" },
];

export default function City() {
  return (
    <div className="flex justify-center py-4 bg-white">
      {data.map((item) => (
        <div className="px-4">
          <CityIcon name={item.name} img={item.img} />
        </div>
      ))}
    </div>
  );
}
