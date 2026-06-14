export default function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-white py-22 px-6 lg:px-8">
      <div className="max-w-[580px] mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 bg-[#FEF7E6] border border-[rgba(200,146,42,0.2)] text-[#C8922A] px-4 py-1.5 rounded-full text-[11px] font-semibold mb-5">
          ⭐ 14 of 50 founding spots remaining
        </div>
        
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-[-1px] text-[#0F0F0F] mb-3">
          Get your parent's care plan.
          <br />
          We call you within 24 hours.
        </h2>
        
        <p className="text-base text-[#6B6B6B] mb-4 leading-relaxed">
          No payment. No contract. A real person — not a bot — calls you within 24 hours to build your parent's plan together.
        </p>
        
        <div className="bg-[#FAF8F4] border-[1.5px] border-[#E5E0DA] rounded-2xl p-9 mt-7 text-left shadow-[0_16px_48px_rgba(0,0,0,0.07)]">
          
          {/* Spots remaining bar */}
          <div className="bg-[#E8F5EE] rounded-xl p-2.5 flex items-center gap-3 mb-6 border border-[rgba(27,94,59,0.12)]">
            <div className="flex-1 h-1.5 bg-[rgba(27,94,59,0.15)] rounded-full overflow-hidden">
              <div className="h-full w-[28%] bg-[#1B5E3B] rounded-full"></div>
            </div>
            <div className="text-xs font-semibold text-[#1B5E3B] whitespace-nowrap">14 of 50 founding spots left</div>
          </div>
          
          {/* Form Container */}
          <div id="fc">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">Your name</label>
                  <input 
                    type="text" 
                    placeholder="Dawit Haile" 
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1B5E3B] outline-none transition-colors"
                    id="fn"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">Email address</label>
                  <input 
                    type="email" 
                    placeholder="dawit@email.com" 
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1B5E3B] outline-none transition-colors"
                    id="fe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">Country you live in</label>
                  <select className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1B5E3B] outline-none transition-colors">
                    <option value="">Select</option>
                    <option>Sweden</option>
                    <option>Norway</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Germany</option>
                    <option>Denmark</option>
                    <option>Finland</option>
                    <option>UAE / Gulf</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">WhatsApp (optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+46 70 123 4567" 
                    className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1B5E3B] outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-[13px] font-medium text-[#0F0F0F] mb-1.5">What matters most to you right now?</label>
                <select className="w-full px-4 py-3 border-[1.5px] border-[#E5E0DA] rounded-xl text-sm font-['DM_Sans',sans-serif] bg-white focus:border-[#1B5E3B] outline-none transition-colors">
                  <option value="">Select one</option>
                  <option>Regular home care visits with reports</option>
                  <option>Doctor consultations I can join from abroad</option>
                  <option>Both — fully managed, I am very busy</option>
                  <option>Not sure yet — I want to talk first</option>
                </select>
              </div>
              
              <button 
                type="submit"
                onClick={() => {
                  const nameInput = document.getElementById('fn') as HTMLInputElement;
                  const emailInput = document.getElementById('fe') as HTMLInputElement;
                  const name = nameInput ? nameInput.value.trim() : '';
                  const email = emailInput ? emailInput.value.trim() : '';
                  if (!name || !email) {
                    alert('Please enter your name and email.');
                    return;
                  }
                  const form = document.getElementById('fc');
                  const success = document.getElementById('sm');
                  if (form && success) {
                    form.style.display = 'none';
                    success.style.display = 'block';
                  }
                }}
                className="w-full bg-[#1B5E3B] text-white py-4 rounded-xl font-bold text-base hover:bg-[#2E7D52] transition-colors mt-1.5"
              >
                Reserve my spot — it is free →
              </button>
              
              <p className="text-center text-xs text-[#6B6B6B] mt-2.5">
                No spam. No payment. A real person calls you within 24 hours.
              </p>
            </form>
          </div>
          
          {/* Success message - hidden by default */}
          <div id="sm" className="hidden bg-[#E8F5EE] border border-[rgba(27,94,59,0.2)] rounded-xl p-6 text-center text-[#1B5E3B] text-sm leading-relaxed font-medium">
            ✓ You are on the list.
            <br /><br />
            A real person from our team will call you within 24 hours to build your parent's care plan together.
            <br /><br />
            <strong>Welcome to Nordic Abrencare Ethiopia.</strong>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}