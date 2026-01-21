import React from 'react';

const BusinessMapFooter: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-moci-gold">عن الخريطة</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              خريطة الأعمال القطرية هي منصة شاملة توفر بيانات وإحصائيات عن القطاع الصناعي في دولة قطر
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-moci-gold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-moci-gold transition-colors">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-moci-gold transition-colors">
                  الإحصائيات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-moci-gold transition-colors">
                  التقارير
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-moci-gold">تواصل معنا</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>وزارة التجارة والصناعة</li>
              <li>الدوحة، قطر</li>
              <li>هاتف: +974 4483 3333</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            جميع الحقوق محفوظة © 2025 وزارة التجارة والصناعة - دولة قطر
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BusinessMapFooter;

