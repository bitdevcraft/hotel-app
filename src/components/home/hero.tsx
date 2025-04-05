export default function Hero() {
  return (
    <div className="bg-[url(/images/hero-bg.webp)] min-h-[90vh] bg-position-[85%] sm:bg-center bg-cover">
      <div className="min-h-[90vh] bg-black/40 relative ">
        <div className="min-h-[90vh] min-w-screen bg-gradient-to-t from-white  via-transparent  to-transparent ">
          <div className="min-h-[80vh] flex flex-col justify-center text-white gap-2 max-w-5xl mx-auto px-4">
            <p className="text-6xl md:text-8xl text-center md:text-left">
              Where Luxury <br className="hidden md:flex" />
              Meets the Skyline
            </p>
            <p className="text-xl md:text-3xl text-center md:text-left font-montserrat">
              Experience Dubai like Never Before
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
