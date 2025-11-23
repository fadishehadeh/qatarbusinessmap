import React from 'react';
import { BadgeCheck } from 'lucide-react';
import heroImage from '../doha.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-moci-maroon">
      {/* Background Texture - Abstract */}
      <img 
        src="https://images.unsplash.com/photo-1552083974-1863461911dd?q=80&w=2070&auto=format&fit=crop" 
        alt="Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-moci-maroon via-moci-maroon/95 to-moci-maroon/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
            
            {/* Text Side */}
            <div className="md:col-span-7 text-white space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <BadgeCheck size={16} className="text-moci-gold" />
                    <span className="text-sm font-medium text-moci-gold">فخر الصناعة الوطنية</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    صفحة المنتج القطري
                    <span className="block text-moci-gold mt-2">جودة عالمية بأيادي وطنية</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-xl">
                    المنصة الموحدة لدعم المنتجات القطرية، تمكين المصنعين، وربط الصناعة المحلية بالأسواق العالمية.
                </p>
            </div>

             {/* Image Side - Featured Qatar Image */}
            <div className="hidden md:block md:col-span-5 relative perspective-1000">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-500 group">
                    <img 
                        src={heroImage} 
                        alt="Doha skyline at sunset" 
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Floating Caption */}
                    <div className="absolute bottom-6 right-6 text-white shadow-sm">
                        <span className="block text-xs font-bold bg-moci-gold text-moci-maroon px-2 py-1 rounded mb-1 w-fit">#Qatar</span>
                        <span className="font-bold text-lg drop-shadow-md">الدوحة، قلب الاقتصاد</span>
                    </div>
                </div>
                
                {/* Decorative Elements behind the image */}
                <div className="absolute -inset-4 border-2 border-moci-gold/20 rounded-2xl -z-10 -rotate-3"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-moci-gold/10 rounded-full blur-xl"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


