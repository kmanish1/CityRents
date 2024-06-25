import WorkCard from "@/components/WorkCard";

export default function Benefits() {
  return (
    <div className="">
      <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 mb-4">
        Benefits
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <WorkCard
          icon="/mail.svg"
          text="By signing up with the best property management services in India, you can feel safe that your property is in trusted hands. Housewise employs experienced and trustworthy staff and uses standard procedures irrespective of the location of the property. We implement the policy of “Say as you do and do as you say”."
          stats="Trustworthiness"
        />
        <WorkCard
          icon="/mail.svg"
          text="We provide the best property management services in India and we don’t compromise on our quality of service. A dedicated customer relationship team is available throughout the year to ensure seamless communication with the property owner."
          stats="Seamless Communication"
        />
        <WorkCard
          icon="/mail.svg"
          text="Housewise represents the owner as if the owner is managing the property by itself. We resolve all kinds of situations and our mantra is to protect the owner’s interests at all times."
          stats="Peace of mind"
        />
      </div>
    </div>
  );
}
