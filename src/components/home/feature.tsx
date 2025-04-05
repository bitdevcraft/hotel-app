const features = [
  {
    title: "Stunning Views",
    description:
      "Breathtaking panoramas of the Dubai skyline and Arabian Gulf.",
  },
  {
    title: "World-Class Dining",
    description: "Exquisite cuisine from Michelin-star chefs.",
  },
  {
    title: "Unmatched Comfort",
    description:
      "Lavishly designed rooms and suites with every detail carefully crafted for your ultimate relaxation",
  },
  {
    title: "Exquisite Service",
    description:
      "24/7 concierge, private butlers, and personalized experiences tailored just for you.",
  },
];

export default function Feature() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto mt-32 px-4">
      <h3 className="text-2xl md:text-4xl text-center mb-8">
        &ldquo;A Timeless Oasis of Refinement&rdquo;
      </h3>
      <p className="text-sm text-left md:text-center mb-16">
        Discover a place where exceptional service meets timeless luxury. At
        Hotel, we offer more than just a stay – we provide an unforgettable
        experience. With world-class amenities, personalized services, and
        elegant interiors, every moment here is designed to make you feel
        extraordinary.
      </p>
      {features.map((el, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row gap-[32px] mb-8 flex-col-reverse items-start md:items-center mb-16
            ${i % 2 ? "md:flex-row-reverse" : ""}`}
        >
          <div
            className={`basis-1 md:basis-1/2 lg:basis-5/12 ${
              i % 2 ? "md:text-right" : ""
            }`}
          >
            <p className="text-xl md:text-3xl">{el.title}</p>
            <p className="text-sm md:text-base">{el.description}</p>
          </div>
          <div className="min-h-[160px] md:min-h-[316px] border w-full basis-1 md:basis-1/2 lg:basis-7/12 bg-gray-100"></div>
        </div>
      ))}
    </div>
  );
}
