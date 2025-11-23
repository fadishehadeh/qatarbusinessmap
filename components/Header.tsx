import React, { useState } from 'react';
import { Menu, Search, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar (Ministry Utility Bar) */}
      <div className="bg-moci-maroon text-white text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>حكومة قطر الرقمية</span>
            <span>بوابة الوزارة</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="cursor-pointer hover:text-moci-gold">English</span>
            <Globe size={14} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold text-moci-maroon leading-tight">
                وزارة التجارة والصناعة
              </h1>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Ministry of Commerce and Industry
              </span>
            </div>
            {/* Divider */}
            <div className="h-10 w-px bg-gray-300 mx-2 hidden md:block"></div>
            {/* Qatari Product Logo Placeholder */}
             <div className="hidden md:flex flex-col items-center border border-moci-maroon/20 bg-moci-graybg px-2 py-1 rounded">
                <span className="text-moci-maroon font-bold text-sm">منتج قطري</span>
                <span className="text-[10px] text-gray-600">QATARI PRODUCT</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#" className="text-moci-maroon font-bold border-b-2 border-moci-maroon pb-1">الرئيسية</a>
            <a href="#" className="hover:text-moci-maroon transition-colors">عن المنتج القطري</a>
            <a href="#" className="hover:text-moci-maroon transition-colors">الخدمات الصناعية</a>
            <a href="#" className="hover:text-moci-maroon transition-colors">دليل المصانع</a>
            <a href="#" className="hover:text-moci-maroon transition-colors">اتصل بنا</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-moci-maroon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
             <a href="#" className="text-moci-maroon font-bold">الرئيسية</a>
            <a href="#" className="text-gray-700">عن المنتج القطري</a>
            <a href="#" className="text-gray-700">الخدمات الصناعية</a>
            <a href="#" className="text-gray-700">دليل المصانع</a>
            <a href="#" className="text-gray-700">اتصل بنا</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;