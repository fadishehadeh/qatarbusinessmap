import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SuccessStory } from '../types';

const stories: SuccessStory[] = [
  {
    id: 1,
    companyName: "مصنع التميمي للحديد",
    description: "كانت البداية بحلم وفكرة... فكرة وُلدت من الطموح والرغبة في تقديم شيء مميز في عالم الصناعة القطرية. بدأت أولى خطوات التأسيس بتوثيق الفكرة رسميًا، حيث تم تسجيل المصنع في السجل التجاري، لتنطلق مسيرة إنتاج وتصدير الحديد القطري للعالم.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    logoUrl: "https://via.placeholder.com/100x100?text=TAMIMI" 
  },
  {
    id: 2,
    companyName: "بلدنا للصناعات الغذائية",
    description: "قصة نجاح تجسد الاكتفاء الذاتي لدولة قطر. انطلقنا برؤية واضحة لتأمين الغذاء الصحي لكل بيت في قطر، واليوم منتجاتنا تنافس في الأسواق العالمية بأعلى معايير الجودة.",
    imageUrl: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop",
    logoUrl: "https://via.placeholder.com/100x100?text=BALADNA" 
  },
   {
    id: 3,
    companyName: "قطر فارما",
    description: "رؤية طموحة لتحقيق الأمن الدوائي. مصنع قطر فارما هو الأول من نوعه في الصناعات الدوائية، نقدم حلولاً طبية متكاملة بأيدي وخبرات قطرية.",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    logoUrl: "https://via.placeholder.com/100x100?text=QPHARMA" 
  }
];

const SuccessStories: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % stories.length);
  const prev = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-moci-maroon mb-2">قصص نجاح</h2>
            <p className="text-gray-500">نحتفي بإنجازات الصناعة الوطنية</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="p-2 border border-gray-300 rounded-full hover:bg-moci-maroon hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
            <button onClick={next} className="p-2 border border-gray-300 rounded-full hover:bg-moci-maroon hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl min-h-[400px] flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
               <img 
                 src={stories[current].imageUrl} 
                 alt={stories[current].companyName}
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-moci-maroon/20 mix-blend-multiply"></div>
            </div>

            {/* Text Side */}
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
               <Quote className="absolute top-8 left-8 text-gray-200 w-20 h-20 -z-0 rotate-180" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-gray-400 border">
                        LOGOHOLDER
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">{stories[current].companyName}</h3>
                        <span className="text-moci-gold font-medium text-sm">صناعة قطرية رائدة</span>
                    </div>
                 </div>
                 
                 <p className="text-gray-600 text-lg leading-loose italic">
                   "{stories[current].description}"
                 </p>
                 
                 <div className="mt-8">
                   <button className="text-moci-maroon font-bold text-sm border-b border-moci-maroon pb-1 hover:text-moci-gold hover:border-moci-gold transition-colors">
                     اقرأ القصة الكاملة
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
            {stories.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-moci-maroon w-8' : 'bg-gray-300'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;