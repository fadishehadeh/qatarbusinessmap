import React from 'react';
import mainLogo from '../logo-main.svg';

const BusinessMapHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-moci-maroon text-white text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>وزارة التجارة والصناعة</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="cursor-pointer hover:text-moci-gold">English</span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-start">
          <img
            src={mainLogo}
            alt="Ministry of Commerce and Industry"
            className="h-20 w-auto"
          />
        </div>
      </div>

      {/* Title Section - Centered */}
      <div className="container mx-auto px-4 pb-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-moci-maroon">
            خريطة الأعمال القطرية
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Qatar Business Map
          </p>
        </div>
      </div>
    </header>
  );
};

export default BusinessMapHeader;

