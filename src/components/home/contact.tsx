export default function ContactUs() {
  return (
    <div className="bg-[#d9d9d9] min-h-[50vh] mt-32 flex flex-col justify-center items-center py-16">
      <h3 className="text-2xl md:text-4xl text-center mb-8 px-4">
        &ldquo;We&lsquo;re Here to Make Your Stay Exceptional&rdquo;
      </h3>
      <p className="text-sm text-left md:text-center mb-16 px-4">
        Whether you need assistance with your booking or have any questions
        about our services, our dedicated team is here to provide you with
        personalized attention.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] w-full max-w-5xl">
        <div className="text-center basis-1/3">
          <p>Address</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
        <div className="text-center basis-1/3">
          <p>Email</p>
          <p>hello@wayofbitdev.com</p>
        </div>
        <div className="text-center basis-1/3">
          <p>Telephone</p>
          <p>+971 XX XXXXXXX</p>
        </div>
      </div>
    </div>
  );
}
