export default function Hero() {
  return (
    <section className="bg-[#F7F4EF] min-h-screen px-6 md:px-12 py-8 text-[#1E1E1E]">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Hero Top */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm mb-8">
              <span className="w-2 h-2 bg-[#C89B4D] rounded-full"></span>
              Now open — founding members across Ethiopia and abroad
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl leading-tight font-serif mb-6">
              Nordic standards.
              <br />
              <span className="italic text-[#C89B4D]">
                Ethiopian heart.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-8 mb-8 max-w-xl">
              World-class healthcare for families and leaders.
              Built on Nordic standards. Delivered with
              Ethiopian heart.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5 mb-10 text-sm">

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">No hospital queue</p>
                  <p className="text-gray-500">We come to you</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">Licensed</p>
                  <p className="text-gray-500">Ethiopian doctors</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">Confidential</p>
                  <p className="text-gray-500">Your health is private</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#C89B4D]">◉</div>
                <div>
                  <p className="font-medium">Nordic-standard</p>
                  <p className="text-gray-500">Global care, local heart</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-[#C89B4D] text-white px-8 py-4 rounded-xl hover:opacity-90 transition">
              Explore our services →
            </button>
          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600"
              alt="Luxury Clinic"
              className="rounded-3xl h-[650px] w-full object-cover"
            />

            {/* Floating Testimonial */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl">

              <p className="text-gray-700 mb-3">
                “It gives me peace of mind knowing
                my mother is in good hands.”
              </p>

              <p className="text-sm text-gray-500">
                — Yonas, Stockholm
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}