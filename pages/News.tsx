import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import dohaImage from '../doha.png';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 12;

  // Dummy news data
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'وزارة التجارة والصناعة تطلق مبادرة جديدة لدعم المنتجات الوطنية',
      excerpt: 'أعلنت وزارة التجارة والصناعة عن إطلاق مبادرة جديدة تهدف إلى تعزيز المنتجات الوطنية القطرية في الأسواق المحلية والعالمية، وذلك في إطار رؤية قطر 2030 للتنويع الاقتصادي...',
      date: '2024-12-08',
      image: '/placeholder-news.jpg',
      category: 'أخبار الوزارة'
    },
    {
      id: 2,
      title: 'افتتاح مصنع جديد للصناعات الغذائية في المنطقة الصناعية',
      excerpt: 'شهدت المنطقة الصناعية في قطر افتتاح مصنع جديد للصناعات الغذائية بطاقة إنتاجية تبلغ 5000 طن سنوياً، مما يعزز الأمن الغذائي في الدولة...',
      date: '2024-12-07',
      image: '/placeholder-news.jpg',
      category: 'الصناعة'
    },
    {
      id: 3,
      title: 'قطر تستضيف المؤتمر الدولي للصناعات التحويلية 2024',
      excerpt: 'تستعد دولة قطر لاستضافة المؤتمر الدولي للصناعات التحويلية في شهر مارس 2024، بمشاركة أكثر من 500 خبير ومختص من مختلف دول العالم...',
      date: '2024-12-06',
      image: '/placeholder-news.jpg',
      category: 'فعاليات'
    },
    {
      id: 4,
      title: 'توقيع اتفاقية تعاون بين قطر والإمارات في المجال الصناعي',
      excerpt: 'وقعت وزارة التجارة والصناعة اتفاقية تعاون استراتيجي مع نظيرتها الإماراتية لتعزيز التبادل التجاري والصناعي بين البلدين...',
      date: '2024-12-05',
      image: '/placeholder-news.jpg',
      category: 'تعاون دولي'
    },
    {
      id: 5,
      title: 'إطلاق برنامج تدريبي لتطوير الكوادر الوطنية في القطاع الصناعي',
      excerpt: 'أطلقت الوزارة برنامجاً تدريبياً شاملاً يستهدف 200 شاب وشابة قطرية لتأهيلهم للعمل في مختلف القطاعات الصناعية...',
      date: '2024-12-04',
      image: '/placeholder-news.jpg',
      category: 'تدريب وتطوير'
    },
    {
      id: 6,
      title: 'ارتفاع صادرات المنتجات الصناعية القطرية بنسبة 25%',
      excerpt: 'أظهرت الإحصائيات الأخيرة ارتفاعاً ملحوظاً في صادرات المنتجات الصناعية القطرية خلال الربع الثالث من عام 2024 بنسبة 25% مقارنة بالفترة نفسها من العام الماضي...',
      date: '2024-12-03',
      image: '/placeholder-news.jpg',
      category: 'إحصائيات'
    },
    {
      id: 7,
      title: 'تكريم أفضل المصانع الملتزمة بمعايير الجودة والسلامة',
      excerpt: 'كرمت وزارة التجارة والصناعة 15 مصنعاً قطرياً لالتزامهم بأعلى معايير الجودة والسلامة في الإنتاج الصناعي...',
      date: '2024-12-02',
      image: '/placeholder-news.jpg',
      category: 'تكريم'
    },
    {
      id: 8,
      title: 'إطلاق منصة إلكترونية لتسويق المنتجات الوطنية',
      excerpt: 'دشنت الوزارة منصة إلكترونية جديدة تهدف إلى تسهيل عملية تسويق وبيع المنتجات الوطنية القطرية محلياً ودولياً...',
      date: '2024-12-01',
      image: '/placeholder-news.jpg',
      category: 'تكنولوجيا'
    }
  ];

  const totalPages = Math.ceil(newsArticles.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsArticles.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-l from-moci-maroon to-moci-lightMaroon text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">الاخبار والفعاليات</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            تابع آخر الأخبار والمستجدات في القطاع الصناعي والتجاري في دولة قطر
          </p>
        </div>
      </div>

      {/* Submenu */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 py-3">
            <Link
              to="/news"
              className="text-moci-maroon font-bold border-b-2 border-moci-maroon pb-1"
            >
              آخر الأخبار
            </Link>
            <Link
              to="/trade-reports"
              className="text-gray-700 hover:text-moci-maroon transition-colors pb-1"
            >
              تقارير صناعية
            </Link>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentNews.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* News Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute top-4 right-4 bg-moci-maroon text-white px-4 py-2 rounded-full text-sm font-bold">
                  {article.category}
                </div>
                {/* Doha image */}
                <img
                  src={dohaImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString('ar-QA')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-moci-maroon font-bold hover:underline">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={16} className="rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-600 hover:text-moci-maroon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            « التالي
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-600 hover:text-moci-maroon disabled:opacity-50 disabled:cursor-not-allowed"
          >
            السابق »
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;

