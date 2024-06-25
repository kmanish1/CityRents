import FactsCard from "@/components/FactsCard";

export default function Facts() {
  return (
    <div className="pt-10 my-20 bg-gradient-to-r from-violet-500 to-teal-500 ... px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <FactsCard icon="/mail.svg" text="Properties" stats="4500" />
        <FactsCard icon="/mail.svg" text="Square-Feet" stats="5375000" />
        <FactsCard icon="/mail.svg" text="Happy Clients" stats="10000" />
        <FactsCard icon="/mail.svg" text="Cities" stats="13" />
        <FactsCard icon="/mail.svg" text="Countries" stats="33" />
      </div>
    </div>
  );
}
