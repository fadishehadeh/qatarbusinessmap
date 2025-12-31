import React from 'react';
import { BadgeCheck } from 'lucide-react';
import heroImage from '../doha.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-moci-maroon">
      {/* Hero Background Image - Full Cover */}
      <img
        src={heroImage}
        alt="Doha skyline at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-moci-maroon/90 via-moci-maroon/70 to-moci-maroon/50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">

            {/* Text Side */}
            <div className="md:col-span-8 text-white space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <BadgeCheck size={16} className="text-moci-gold" />
                    <span className="text-sm font-medium text-moci-gold">فخر الصناعة الوطنية</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    صفحة المنتج القطري
                    <span className="block text-moci-gold mt-4">جودة عالمية بأيادي وطنية</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed drop-shadow-md whitespace-nowrap">
                    المنصة الموحدة لدعم المنتجات القطرية، تمكين المصنعين، وربط الصناعة المحلية بالأسواق العالمية.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


