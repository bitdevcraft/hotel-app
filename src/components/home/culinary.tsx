export default function Culinary() {
  return (
    <div className="bg-[url(/images/culinary-bg.jpg)] min-h-[50vh] md:min-h-[70vh] w-full bg-center bg-cover mt-32 text-white">
      <div className="min-h-[50vh] md:min-h-[70vh] bg-black/40 ">
        <div className="min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center items-center gap-6 bg-linear-[0deg,white,transparent,transparent,transparent,white] px-4">
          <h3 className="text-4xl md:text-7xl text-center">
            &ldquo;Savor Culinary Excellence&rdquo;
          </h3>
          <p className="font-montserrat text-sm md:text-base font-thin max-w-5xl text-left md:text-center">
            Indulge in a culinary journey that delights the senses. With a
            selection of world-class restaurants, each dining experience at
            Hotel is an opportunity to indulge in exquisite flavors, opulent
            settings, and unparalleled service.
          </p>
        </div>
      </div>
    </div>
  );
}
