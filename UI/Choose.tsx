export default function Choose() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 content-center py-5 mb-5">
      <div className="flex justify-center items-center">
        <img
          src="/Untitled_design-removebg-preview.png"
          height={500}
          width={500}
        ></img>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className=" text-xl md:text-2xl text-black font-semibold text-center pb-4">
          Why should you choose us?
        </h3>
        <p className=" text-small p-2">
          Housewise is India’s fastest-growing rental property management
          company. We provide transparent, seamless, and trustworthy Property
          Management Solutions including rental property management services in
          India to Non-resident Indians across the globe. From advertising,
          tenant screening, rent collection to repairs, and beyond, Housewise
          provides end-to-end property management services for Non-resident
          Indians across the globe.
        </p>
        <div>
          <button className="text-center rounded bg-blue-500 text-white px-4 py-2 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
