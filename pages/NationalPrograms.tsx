import React from 'react';

const NationalPrograms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">البرامج الوطنية / تصدير</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            التصدير في القطاع الصناعي يعد أساساً لتعزيز الاقتصاد الوطني في قطر
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-700 leading-relaxed mb-6">
              التصدير في القطاع الصناعي يعد أساساً لتعزيز الاقتصاد الوطني في قطر، ويمثل رؤية قطر 2030 لتحقيق التنوع الاقتصادي وتقليل الاعتماد على الموارد الطبيعية. تسعى قطر لتطوير صناعات متنوعة مثل النفط والغاز البتروكيماويات، الصناعات التحويلية، والمنتجات الغذائية والتكنولوجية، مما يعزز مكانتها كوجهة صناعية وتجارية عالمية. للمزيد من المعلومات، يمكنكم زيارة موقع بنك قطر للتنمية من خلال الرابط التالي:{' '}
              <a href="#" className="text-blue-600 hover:underline">
                هنا
              </a>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            دعونا نرى العالم منتجاتنا الوطنية التي تعتز بها في قطر شارك معنا
          </h2>
          <p className="text-xl mb-6">
            في الواتساغ على تويتر وانستغرام
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-moci-maroon px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              #معا_لدعم_المنتجات_الوطنية
            </button>
            <button className="bg-white text-moci-maroon px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              #MadeInQatar
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg mb-2">
            للمزيد من المعلومات تواصل معنا عبر البريد الالكتروني
          </p>
          <a
            href="mailto:nationalproduct@moci.gov.qa"
            className="text-moci-maroon font-bold text-xl hover:underline"
          >
            nationalproduct@moci.gov.qa
          </a>
        </div>
      </div>
    </div>
  );
};

export default NationalPrograms;

