export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-lg">
      {/* Logo without text */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white/30 backdrop-blur-sm p-1.5">
          <img
            src="/src/images/logo.png"  
            alt="Abrencare Logo"
             className="scale-150 object-contain"
            onError={(e) => {
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.innerText = 'A';
                parent.style.fontWeight = 'bold';
                parent.style.fontSize = '24px';
                parent.style.color = '#2563eb';
              }
            }}
          />
        </div>
      </div>

      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Home</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Services</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md backdrop-blur-sm">
        Get Started
      </button>
    </nav>
  );
}