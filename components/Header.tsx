import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import mainLogo from '../logo-main.svg';
import qatariProductLogo from '../logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'الصفحة الرئيسية' },
    { path: '/qatar-business-map', label: 'خريطة الأعمال القطرية' },
    { path: '/industrial-services', label: 'خدمات الصناعة' },
    { path: '/success-stories', label: 'قصص نجاح' },
    { path: '/national-programs', label: 'البرامج الوطنية / تصدير' },
    { path: '/regulations', label: 'معلومات تشريعية / تنظيمية' },
    { path: '/news', label: 'الاخبار والفعاليات', hasSubmenu: true },
    { path: '/contact', label: 'اتصل بنا' },
  ];

  const newsSubmenuItems = [
    { path: '/news', label: 'آخر الأخبار' },
    { path: '/trade-reports', label: 'تقارير صناعية' },
  ];

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

      {/* Logo and Flag Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src={mainLogo}
                alt="وزارة التجارة والصناعة - Ministry of Commerce and Industry"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            {/* Divider */}
            <div className="h-10 w-px bg-gray-300 mx-2 hidden md:block"></div>
            {/* Qatari Product Logo */}
            <Link to="/">
              <img
                src={qatariProductLogo}
                alt="منتج قطري - Qatari Product"
                className="hidden md:block h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-moci-maroon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu - Centered Below Logo */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-center gap-8 text-gray-700 font-medium py-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-moci-maroon transition-colors pb-1 whitespace-nowrap ${
                  isActive(item.path) || (item.hasSubmenu && location.pathname.startsWith('/news')) || (item.hasSubmenu && location.pathname === '/trade-reports')
                    ? 'text-moci-maroon font-bold border-b-2 border-moci-maroon'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-moci-maroon font-bold'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;