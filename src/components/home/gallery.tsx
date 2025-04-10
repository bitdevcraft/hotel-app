/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "luxury suites.jpg",
  "royal.jpg",
  "deluxe.jpg",
  "stunning views.jpg",
  "penthouse.jpg",
];

export default function Gallery() {
  return (
    <div className="min-h-[50vh] max-w-5xl mx-auto mt-32 px-4 overflow-hidden">
      <h3 className="text-2xl md:text-4xl text-center mb-8">
        &ldquo;A Visual Journey Through Luxury&rdquo;
      </h3>
      <p className="text-sm text-center mb-16">
        Discover the exquisite details that make every moment at Hotel
        unforgettable.
      </p>
      <div className="flex md:hidden justify-center mb-16">
        <Carousel className="w-full max-w-xs sm:max-w-sm">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-gray-100 ">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={`/images/${img}`}
                        width={500}
                        height={500}
                        alt="image"
                        className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="hidden md:grid grid-cols-12 gap-4 mb-16">
        <div className="relative h-48 bg-gray-100 col-span-3">
          <img
            src="/images/royal.jpg"
            width={500}
            height={500}
            alt="image"
            className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
          />
        </div>
        <div className="relative h-full bg-gray-100 col-span-6 row-span-2">
          <img
            src="/images/luxury suites.jpg"
            width={500}
            height={500}
            alt="image"
            className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
          />
        </div>
        <div className="relative h-48 bg-gray-100 col-span-3">
          <img
            src="/images/deluxe.jpg"
            width={500}
            height={500}
            alt="image"
            className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
          />
        </div>
        <div className="relative h-48 bg-gray-100 col-span-3">
          <img
            src="/images/penthouse.jpg"
            width={500}
            height={500}
            alt="image"
            className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
          />
        </div>
        <div className="relative h-48 bg-gray-100 col-span-3">
          <img
            src="/images/stunning views.jpg"
            width={500}
            height={500}
            alt="image"
            className="w-full object-cover object-bottom absolute top-1/2 -translate-y-[50%]  object-cover h-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-montserrat text-sm font-light text-center">
          <Link href="#">View Gallery</Link>
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
