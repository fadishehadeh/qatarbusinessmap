import React from 'react';
import { ArrowLeft } from 'lucide-react';

const events = [
    {
        title: "معرض صنع في قطر 2024",
        date: "أكتوبر 2024",
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "الجناح القطري - إكسبو",
        date: "نوفمبر 2024",
        img: "https://images.unsplash.com/photo-1560574188-6a6774965120?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "منتدى الاستثمار الصناعي",
        date: "ديسمبر 2024",
        img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    }
];

const TradeEvents: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">الأحداث والمعارض التجارية</h2>
          <a href="#" className="flex items-center gap-2 text-moci-maroon font-bold hover:text-moci-gold transition-colors">
            <span>عرض الكل</span>
            <ArrowLeft size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-md">
                        <img 
                          src={event.img} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 right-4 text-white">
                            <span className="text-xs bg-moci-maroon px-2 py-1 rounded mb-2 inline-block">{event.date}</span>
                            <h3 className="text-xl font-bold">{event.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TradeEvents;