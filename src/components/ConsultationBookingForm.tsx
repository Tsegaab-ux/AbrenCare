export default function ConsultationBookingForm() {
  return (
    <section id="booking" className="bg-white py-24 px-[5%]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wide">
          Book Consultation
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-serif text-4xl md:text-5xl font-bold text-slate-900">
          Request Your Consultation
        </h2>

        <p className="mt-4 text-slate-500 text-lg">
          Complete the form below and our team will contact you to confirm your
          appointment.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto mt-12">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
          <form className="space-y-5">
            {/* Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+251..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none"
              />
            </div>

            {/* Specialty */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Medical Specialty
              </label>

              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none">
                <option>Select a specialty</option>
                <option>Internal Medicine</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Dermatology</option>
                <option>Neurology</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preferred Date
              </label>

              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional Information
              </label>

              <textarea
                rows={4}
                placeholder="Tell us briefly about your consultation needs..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:outline-none resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-xl transition-colors duration-300"
            >
              Request Consultation
            </button>

            {/* Note */}
            <p className="text-center text-sm text-slate-500">
              Secure and confidential. We will contact you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}