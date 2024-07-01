import { InfiniteMovingCards } from "@/components/infinite";

const testimonials = [
  {
    quote:
      "I was struggling to rent out my Flat in Pune, as I am based in USA and finding the tenants is a big task. Housewise helped me rent my Flat and I am very much satisfied with the service. Process was smooth and all agents were proactive, specially Sandhya Borkar has helped understand and go through the process seamlessly. I highly recommend cityrents",
    name: "Charles Dickens",
    title: "Canada",
  },
  {
    quote:
      "I was struggling to rent out my Flat in Pune, as I am based in USA and finding the tenants is a big task. Housewise helped me rent my Flat and I am very much satisfied with the service. Process was smooth and all agents were proactive, specially Sandhya Borkar has helped understand and go through the process seamlessly. I highly recommend cityrents",
    name: "William",
    title: "Poland",
  },
  {
    quote:
      "I was struggling to rent out my Flat in Pune, as I am based in USA and finding the tenants is a big task. Housewise helped me rent my Flat and I am very much satisfied with the service. Process was smooth and all agents were proactive, specially Sandhya Borkar has helped understand and go through the process seamlessly. I highly recommend cityrents",
    name: "Edgar Allan Poe",
    title: "Australia",
  },
  {
    quote:
      "I was struggling to rent out my Flat in Pune, as I am based in USA and finding the tenants is a big task. Housewise helped me rent my Flat and I am very much satisfied with the service. Process was smooth and all agents were proactive, specially Sandhya Borkar has helped understand and go through the process seamlessly. I highly recommend cityrents",
    name: "Jane Austen",
    title: "USA",
  },
  {
    quote:
      "I was struggling to rent out my Flat in Pune, as I am based in USA and finding the tenants is a big task. Housewise helped me rent my Flat and I am very much satisfied with the service. Process was smooth and all agents were proactive, specially Sandhya Borkar has helped understand and go through the process seamlessly. I highly recommend cityrents",
    name: "Herman Melville",
    title: "Canada",
  },
];

export function Reviews() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="font-bold text-3xl py-5">Testimonials</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
