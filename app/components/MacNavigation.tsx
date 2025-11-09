'use client';

export function MacNavigation() {
  return (
    <nav className="bg-[rgba(251,251,253,0.8)] backdrop-blur-xl border-b border-[#d2d2d7] sticky top-[44px] z-40">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-center h-[48px] space-x-8 text-[12px] overflow-x-auto">
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">MacBook Air</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">MacBook Pro</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">iMac</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Mac mini</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Mac Studio</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Mac Pro</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Displays</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Compare</a>
          <a href="#" className="text-[#1d1d1f] hover:text-[#1d1d1f] opacity-80 hover:opacity-100 whitespace-nowrap">Shop Mac</a>
        </div>
      </div>
    </nav>
  );
}
