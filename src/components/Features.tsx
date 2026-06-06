export default function Features() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Blue Boxes in Background - More Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-blue-200 rounded-2xl rotate-12 opacity-40 animate-float-1"></div>
        <div className="absolute top-1/4 -right-16 w-64 h-64 bg-blue-300 rounded-2xl -rotate-12 opacity-30 animate-float-2"></div>
        <div className="absolute -bottom-12 left-1/4 w-48 h-48 bg-blue-400 rounded-2xl rotate-45 opacity-25 animate-float-3"></div>
        <div className="absolute top-2/3 left-5 w-40 h-40 bg-blue-200 rounded-2xl -rotate-12 opacity-35 animate-float-4"></div>
        <div className="absolute bottom-16 right-16 w-44 h-44 bg-blue-300 rounded-2xl rotate-12 opacity-30 animate-float-5"></div>
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-blue-500 rounded-2xl rotate-6 opacity-20 animate-float-6"></div>
        <div className="absolute bottom-32 left-10 w-36 h-36 bg-blue-100 rounded-2xl -rotate-6 opacity-40 animate-float-1"></div>
        <div className="absolute top-1/2 right-8 w-28 h-28 bg-blue-400 rounded-2xl rotate-45 opacity-25 animate-float-3"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          WHY CHOOSE US?
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Feature 1 */}
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-md border border-white/40">
                {/* 🔄 REPLACE ICON HERE */}
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24 Hour service</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                At Abrencare, our experienced staff provides exceptional, personalized care. Trust our skilled professionals to enhance your well-being and quality of life. Experience the Abrencare difference today.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-md border border-white/40">
                {/* 🔄 REPLACE ICON HERE */}
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced Staff</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                At Abrencare, our experienced staff provides exceptional, personalized care. Trust our skilled professionals to enhance your well-being and quality of life. Experience the Abrencare difference today.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="backdrop-blur-md bg-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-md border border-white/40">
                {/* 🔄 REPLACE ICON HERE */}
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Service</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We prioritize quality to ensure our services meet the highest standards. Our commitment to excellence guarantees that you receive nothing but the best care possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) rotate(12deg); }
          25% { transform: translate(30px, -25px) rotate(20deg); }
          50% { transform: translate(-20px, -40px) rotate(5deg); }
          75% { transform: translate(15px, -15px) rotate(15deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(-12deg); }
          25% { transform: translate(-35px, -30px) rotate(-20deg); }
          50% { transform: translate(20px, -50px) rotate(-5deg); }
          75% { transform: translate(-15px, -20px) rotate(-15deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(45deg); }
          30% { transform: translate(40px, -20px) rotate(55deg); }
          60% { transform: translate(-25px, -35px) rotate(35deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0px, 0px) rotate(-12deg); }
          20% { transform: translate(-20px, -40px) rotate(-25deg); }
          40% { transform: translate(25px, -15px) rotate(-5deg); }
          60% { transform: translate(-30px, -35px) rotate(-20deg); }
          80% { transform: translate(15px, -45px) rotate(-10deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0px, 0px) rotate(12deg); }
          35% { transform: translate(-15px, -45px) rotate(25deg); }
          70% { transform: translate(30px, -20px) rotate(5deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(0px, 0px) rotate(6deg); }
          25% { transform: translate(25px, -50px) rotate(15deg); }
          50% { transform: translate(-20px, -25px) rotate(-5deg); }
          75% { transform: translate(10px, -40px) rotate(10deg); }
        }
        .animate-float-1 { animation: float1 7s ease-in-out infinite; }
        .animate-float-2 { animation: float2 9s ease-in-out infinite; }
        .animate-float-3 { animation: float3 6s ease-in-out infinite; }
        .animate-float-4 { animation: float4 11s ease-in-out infinite; }
        .animate-float-5 { animation: float5 8s ease-in-out infinite; }
        .animate-float-6 { animation: float6 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}