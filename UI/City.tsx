import CityIcon from "@/components/CityIcon";

const data = [
  { name: "Hyderabad", img: "/hyderabad-charminar.png",available:"Live now"},
  { name: "Banglore", img: "/bangalore.png" ,available:"coming soon"},
  { name: "Chennai", img: "/monument.png" ,available:"coming soon"},
  { name: "Mumbai", img: "/gate-of-india.png",available:"coming soon" },
];

export default function City() {
  return (
    <div className="flex flex-wrap justify-center py-4">
      {data.map((item) => (
        <div className="px-4">
          <CityIcon name={item.name} img={item.img} available={item.available} />
        </div>
      ))}
    </div>
  );
}
