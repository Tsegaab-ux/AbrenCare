export default function ConsultationBookingForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;    
  };

  return (
    <section id="book" className="bg-white py-20 px-[5%]">
      <div className="max-w-[580px] mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 bg-[#E3F2FD] border border-[rgba(21,101,192,0.2)] text-[#1565C0] px-4 py-1.5 rounded-full text-[11px] font-semibold mb-5">
          Book your consultation — available today
        </div>
        
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[42px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3">
          Your doctor is one tap away.
        </h2>
        
        <p className="text-base text-[#5C6B7A] mx-auto leading-relaxed" style={{ textAlign: 'center', margin: '10px auto 0' }}>
          Fill in your details. We match you with the right doctor and confirm within minutes.
        </p>
        
        <div className="bg-[#F7F9FC] border-[1.5px] border-[#DDE3EA] rounded-2xl p-8 lg:p-9 mt-6 text-left shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          
          {/* Form Container */}
          <div id="fc">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    Your name
                  </label>
                  <input 
                    type="text" 
                    id="fn"
                    placeholder="Full name" 
                    className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    Phone number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+251 91 000 0000" 
                    className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    Specialty needed
                  </label>
                  <select 
                    id="fe"
                    className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors"
                  >
                    <option value="">Select specialty</option>
                    <option>General practice</option>
                    <option>Cardiology</option>
                    <option>Paediatrics</option>
                    <option>Diabetes & endocrinology</option>
                    <option>Neurology</option>
                    <option>Respiratory</option>
                    <option>Dermatology</option>
                    <option>Mental health</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                    Preferred consultation type
                  </label>
                  <select className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors">
                    <option>Video call</option>
                    <option>Audio call</option>
                    <option>Chat</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3.5">
                <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                  Briefly describe your concern
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. fever for 3 days, chest pain, need prescription renewed" 
                  className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">
                  City / Region
                </label>
                <select className="w-full px-4 py-3 border-[1.5px] border-[#DDE3EA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1565C0] outline-none transition-colors">
                  <option>Addis Ababa</option>
                  <option>Hawassa</option>
                  <option>Dire Dawa</option>
                  <option>Bahir Dar</option>
                  <option>Mekelle</option>
                  <option>Adama</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#1565C0] text-white py-4 rounded-xl font-bold text-base hover:bg-[#1976D2] transition-colors mt-1.5"
              >
                Book my consultation →
              </button>
              
              <p className="text-center text-xs text-[#5C6B7A] mt-2.5">
                We confirm your booking within 15 minutes. Pay at the time of consultation in ETB.
              </p>
            </form>
          </div>
          
          {/* Success message - hidden by default */}
          <div id="sm" className="hidden bg-[#E3F2FD] border border-[rgba(21,101,192,0.2)] rounded-xl p-6 text-center text-[#1565C0] text-sm leading-relaxed font-medium">
            ✓ Your booking request has been received.
            <br /><br />
            We will confirm your doctor and time within 15 minutes via phone or SMS.
            <br /><br />
            <strong>Welcome to Nordic Abrencare Ethiopia.</strong>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}