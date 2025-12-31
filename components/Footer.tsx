import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-moci-footer text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-lg mb-4 border-r-2 border-moci-maroon pr-3">وزارة التجارة والصناعة</h5>
            <p className="leading-relaxed text-gray-400">
              الجهة المسؤولة عن تنظيم ومراقبة الأنشطة التجارية والصناعية في دولة قطر، وتنمية قطاع الأعمال وجذب الاستثمارات.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-moci-gold"><Twitter size={20} /></a>
              <a href="#" className="hover:text-moci-gold"><Instagram size={20} /></a>
              <a href="#" className="hover:text-moci-gold"><Facebook size={20} /></a>
              <a href="#" className="hover:text-moci-gold"><Youtube size={20} /></a>
              <a href="#" className="hover:text-moci-gold"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
             <h5 className="text-white font-bold text-lg mb-4 border-r-2 border-moci-maroon pr-3">روابط هامة</h5>
             <ul className="space-y-3">
               <li><a href="#" className="hover:text-white hover:mr-2 transition-all">الرئيسية</a></li>
               <li><a href="#" className="hover:text-white hover:mr-2 transition-all">عن الوزارة</a></li>
               <li><a href="#" className="hover:text-white hover:mr-2 transition-all">بوابة المستثمر</a></li>
               <li><a href="#" className="hover:text-white hover:mr-2 transition-all">الخدمات الإلكترونية</a></li>
               <li><a href="#" className="hover:text-white hover:mr-2 transition-all">اتصل بنا</a></li>
             </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4 border-r-2 border-moci-maroon pr-3">تواصل معنا</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-moci-maroon" size={18} />
                <span className="font-bold text-white text-lg">16001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-moci-maroon" size={18} />
                <span>nationalproduct@moci.gov.qa</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-moci-maroon mt-1" size={18} />
                <span>لوسيل، الدوحة، قطر<br/>برج وزارة التجارة والصناعة</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black/30 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>جميع الحقوق محفوظة © وزارة التجارة والصناعة 2025</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;