'use client';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,255,255,0.8)] backdrop-blur-xl border-b border-[#d2d2d7]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-[44px]">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-[21px] font-semibold text-[#1d1d1f] hover:text-[#1d1d1f] no-underline">

            </a>
            <div className="hidden md:flex items-center space-x-8 text-[12px]">
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Store</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Mac</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">iPad</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">iPhone</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Watch</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">AirPods</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">TV & Home</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Only on Apple</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Accessories</a>
              <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100">Support</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#1d1d1f] opacity-80 hover:opacity-100">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
                <path d="M14.298 12.731l-3.364-3.364a5.874 5.874 0 10-1.571 1.571l3.364 3.364a1.112 1.112 0 001.571-1.571zM1.666 6.111a4.444 4.444 0 118.888 0 4.444 4.444 0 01-8.888 0z"/>
              </svg>
            </button>
            <button className="text-[#1d1d1f] opacity-80 hover:opacity-100">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
                <path d="M11.5 16H2.5C1.672 16 1 15.328 1 14.5V5h12v9.5c0 .828-.672 1.5-1.5 1.5zm-9-10V4.5C2.5 2.57 4.07 1 6 1h2c1.93 0 3.5 1.57 3.5 3.5V6h1.5V4.5C13 1.462 10.538-1 7.5-1h-1C3.462-1 1 1.462 1 4.5V6h10.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
