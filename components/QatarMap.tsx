import React, { useEffect, useRef } from 'react';
import { MapPin, Factory, Info } from 'lucide-react';

interface IndustrialZone {
  id: string;
  name: string;
  description: string;
  count: number;
  // Real GPS coordinates for Qatar
  lat: number;
  lng: number;
}

const QatarMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  // Real GPS coordinates for industrial zones in Qatar
  const zones: IndustrialZone[] = [
    {
      id: 'al-ruwais',
      name: 'ميناء الرويس',
      description: 'بوابة قطر الشمالية للتجارة، يدعم الأنشطة التجارية البحرية.',
      count: 24,
      lat: 26.1411,
      lng: 51.2086
    },
    {
      id: 'ras-laffan',
      name: 'مدينة راس لفان الصناعية',
      description: 'المركز الرئيسي لإنتاج وتصدير الغاز الطبيعي المسال والصناعات الثقيلة.',
      count: 124,
      lat: 25.9272,
      lng: 51.4825
    },
    {
      id: 'al-khor',
      name: 'منطقة الخور الصناعية',
      description: 'منطقة حيوية للصناعات المتوسطة والخدمات اللوجستية.',
      count: 55,
      lat: 25.6805,
      lng: 51.4969
    },
    {
      id: 'dukhan',
      name: 'منطقة دخان',
      description: 'أول حقول النفط في قطر، مركز صناعي هام في المنطقة الغربية.',
      count: 42,
      lat: 25.4167,
      lng: 50.7833
    },
    {
      id: 'doha-ind',
      name: 'المنطقة الصناعية - الدوحة',
      description: 'أقدم وأكبر منطقة للصناعات الصغيرة والمتوسطة والخدمات المساندة.',
      count: 350,
      lat: 25.2167,
      lng: 51.4667
    },
    {
      id: 'al-wukair',
      name: 'الوكير اللوجستية',
      description: 'مجمعات تخزين وورش عمل تخدم قطاع التجزئة والمشاريع الصغيرة.',
      count: 88,
      lat: 25.1500,
      lng: 51.5333
    },
    {
      id: 'mesaieed',
      name: 'مدينة مسيعيد الصناعية',
      description: 'محور الصناعات البتروكيماوية، الأسمدة الكيماوية، والحديد والصلب.',
      count: 98,
      lat: 24.9833,
      lng: 51.5500
    },
    {
      id: 'um-alhoul',
      name: 'منطقة أم الحول',
      description: 'موقع استراتيجي بجوار ميناء حمد، يركز على الصناعات البحرية واللوجستية.',
      count: 76,
      lat: 25.0500,
      lng: 51.5833
    },
    {
      id: 'birkat',
      name: 'بركة العوامر',
      description: 'منطقة لوجستية وصناعية متكاملة تخدم جنوب الدولة.',
      count: 65,
      lat: 25.0833,
      lng: 51.4500
    },
    {
      id: 'al-karaana',
      name: 'منطقة الكرعانة',
      description: 'منطقة واعدة للصناعات البيئية ومواد البناء.',
      count: 45,
      lat: 25.2500,
      lng: 51.2000
    }
  ];

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=ar`;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current) return;

      // Center of Qatar
      const qatarCenter = { lat: 25.3548, lng: 51.1839 };

      // Create map
      const map = new google.maps.Map(mapRef.current, {
        center: qatarCenter,
        zoom: 8,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      googleMapRef.current = map;

      // Create info window
      const infoWindow = new google.maps.InfoWindow();
      infoWindowRef.current = infoWindow;

      // Add markers for each zone
      zones.forEach((zone) => {
        const marker = new google.maps.Marker({
          position: { lat: zone.lat, lng: zone.lng },
          map: map,
          title: zone.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#8A1538',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
          },
          animation: google.maps.Animation.DROP,
        });

        // Create directions URL
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${zone.lat},${zone.lng}&travelmode=driving`;

        // Create info window content with directions link
        const content = `
          <div style="font-family: 'Lusail', sans-serif; direction: rtl; padding: 12px; max-width: 280px;">
            <h3 style="color: #8A1538; font-weight: bold; margin: 0 0 10px 0; font-size: 17px;">${zone.name}</h3>
            <p style="color: #666; font-size: 13px; line-height: 1.6; margin: 0 0 12px 0;">${zone.description}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; margin-bottom: 12px;">
              <span style="font-size: 12px; color: #9ca3af; font-weight: bold;">إجمالي المصانع</span>
              <span style="background: rgba(192, 160, 98, 0.1); color: #8A1538; font-weight: bold; padding: 4px 8px; border-radius: 4px; font-size: 14px;">${zone.count}</span>
            </div>
            <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #8A1538; color: white; text-decoration: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; font-size: 14px; transition: background 0.3s;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
              احصل على الاتجاهات
            </a>
          </div>
        `;

        // Add hover listener to show info window
        marker.addListener('mouseover', () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });

        // Keep info window open on click as well
        marker.addListener('click', () => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });

        // Optional: Close info window when mouse leaves (you can remove this if you want it to stay open)
        marker.addListener('mouseout', () => {
          // Add a small delay before closing to allow user to move mouse to the info window
          setTimeout(() => {
            // Only close if user is not hovering over the info window itself
            const infoWindowElement = document.querySelector('.gm-style-iw-c');
            if (infoWindowElement && !infoWindowElement.matches(':hover')) {
              infoWindow.close();
            }
          }, 300);
        });

        markersRef.current.push(marker);
      });
    };

    loadGoogleMaps();

    // Cleanup
    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, []);

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
               <p>مرر الماوس فوق النقاط في الخريطة التفاعلية لعرض تفاصيل المنطقة وعدد المصانع. انقر على "احصل على الاتجاهات" للتوجه إلى الموقع.</p>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="lg:w-7/12 w-full flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div ref={mapRef} className="w-full h-full"></div>

              <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-white/90 px-3 py-2 rounded-lg backdrop-blur-sm shadow-md">
                * مرر الماوس فوق النقاط لعرض تفاصيل المنطقة الصناعية
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QatarMap;