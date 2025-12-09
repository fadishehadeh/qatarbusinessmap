import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

interface Report {
  year: number;
  title: string;
  url: string;
}

const TradeReports: React.FC = () => {
  const reports: Report[] = [
    {
      year: 2024,
      title: 'التقرير السنوي لقطاع الصناعات التحويلية في دولة قطر 2024',
      url: '#'
    },
    {
      year: 2022,
      title: 'التقرير السنوي لقطاع الصناعات التحويلية في دولة قطر 2022',
      url: '#'
    },
    {
      year: 2021,
      title: 'التقرير السنوي لقطاع الصناعات التحويلية في دولة قطر 2021',
      url: '#'
    },
    {
      year: 2020,
      title: 'التقرير السنوي لقطاع الصناعات التحويلية في دولة قطر 2020',
      url: '#'
    },
    {
      year: 2019,
      title: 'التقرير السنوي لقطاع الصناعات التحويلية في دولة قطر 2019',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تقارير صناعية</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            التقارير السنوية لقطاع الصناعات التحويلية في دولة قطر
          </p>
        </div>
      </div>

      {/* Submenu */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 py-3">
            <Link
              to="/news"
              className="text-gray-700 hover:text-moci-maroon transition-colors pb-1"
            >
              آخر الأخبار
            </Link>
            <Link
              to="/trade-reports"
              className="text-moci-maroon font-bold border-b-2 border-moci-maroon pb-1"
            >
              تقارير صناعية
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-700 leading-relaxed mb-8">
              تقدم التقارير الصناعية رؤى شاملة حول القطاع الصناعي في قطر، بما في ذلك التطورات الحالية والفرص المتاحة في هذا المجال. تهدف هذه التقارير إلى تعزيز الفهم للتوجهات الاقتصادية والصناعية، وتقديم معلومات تساعد في اتخاذ القرارات المبنية على بيانات دقيقة. للاطلاع على المزيد من التقارير، يمكنكم زيارة موقع بنك التنمية{' '}
              <a href="#" className="text-blue-600 hover:underline">
                هنا
              </a>
            </p>

            {/* Reports List */}
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.year}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {report.title}
                      </h3>
                    </div>
                    <a
                      href={report.url}
                      className="flex items-center gap-2 bg-moci-maroon text-white px-6 py-3 rounded-lg hover:bg-moci-lightMaroon transition-colors whitespace-nowrap"
                    >
                      <Download size={20} />
                      <span>تحميل</span>
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

export default TradeReports;

