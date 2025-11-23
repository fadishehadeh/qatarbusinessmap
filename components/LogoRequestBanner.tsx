import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LogoRequestBanner: React.FC = () => {
  return (
    <section className="container mx-auto px-4 mb-16 mt-8">
      <div className="bg-moci-maroon rounded-xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-moci-maroon">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-all duration-700 group-hover:bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-moci-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

        <div className="relative z-10 text-white text-center md:text-right max-w-2xl">
          <h3 className="text-2xl font-bold mb-2">خدمة شعار "منتج قطري"</h3>
          <p className="text-gray-200 opacity-90 text-lg">
             هل تمتلك مصنعاً وطنياً؟ احصل الآن على ترخيص استخدام الشعار وأبرز هويتـك الصناعية.
          </p>
        </div>

        <div className="relative z-10">
          <button className="bg-white text-moci-maroon px-6 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 font-bold text-lg group-hover:ring-2 ring-moci-gold ring-offset-2 ring-offset-moci-maroon">
            <span>خدمة استخدام شعار منتج قطري</span>
            <div className="bg-moci-maroon text-white p-1.5 rounded-full">
              <ArrowLeft size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoRequestBanner;