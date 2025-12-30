import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Regulation {
  title: string;
  url: string;
  category: string;
}

const Regulations: React.FC = () => {
  const regulations: Regulation[] = [
    {
      category: 'قانون رقم (8) لسنة 2008 بشأن تنظيم المنافسة',
      title: 'قانون رقم (8) لسنة 2008 بشأن تنظيم المنافسة ومنع الممارسات الاحتكارية في المعاملات التجارية',
      url: '#'
    },
    {
      category: 'تشريعات أخرى عن منظمة الصناعات الصغيرة والمتوسطة',
      title: 'قرار رقم (47) لسنة 2009',
      url: '#'
    },
    {
      category: 'دليل الاجراءات والتعاون مع الشركاء الاستراتيجية في دولة قطر',
      title: 'دليل الاجراءات والتعاون مع الشركاء الاستراتيجية في دولة قطر',
      url: '#'
    },
    {
      category: 'دليل الاجراءات المتعلقة بالمنافسة في دولة قطر',
      title: 'دليل الاجراءات المتعلقة بالمنافسة في دولة قطر',
      url: '#'
    },
    {
      category: 'الأدلة الارشادية لتعزيز الجودة الصناعية ومعاييرها الصناعية',
      title: 'الأدلة الارشادية لتعزيز الجودة الصناعية ومعاييرها الصناعية',
      url: '#'
    },
    {
      category: 'دليل الاشتراطات والتعليمات البيئة للمنشآت الصناعية',
      title: 'دليل الاشتراطات والتعليمات البيئة للمنشآت الصناعية',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">معلومات تشريعية / تنظيمية</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            القوانين واللوائح المنظمة للقطاع الصناعي في دولة قطر
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <h2 className="text-2xl font-bold text-moci-maroon mb-6">
              قانون رقم (8) لسنة 2008 بشأن تنظيم المنافسة
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              صدر قانون رقم (8) لسنة 2008 بشأن تنظيم المنافسة ومنع الممارسات الاحتكارية في المعاملات التجارية، وذلك بهدف تعزيز المنافسة العادلة وحماية المستهلكين من الممارسات الاحتكارية الضارة.
            </p>

            <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                يهدف هذا القانون إلى تنظيم المنافسة ومنع الممارسات الاحتكارية في المعاملات التجارية، وحماية المستهلكين والمنتجين من الممارسات التجارية غير العادلة.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-bold mb-8"
            >
              <span>المزيد</span>
              <ExternalLink size={18} />
            </a>

            {/* Regulations List */}
            <h2 className="text-2xl font-bold text-moci-maroon mb-6 mt-12">
              تشريعات أخرى عن منظمة الصناعات الصغيرة والمتوسطة
            </h2>

            <div className="space-y-4">
              {regulations.map((regulation, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {regulation.title}
                      </h3>
                      {regulation.category && (
                        <p className="text-sm text-gray-500">{regulation.category}</p>
                      )}
                    </div>
                    <a
                      href={regulation.url}
                      className="flex items-center gap-2 text-blue-600 hover:underline whitespace-nowrap"
                    >
                      <span>اطلع</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            دعونا نرى العالم منتجاتنا الوطنية التي تعتز بها في قطر
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

export default Regulations;

