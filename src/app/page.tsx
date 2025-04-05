import ContactUs from "@/components/home/contact";
import Culinary from "@/components/home/culinary";
import Feature from "@/components/home/feature";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Policy from "@/components/home/policy";
import Room from "@/components/home/room";

export default function Home() {
  return (
    <div className="font-eb-garamond">
      <Hero />
      <Feature />
      <Room />
      <Culinary />
      <Gallery />
      <ContactUs />
      <Policy />
    </div>
  );
}
