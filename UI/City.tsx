import CityIcon from "@/components/CityIcon";

const data = [
  { name: "Hyderabad", img: "/hyderabad-charminar.png" },
  { name: "Banglore", img: "/bangalore.png" },
  { name: "Chennai", img: "/monument.png" },
  { name: "Mumbai", img: "/gate-of-india.png" },
];

export default function City() {
  return (
    <div className="flex flex-wrap justify-center py-4">
      {data.map((item) => (
        <div className="px-4">
          <CityIcon name={item.name} img={item.img} />
        </div>
      ))}
    </div>
  );
}
