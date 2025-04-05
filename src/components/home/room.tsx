/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../ui/button";

const rooms = [
  {
    title: "Deluxe Room",
    image: "/images/deluxe.jpg",
  },
  {
    title: "Royal Suite",
    image: "/images/royal.jpg",
  },
  {
    title: "Penthouse Suite",
    image: "/images/penthouse.jpg",
  },
];

export default function Room() {
  return (
    <div className="min-h-[50vh] max-w-5xl mx-auto mt-32 px-4">
      <h3 className="text-2xl md:text-4xl text-center mb-8">
        &ldquo;Your Personal Retreat Awaits&rdquo;
      </h3>
      <p className="text-sm text-left md:text-center mb-16">
        Whether you&lsquo;re here for business or leisure, each room and suite
        at Hotel offers a sanctuary of elegance. Designed with the utmost care
        and attention to detail, our accommodations provide a luxurious escape
        that caters to your every need.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        {rooms.map((el, i) => (
          <div key={i} className="basis-1 md:basis-1/3 mb-16">
            <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
              <img
                src={el.image}
                // width={500}
                // height={500}
                alt="image"
                className="absolute top-1/2 -translate-y-[50%] object-cover h-full"
              />
            </div>
            <p className="text-center text-lg md:text-2xl mt-4 md:mt-8">
              {el.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-montserrat text-sm font-light text-center">
          <Link href="#">View All Rooms & Suite</Link>
        </p>
        <Button
          className="font-montserrat rounded-none font-normal px-8 py-6 text-lg"
          variant={"outline"}
        >
          Book Your Stay Now
        </Button>
      </div>
    </div>
  );
}
