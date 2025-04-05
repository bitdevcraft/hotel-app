import { Button } from "../ui/button";

export default function Policy() {
  return (
    <div className="min-h-[50vh] max-w-5xl mx-auto flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl md:text-4xl">Hotel Policies & Information</p>
        <Button
          variant={"outline"}
          className="rounded-none px-16 font-montserrat font-light"
        >
          See More
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-2xl md:text-4xl">FAQs</p>
        <Button
          variant={"outline"}
          className="rounded-none px-16 font-montserrat font-light"
        >
          See FAQs
        </Button>
      </div>
    </div>
  );
}
