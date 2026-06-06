export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-lg">
      
      
      <div className="flex items-center">
        <div 
          className="rounded-lg bg-white/30 backdrop-blur-sm"
          style={{ 
            width: '120px', 
            height: '120px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
          }}
        >
          <img
            src="/src/images/logo.png"  
            alt="Abrencare Logo"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              transform: 'scale(1.2)'
            }}
            onError={(e) => {
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.innerText = 'A';
                parent.style.fontWeight = 'bold';
                parent.style.fontSize = '48px';
                parent.style.color = '#2563eb';
              }
            }}
          />
        </div>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Services</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
        </ul>
      </div>

      <div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md backdrop-blur-sm">
          Get Started
        </button>
      </div>
      
    </nav>
  );
}