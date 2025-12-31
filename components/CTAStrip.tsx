import React from 'react';
import { Heart } from 'lucide-react';

const CTAStrip: React.FC = () => {
  return (
    <section className="bg-moci-maroon py-16 text-center text-white relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-block p-4 rounded-full bg-white/10 mb-6 backdrop-blur-md">
            <Heart className="fill-white text-white w-8 h-8 animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          دعونا نُري العالم منتجاتنا القطرية...
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl font-light opacity-90">
            <span className="border-b border-moci-gold pb-1">#‏منا وفينا</span>
            <span className="border-b border-moci-gold pb-1">#المنتج_القطري</span>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;