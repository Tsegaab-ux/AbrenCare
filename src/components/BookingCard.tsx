export default function BookingCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-lg w-full">
      <p className="uppercase tracking-widest text-xs text-gray-500 mb-5">
        Book Consultation
      </p>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {["Cardiology", "Dermatology", "Pediatrics", "Internal Medicine"].map(
          (item) => (
            <button
              key={item}
              className="border rounded-xl p-3 text-sm hover:border-blue-600 hover:bg-blue-50"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="bg-slate-100 rounded-xl p-4 flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center">
          DR
        </div>

        <div>
          <h4 className="font-semibold">Dr. Andersson</h4>
          <p className="text-sm text-gray-500">Internal Medicine</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {["09:00", "10:30", "13:00", "15:00", "16:30", "18:00"].map(
          (slot) => (
            <button
              key={slot}
              className="border rounded-lg py-2 text-sm hover:border-blue-700"
            >
              {slot}
            </button>
          )
        )}
      </div>

      <div className="bg-blue-700 rounded-xl p-4 flex justify-between text-white mb-4">
        <span>Consultation Fee</span>
        <span className="font-bold text-xl">€45</span>
      </div>

      <button className="w-full py-3 rounded-xl bg-[#C8922A] font-bold">
        Confirm Booking
      </button>
    </div>
  );
}