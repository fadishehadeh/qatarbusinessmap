import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="relative z-20 -mt-16 container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vision Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-moci-maroon hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-moci-maroon/10 rounded-lg shrink-0">
              <Eye className="text-moci-maroon w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الرؤية</h3>
              <p className="text-gray-600 leading-relaxed">
                أن تكون المنتجات القطرية الخيار الأول للمستهلكين محلياً ومنافساً قوياً في الأسواق العالمية، تحقيقاً للتنوع الاقتصادي والاكتفاء الذاتي.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-moci-gold hover:shadow-2xl transition-shadow duration-300">
           <div className="flex items-start gap-4">
            <div className="p-3 bg-moci-gold/10 rounded-lg shrink-0">
              <Target className="text-moci-gold w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الرسالة</h3>
              <p className="text-gray-600 leading-relaxed">
                دعم وتمكين الصناعات القطرية من خلال توفير بيئة استثمارية محفزة، وتسهيل الإجراءات، وتعزيز جودة المنتج القطري ومكانته التنافسية.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;