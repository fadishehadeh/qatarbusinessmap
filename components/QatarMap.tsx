import React, { useState } from 'react';
import { MapPin, Factory, Info } from 'lucide-react';

interface IndustrialZone {
  id: string;
  name: string;
  description: string;
  count: number;
  // SVG coordinates for dot placement
  cx: number;
  cy: number;
}

const QatarMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  // Expanded list of zones with coordinates mapped to the new SVG path
  const zones: IndustrialZone[] = [
    { 
      id: 'al-ruwais', 
      name: 'ميناء الرويس', 
      description: 'بوابة قطر الشمالية للتجارة، يدعم الأنشطة التجارية البحرية.',
      count: 24, 
      cx: 155, 
      cy: 35 
    },
    { 
      id: 'ras-laffan', 
      name: 'مدينة راس لفان الصناعية', 
      description: 'المركز الرئيسي لإنتاج وتصدير الغاز الطبيعي المسال والصناعات الثقيلة.',
      count: 124, 
      cx: 215, 
      cy: 90 
    },
    { 
      id: 'al-khor', 
      name: 'منطقة الخور الصناعية', 
      description: 'منطقة حيوية للصناعات المتوسطة والخدمات اللوجستية.',
      count: 55, 
      cx: 210, 
      cy: 140 
    },
    { 
      id: 'dukhan', 
      name: 'منطقة دخان', 
      description: 'أول حقول النفط في قطر، مركز صناعي هام في المنطقة الغربية.',
      count: 42, 
      cx: 55, 
      cy: 210 
    },
    { 
      id: 'doha-ind', 
      name: 'المنطقة الصناعية - الدوحة', 
      description: 'أقدم وأكبر منطقة للصناعات الصغيرة والمتوسطة والخدمات المساندة.',
      count: 350, 
      cx: 195, 
      cy: 250 
    },
    { 
      id: 'al-wukair', 
      name: 'الوكير اللوجستية', 
      description: 'مجمعات تخزين وورش عمل تخدم قطاع التجزئة والمشاريع الصغيرة.',
      count: 88, 
      cx: 185, 
      cy: 290 
    },
    { 
      id: 'mesaieed', 
      name: 'مدينة مسيعيد الصناعية', 
      description: 'محور الصناعات البتروكيماوية، الأسمدة الكيماوية، والحديد والصلب.',
      count: 98, 
      cx: 210, 
      cy: 350 
    },
    { 
      id: 'um-alhoul', 
      name: 'منطقة أم الحول', 
      description: 'موقع استراتيجي بجوار ميناء حمد، يركز على الصناعات البحرية واللوجستية.',
      count: 76, 
      cx: 215, 
      cy: 320 
    },
    { 
      id: 'birkat', 
      name: 'بركة العوامر', 
      description: 'منطقة لوجستية وصناعية متكاملة تخدم جنوب الدولة.',
      count: 65, 
      cx: 175, 
      cy: 330 
    },
    { 
      id: 'al-karaana', 
      name: 'منطقة الكرعانة', 
      description: 'منطقة واعدة للصناعات البيئية ومواد البناء.',
      count: 45, 
      cx: 120, 
      cy: 280 
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-5/12 space-y-8 order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="bg-moci-maroon/10 text-moci-maroon text-xs font-bold px-3 py-1 rounded-full">بيانات تفاعلية</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                الخارطة الصناعية <span className="text-moci-maroon">لدولة قطر</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed border-r-4 border-moci-gold pr-6">
              استكشف المناطق الصناعية الحيوية. توفر هذه الخارطة التفاعلية نظرة شاملة على توزيع المصانع والمنشآت الإنتاجية في مختلف أنحاء الدولة، مما يدعم المستثمرين في اتخاذ قرارات استراتيجية مدروسة.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-moci-maroon/30 transition-colors">
                 <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 text-moci-maroon">
                    <Factory size={20} />
                 </div>
                 <span className="block text-3xl font-extrabold text-moci-maroon">800+</span>
                 <span className="text-sm text-gray-500 font-medium">مصنع وطني مسجل</span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-moci-maroon/30 transition-colors">
                 <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mb-3 text-moci-maroon">
                    <MapPin size={20} />
                 </div>
                 <span className="block text-3xl font-extrabold text-moci-maroon">10</span>
                 <span className="text-sm text-gray-500 font-medium">مناطق صناعية رئيسية</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start text-sm text-blue-800">
               <Info className="shrink-0 mt-1" size={16} />
               <p>قم بتمرير المؤشر على النقاط في الخريطة لعرض تفاصيل المنطقة وعدد المصانع المتواجدة بها.</p>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:w-7/12 w-full flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] aspect-[3/4]">
              
              {/* Tooltip Popup (Calculated Position relative to SVG container) */}
              {activeZone && (
                (() => {
                  const zone = zones.find(z => z.id === activeZone);
                  if(!zone) return null;
                  
                  // Convert SVG coordinates to % for HTML positioning
                  // ViewBox is 0 0 400 600
                  const leftPercent = (zone.cx / 400) * 100;
                  const topPercent = (zone.cy / 600) * 100;

                  return (
                    <div 
                      className="absolute z-50 bg-white rounded-xl shadow-2xl p-5 w-64 border border-gray-100 animate-fade-in-up pointer-events-none"
                      style={{ 
                        top: `${topPercent}%`, 
                        left: `${leftPercent}%`, 
                        transform: 'translate(20px, -50%)' // Shift right of the dot
                      }}
                    >
                      <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 border-l border-b border-gray-100"></div>
                      <h4 className="font-bold text-moci-maroon text-lg mb-2">{zone.name}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{zone.description}</p>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                         <span className="text-xs font-bold text-gray-400">إجمالي المصانع</span>
                         <span className="bg-moci-gold/10 text-moci-maroon font-bold px-2 py-0.5 rounded text-sm">{zone.count}</span>
                      </div>
                    </div>
                  )
                })()
              )}

              <svg 
                viewBox="0 0 400 600" 
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f3f4f6" />
                  </linearGradient>
                </defs>
                
                {/* 
                  Enhanced Qatar Map Path 
                  More detailed jagged coastline and accurate peninsula shape
                */}
                <path 
                  d="
                    M 155 20 
                    L 170 30
                    L 180 35
                    L 200 60
                    L 215 90
                    L 210 130
                    L 215 150
                    Q 210 160 215 170
                    L 225 210
                    Q 235 230 220 250
                    L 230 280
                    L 225 320
                    L 230 360
                    L 200 390
                    L 150 420
                    L 120 380
                    L 90 350
                    L 95 300
                    L 70 250
                    L 45 230
                    L 40 200
                    L 50 190
                    L 70 195
                    L 75 160
                    L 85 120
                    L 110 80
                    L 130 50
                    L 155 20
                    Z
                  " 
                  className="fill-white stroke-gray-300 stroke-[1.5]"
                  fill="url(#mapGradient)"
                />

                {zones.map((zone) => (
                   <g 
                     key={zone.id}
                     onMouseEnter={() => setActiveZone(zone.id)} 
                     onMouseLeave={() => setActiveZone(null)}
                     className="cursor-pointer group"
                   >
                     {/* Transparent Hit Area */}
                     <circle cx={zone.cx} cy={zone.cy} r="20" fill="transparent" />
                     
                     {/* Static Dot (No Animation) */}
                     <circle 
                       cx={zone.cx} 
                       cy={zone.cy} 
                       r="5" 
                       className={`transition-all duration-300 ${activeZone === zone.id ? 'fill-moci-gold scale-125' : 'fill-moci-maroon'}`}
                     />
                     <circle 
                       cx={zone.cx} 
                       cy={zone.cy} 
                       r="3" 
                       className="fill-none stroke-white stroke-[0.5]"
                     />
                     
                     {/* Static Ring on Hover only */}
                     <circle 
                        cx={zone.cx} 
                        cy={zone.cy} 
                        r="10" 
                        className={`stroke-1 fill-none transition-all duration-300 ${activeZone === zone.id ? 'stroke-moci-maroon opacity-30 scale-100' : 'stroke-transparent scale-50'}`}
                     />
                   </g>
                ))}

              </svg>

              <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-white/80 p-2 rounded backdrop-blur-sm">
                * خارطة توضيحية للمناطق الصناعية
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QatarMap;