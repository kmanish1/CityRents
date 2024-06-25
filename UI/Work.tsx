import WorkCard from "@/components/WorkCard";

export default function Work() {
  return (
    <div className="pb-5 mb-5 px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-2xl md:text-4xl text-black font-semibold text-center pb-6 mb-4">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WorkCard
          icon="/mail.svg"
          text="The House owner contacts Housewise and enters into an agreement with Housewise to manage/rent-out the property (Flat/Bungalow) on the house owner’s behalf."
          stats="Step 01"
        />
        <WorkCard
          icon="/mail.svg"
          text="House owner hands over keys and relevant property documents to the Housewise operations team assigned to the property."
          stats="Step 02"
        />
        <WorkCard
          icon="/mail.svg"
          text="The Housewise operations team searches for tenants with a good background."
          stats="Step 03"
        />
        <WorkCard
          icon="/mail.svg"
          text="On finalizing the prospective tenant, Housewise does the following;"
          stats="Step 04"
        />
        <WorkCard
          icon="/mail.svg"
          text="After successful verification of the prospective tenant, Housewise prepares the rental agreement/online or offline to be signed by both parties - the house owner and the tenant."
          stats="Step 05"
        />
        <WorkCard
          icon="/mail.svg"
          text="The tenant transfers the deposit and monthly rent directly to the house owner’s account."
          stats="Step 06"
        />
      </div>
    </div>
  );
}
